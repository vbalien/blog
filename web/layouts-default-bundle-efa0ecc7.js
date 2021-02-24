(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["layouts-default","layouts-default-CodeBlock","layouts-default-Profile","layouts-default-Sidebar"],{"./node_modules/@mdx-js/react/dist/esm.js":(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>m});var n=r("./node_modules/react/index.js");function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=n.createContext({}),i=function(e){var t=n.useContext(l);return"function"==typeof e?e(t):a(a({},t),e)},c=function(e){var t=e.components,r=e.children,o=e.disableParentContext,s=i(t);return o&&(s=t),n.createElement(l.Provider,{value:s},r)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["components","mdxType","originalType","parentName"]),d=i(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},"./layouts/default/CodeBlock.tsx":(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u}),r("./node_modules/core-js/modules/es.array.map.js"),r("./node_modules/core-js/modules/es.regexp.exec.js"),r("./node_modules/core-js/modules/es.string.replace.js");var n=r("./node_modules/react/index.js"),o=r("./node_modules/prism-react-renderer/dist/index.js"),s=r("./node_modules/prism-react-renderer/themes/dracula/index.js");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){var t=e.children,r=e.className,l=null==r?void 0:r.replace(/language-/,"");return n.createElement(o.ZP,a({},o.lG,{code:t,language:l,theme:s.Z}),(function(e){var t=e.className,r=e.style,o=e.tokens,s=e.getLineProps,l=e.getTokenProps;return n.createElement("pre",{className:t,style:i(i({},r),{},{padding:"20px"})},o.map((function(e,t){return n.createElement("div",a({key:t},s({line:e,key:t})),e.map((function(e,t){return n.createElement("span",a({key:t},l({token:e,key:t})))})))})))}))}},"./layouts/default/Profile.tsx":(e,t,r)=>{"use strict";r.r(t),r.d(t,{Profile:()=>f}),r("./node_modules/core-js/modules/es.symbol.js"),r("./node_modules/core-js/modules/es.symbol.description.js"),r("./node_modules/core-js/modules/es.function.name.js");var n=r("./node_modules/react/index.js"),o=r("./node_modules/@chakra-ui/layout/dist/esm/flex.js"),s=r("./node_modules/@chakra-ui/image/dist/esm/image.js"),a=r("./node_modules/@chakra-ui/layout/dist/esm/text.js"),l=r("./node_modules/@chakra-ui/layout/dist/esm/box.js"),i=r("./node_modules/@chakra-ui/layout/dist/esm/stack.js"),c=r("./node_modules/@chakra-ui/layout/dist/esm/link.js"),u=r("./node_modules/react-icons/vsc/index.esm.js"),d=r("./node_modules/react-icons/fi/index.esm.js"),m=r("./node_modules/@chakra-ui/icon/dist/esm/icon.js"),f=function(e){var t=e.name,r=e.description;return n.createElement(o.k,{direction:"row",m:"5em 0"},n.createElement(s.E,{width:"5em",height:"5em",borderRadius:"full",alignSelf:"center",src:"https://avatars.githubusercontent.com/u/4590714"}),n.createElement(o.k,{direction:"column",ml:"0.7em"},n.createElement(a.x,{fontSize:"xl"},t),n.createElement(l.xu,null,r),n.createElement(i.Ug,{spacing:"0.7em",mt:"0.5em"},n.createElement(c.r,{target:"_blank",href:"https://twitter.com/_elnyan"},n.createElement(m.J,{as:d.Ccr,w:"1.2em",h:"1.2em"})),n.createElement(c.r,{target:"_blank",href:"https://github.com/vbalien"},n.createElement(m.J,{as:u.iyW,w:"1.2em",h:"1.2em"})),n.createElement(c.r,{target:"_blank",href:"mailto:webmaster@alien.moe"},n.createElement(m.J,{as:u.cee,w:"1.2em",h:"1.2em"})))))}},"./layouts/default/Sidebar.tsx":(e,t,r)=>{"use strict";r.r(t),r.d(t,{Sidebar:()=>x}),r("./node_modules/core-js/modules/es.symbol.js"),r("./node_modules/core-js/modules/es.symbol.description.js"),r("./node_modules/core-js/modules/es.function.name.js");var n=r("./node_modules/react/index.js"),o=r("./node_modules/@chakra-ui/icon/dist/esm/icon.js"),s=r("./node_modules/@chakra-ui/system/dist/esm/index.js"),a=r("./node_modules/@chakra-ui/system/dist/esm/system.utils.js"),l=r("./node_modules/@chakra-ui/utils/dist/esm/index.js");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var u=(0,s.forwardRef)(((e,t)=>{var r=(0,s.useMultiStyleConfig)("List",e),o=(0,a.Lr)(e),{children:u,styleType:d="none",stylePosition:m,spacing:f}=o,p=c(o,["children","styleType","stylePosition","spacing"]),y=(0,l.getValidChildren)(u),j=f?{"& > *:not(style) ~ *:not(style)":{mt:f}}:{};return n.createElement(s.StylesProvider,{value:r},n.createElement(s.chakra.ul,i({ref:t,listStyleType:d,listStylePosition:m,role:"list",__css:i({},r.container,j)},p),y))}));l.__DEV__&&(u.displayName="List");var d=(0,s.forwardRef)(((e,t)=>{var r=c(e,["as"]);return n.createElement(u,i({ref:t,as:"ol",styleType:"decimal",marginLeft:"1em"},r))}));l.__DEV__&&(d.displayName="OrderedList");var m=(0,s.forwardRef)(((e,t)=>{var r=c(e,["as"]);return n.createElement(u,i({ref:t,as:"ul",styleType:"initial",marginLeft:"1em"},r))}));l.__DEV__&&(m.displayName="UnorderedList");var f=(0,s.forwardRef)(((e,t)=>{var r=(0,s.useStyles)();return n.createElement(s.chakra.li,i({ref:t},e,{__css:r.item}))}));l.__DEV__&&(f.displayName="ListItem");var p=(0,s.forwardRef)(((e,t)=>{var r=(0,s.useStyles)();return n.createElement(o.J,i({ref:t,role:"presentation"},e,{__css:r.icon}))}));l.__DEV__&&(p.displayName="ListIcon");var y=r("./node_modules/@chakra-ui/layout/dist/esm/box.js"),j=r("./node_modules/@chakra-ui/layout/dist/esm/stack.js"),g=r("./node_modules/@chakra-ui/layout/dist/esm/link.js"),b=r("./node_modules/react-icons/vsc/index.esm.js"),_=r("./node_modules/react-router-dom/esm/react-router-dom.js"),h=r("./layouts/default/Profile.tsx"),v=r("./core/client/AsyncPage.tsx"),E=r("./core/utils/normalizePagename.ts"),x=function(e){var t=e.name,r=e.description;return n.createElement(y.xu,{backgroundColor:"#a4508b",backgroundImage:"linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)",color:"#fff",width:"calc(50% - 350px)",minWidth:"350px",display:"flex",flexDirection:"column",alignItems:"flex-end"},n.createElement(j.gC,{width:"350px"},n.createElement(h.Profile,{name:t,description:r}),n.createElement(y.xu,{as:"nav",alignSelf:"flex-end",mr:"3em"},n.createElement(u,{spacing:"0.7em",fontWeight:"light",fontSize:"2xl"},n.createElement(f,null,n.createElement(g.r,{as:_.rU,to:"/",onMouseOver:function(){return v.Z.preload({pagename:(0,E.Z)("/")})}},n.createElement(p,{as:b.$xF}),"Home")),n.createElement(f,null,n.createElement(g.r,{as:_.rU,to:"/products.html",onMouseOver:function(){return v.Z.preload({pagename:(0,E.Z)("/products.html")})}},n.createElement(p,{as:b.B26}),"Products")),n.createElement(f,null,n.createElement(g.r,{as:_.rU,to:"/archives/page/",onMouseOver:function(){return v.Z.preload({pagename:(0,E.Z)("/archives/page/")})}},n.createElement(p,{as:b.u8p}),"Archives")),n.createElement(f,null,n.createElement(g.r,{as:_.rU,to:"/tags/",onMouseOver:function(){return v.Z.preload({pagename:(0,E.Z)("/tags/")})}},n.createElement(p,{as:b.i4C}),"Tags"))))))}},"./layouts/default/index.tsx":(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d}),r("./node_modules/core-js/modules/es.object.assign.js");var n=r("./node_modules/react/index.js"),o=r("./layouts/default/Sidebar.tsx"),s=r("./node_modules/@chakra-ui/layout/dist/esm/box.js"),a=r("./node_modules/@mdx-js/react/dist/esm.js"),l=r("./layouts/default/CodeBlock.tsx");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c={pre:function(e){return n.createElement("div",e)},code:function(e){return n.createElement(l.default,e)},blockquote:function(e){return n.createElement(s.xu,i({width:"full",alignItems:"center",position:"relative",overflow:"hidden",paddingLeft:"0.75rem",paddingRight:"1rem",paddingTop:"0.75rem",paddingBottom:"0.75rem",borderLeft:"4px solid",borderColor:"#DD6B20",background:"#FEEBC8",marginTop:"1.5rem",borderRadius:"4px",marginBottom:"1.5rem"},e))}},u=function(e){var t=e.children;return n.createElement(a.Zo,{components:c},n.createElement(s.xu,{display:"flex",height:"100vh"},n.createElement(o.Sidebar,{name:"金持寿",description:"フロントエンドディベロッパー"}),n.createElement(s.xu,{className:"markdown-body",width:"calc(50% + 350px)",p:"30px",overflowY:"scroll"},n.createElement(s.xu,{as:"article",maxW:"1024px"},t))))};u.PreloadStates=[];const d=u},"./node_modules/core-js/internals/object-assign.js":(e,t,r)=>{"use strict";var n=r("./node_modules/core-js/internals/descriptors.js"),o=r("./node_modules/core-js/internals/fails.js"),s=r("./node_modules/core-js/internals/object-keys.js"),a=r("./node_modules/core-js/internals/object-get-own-property-symbols.js"),l=r("./node_modules/core-js/internals/object-property-is-enumerable.js"),i=r("./node_modules/core-js/internals/to-object.js"),c=r("./node_modules/core-js/internals/indexed-object.js"),u=Object.assign,d=Object.defineProperty;e.exports=!u||o((function(){if(n&&1!==u({b:1},u(d({},"a",{enumerable:!0,get:function(){d(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},r=Symbol(),o="abcdefghijklmnopqrst";return e[r]=7,o.split("").forEach((function(e){t[e]=e})),7!=u({},e)[r]||s(u({},t)).join("")!=o}))?function(e,t){for(var r=i(e),o=arguments.length,u=1,d=a.f,m=l.f;o>u;)for(var f,p=c(arguments[u++]),y=d?s(p).concat(d(p)):s(p),j=y.length,g=0;j>g;)f=y[g++],n&&!m.call(p,f)||(r[f]=p[f]);return r}:u},"./node_modules/core-js/modules/es.object.assign.js":(e,t,r)=>{var n=r("./node_modules/core-js/internals/export.js"),o=r("./node_modules/core-js/internals/object-assign.js");n({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})}}]);