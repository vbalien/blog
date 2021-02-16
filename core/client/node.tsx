import { PageMetadata, PaginationApi } from "core/collectPages";
import { RecoilState } from "recoil";

export { default } from "./App";

export const getLayout = async (name: string): Promise<Layout> =>
  await import(`layouts/${name ?? "default"}`);

export const getPageMetadata = async (
  pagename: string
): Promise<PageMetadata> => {
  pagename = pagename.replace(
    /(.*\/)page\/[^\\/]*(?:\d+|index)?$/,
    "$1_paginator"
  );
  return (await import(`pages/${pagename}`)).metadata;
};

export const getPaginationState = async (): Promise<
  (apiPath: string) => RecoilState<PaginationApi>
> => (await import("core/store/paginationState")).default;
