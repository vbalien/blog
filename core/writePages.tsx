import * as ReactDOMServer from "react-dom/server";
import React from "react";
import fs, { promises as fsPromises } from "fs";
import path from "path";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import { StaticRouter } from "react-router-dom";
import { MutableSnapshot, RecoilRoot, RecoilState } from "recoil";

import { Page } from "./collectPages";
import { getRecoilState, RecoilStatePortal } from "./utils/RecoilStatePortal";
import normalizePagename from "./utils/normalizePagename";
import makeInitializeState from "./utils/makeInitializeState";

const template = ({
  body,
  scriptTags,
  linkTags,
  styleTags,
  preloadedState = new Map(),
  pagename,
}: {
  body: string;
  scriptTags: string;
  linkTags: string;
  styleTags: string;
  preloadedState: PreloadedState;
  pagename: string;
}) => `<!DOCTYPE html>
<html lang="ko">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>
  ${linkTags}
  ${styleTags}
  </head>
<body >
  <div id="root">${body}</div>
  <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(
      Array.from(preloadedState.entries())
    ).replace(/</g, "\\u003c")};
    window.__PAGENAME__ = ${JSON.stringify(pagename).replace(/</g, "\\u003c")};
  </script>
  ${scriptTags}
</body>
</html>`;

function renderApp(
  App: React.ComponentType,
  page: Page,
  webExtractor: ChunkExtractor,
  initializeState?: (snapshot: MutableSnapshot) => void
) {
  return ReactDOMServer.renderToString(
    <ChunkExtractorManager extractor={webExtractor}>
      <StaticRouter location={page.path}>
        <RecoilRoot initializeState={initializeState}>
          <RecoilStatePortal />
          <App />
        </RecoilRoot>
      </StaticRouter>
    </ChunkExtractorManager>
  );
}

async function getState<T = unknown>(state): Promise<T> {
  let content = await getRecoilState<T>(state);
  if (content["__value"] !== undefined && content["__key"] === state.key)
    content = content["__value"];
  return content;
}

export function getExtractor(): {
  entryPoint: EntryPoint;
  nodeExtractor: ChunkExtractor;
  webExtractor: ChunkExtractor;
} {
  const nodeStats = path.resolve("./dist/node/loadable-stats.json");
  const webStats = path.resolve("./dist/web/loadable-stats.json");

  const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Unreachable code error
  const entryPoint: EntryPoint = nodeExtractor.requireEntrypoint();

  const webExtractor = new ChunkExtractor({ statsFile: webStats });

  return {
    nodeExtractor,
    webExtractor,
    entryPoint,
  };
}

async function getPageStates(
  pagename: string,
  entryPoint
): Promise<RecoilState<unknown>[]> {
  const metadata = await entryPoint.getPageMetadata(pagename);
  const layoutname = metadata?.layout ?? "default";
  const layout: Layout =
    typeof layoutname === "string"
      ? await entryPoint.getLayout(layoutname)
      : layoutname;
  let preloadStates = layout.PreloadStates ?? [];
  if (typeof preloadStates === "function")
    preloadStates = preloadStates(pagename);

  const paginationState = await entryPoint.getPaginationState();
  if (/(.*\/)page\/(?:\d+|index)?$/.test(pagename))
    preloadStates = [paginationState(pagename), ...preloadStates];
  return preloadStates;
}

async function writePaginator(
  basePath: string,
  pages: Page[],
  paginator: Page
) {
  const publicPath = "/";
  const limit = 5;
  const paginatorDir = path.parse(paginator.path).dir;
  const childPages = pages.filter(
    p => p !== paginator && RegExp(`^${paginatorDir}\\/[^\\/]*$`).test(p.path)
  );
  const paginationDir = path.join(basePath, paginatorDir, "page");
  if (!fs.existsSync(paginationDir)) fs.mkdirSync(paginationDir);

  let pageNum = 0;

  do {
    pageNum++;
    const pagePath = path.join(paginationDir, `${pageNum}.html`);

    paginator.path = path.join(
      publicPath,
      path.relative(path.join(process.cwd(), "dist"), pagePath)
    );
    const html = await renderPage(paginator);
    const handle = await fsPromises.open(pagePath, "w");
    await handle.writeFile(html, {});
    await handle.close();
    console.info(`Write ${pagePath}`);
  } while (childPages.length >= pageNum * limit);

  fs.copyFileSync(
    path.join(paginationDir, `1.html`),
    path.join(paginationDir, `index.html`)
  );
  console.info(`Write ${path.join(paginationDir, `index.html`)}`);
}

async function renderPage(page: Page) {
  const { webExtractor, entryPoint } = getExtractor();
  const pagename = normalizePagename(page.path);
  const preloadStates = await getPageStates(pagename, entryPoint);

  renderApp(entryPoint.default, page, webExtractor);

  const preloadedState: PreloadedState = new Map();
  for (const state of preloadStates) {
    const stateContent = await getState(state);
    preloadedState.set(state.key, stateContent);
  }

  const initializeState = makeInitializeState(preloadStates, preloadedState);
  const body = renderApp(
    entryPoint.default,
    page,
    webExtractor,
    initializeState
  );

  const scriptTags = webExtractor.getScriptTags();
  const linkTags = webExtractor.getLinkTags();
  const styleTags = webExtractor.getStyleTags();

  const html = template({
    body,
    scriptTags,
    linkTags,
    styleTags,
    preloadedState,
    pagename,
  });
  return html;
}

export async function writePages(pages: Page[]): Promise<void> {
  const basePath = "./dist/";
  if (!fs.existsSync(basePath)) fs.mkdirSync(basePath);

  for (const page of pages) {
    const pagePath = path.join(basePath, page.path);
    const pageDir = path.parse(pagePath).dir;
    if (!fs.existsSync(pageDir)) fs.mkdirSync(pageDir);
    if (/\/_paginator\.html$/.test(page.path)) {
      await writePaginator(basePath, pages, page);
    } else {
      const html = await renderPage(page);
      const handle = await fsPromises.open(pagePath, "w");
      await handle.writeFile(html, {});
      await handle.close();
      console.info(`Write ${pagePath}`);
    }
  }
}
