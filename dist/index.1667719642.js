var L=Object.defineProperty;var D=(r,i,o)=>i in r?L(r,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[i]=o;var _=(r,i,o)=>(D(r,typeof i!="symbol"?i+"":i,o),o);import{c as $,f as z,a as B,s as I,j as e,A as T,T as E,B as a,b as h,u as O,d as Q,G as w,r as g,C as S,S as C,e as P,g as G,h as q,i as H,P as M,k as W,l as V,R as K,m as J}from"./vendor.1667719642.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const t of l)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(l){const t={};return l.integrity&&(t.integrity=l.integrity),l.referrerpolicy&&(t.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?t.credentials="include":l.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(l){if(l.ep)return;l.ep=!0;const t=o(l);fetch(l.href,t)}})();class y{}_(y,"baseUrl","https://adminpanel-test.hrms.flyhub.com");const b=$({reducerPath:"appsApi",baseQuery:z({baseUrl:y.baseUrl}),endpoints:r=>({getApps:r.query({query:i=>({url:"/apps"})}),getSingleApp:r.query({query:i=>({url:`/apps/${i}`})})})}),{useGetAppsQuery:X,useLazyGetAppsQuery:pe,useGetSingleAppQuery:Y,useLazyGetSingleAppQuery:be}=b,U=B({reducer:{[b.reducerPath]:b.reducer},middleware:r=>r().concat(b.middleware)});I(U.dispatch);const Z="/logo.1667719642.svg";var N="/Users/nasir/Documents/node/FlyhubRedirects/src/components/global/TopBar.tsx";const ee=({name:r})=>e(T,{position:"static",sx:{my:2,boxShadow:"none"},color:"transparent",children:e(E,{variant:"dense",sx:{justifyContent:"space-between",px:"0 !important"},children:[e(a,{component:"img",src:Z,alt:"flyhub.com",width:117,height:39,loading:"lazy",style:{cursor:"pointer"},onClick:()=>window.open("https://flyhub.com","_self")},void 0,!1,{fileName:N,lineNumber:24,columnNumber:9},void 0),e(h,{variant:"h6",color:"inherit",component:"div",children:r},void 0,!1,{fileName:N,lineNumber:34,columnNumber:9},void 0)]},void 0,!0,{fileName:N,lineNumber:17,columnNumber:7},void 0)},void 0,!1,{fileName:N,lineNumber:9,columnNumber:5},void 0),re="/appStore.1667719642.svg",ie="/playStore.1667719642.svg";var s="/Users/nasir/Documents/node/FlyhubRedirects/src/components/home/AppListItem.tsx";const oe=({item:r,isOdd:i})=>{const{path:o,android:n,cover:l,ios:t,name:d,coverMeta:k,country:u}=r,f=O(Q().breakpoints.up("md"));return e(a,{sx:c=>({backgroundColor:"#FFFFFF",borderRadius:4,mb:3.75,p:f?10:5}),children:e(w,{columnSpacing:f?10:2,container:!0,alignItems:"center",flexDirection:i?"row":"row-reverse",children:[e(w,{item:!0,xs:12,md:5,sx:c=>({[c.breakpoints.down("md")]:{textAlign:"center"}}),children:e(g.exports.Suspense,{fallback:e(a,{sx:k,children:e(S,{},void 0,!1,{fileName:s,lineNumber:54,columnNumber:17},void 0)},void 0,!1,{fileName:s,lineNumber:53,columnNumber:15},void 0),children:e(a,{component:"img",src:l?y.baseUrl+l:"/flyhub.png",alt:o,sx:{borderRadius:4,maxWidth:"100%"},loading:"lazy"},void 0,!1,{fileName:s,lineNumber:58,columnNumber:13},void 0)},void 0,!1,{fileName:s,lineNumber:51,columnNumber:11},void 0)},void 0,!1,{fileName:s,lineNumber:41,columnNumber:9},void 0),e(w,{item:!0,xs:12,md:7,children:[e(h,{component:"h2",sx:c=>({mb:2,fontSize:f?44:32,fontWeight:700,lineHeight:1.23,[c.breakpoints.down("md")]:{mt:2,textAlign:"center"}}),children:d},void 0,!1,{fileName:s,lineNumber:69,columnNumber:11},void 0),!!(u!=null&&u.code)&&e(C,{direction:"row",alignItems:"center",sx:c=>({mb:f?5:3,[c.breakpoints.down("md")]:{justifyContent:"center"}}),children:[e(g.exports.Suspense,{fallback:e(a,{sx:{width:36,height:26},children:e(S,{},void 0,!1,{fileName:s,lineNumber:98,columnNumber:21},void 0)},void 0,!1,{fileName:s,lineNumber:97,columnNumber:19},void 0),children:e(a,{component:"img",src:y.baseUrl+`/assets/image/flags/${u.code.toLowerCase()}.svg`,alt:u.code,loading:"lazy",sx:{width:36,borderRadius:.6}},void 0,!1,{fileName:s,lineNumber:102,columnNumber:17},void 0)},void 0,!1,{fileName:s,lineNumber:95,columnNumber:15},void 0),e(h,{component:"h2",sx:{fontSize:24,fontWeight:700,lineHeight:1.23,ml:3},children:u==null?void 0:u.name},void 0,!1,{fileName:s,lineNumber:113,columnNumber:15},void 0)]},void 0,!0,{fileName:s,lineNumber:85,columnNumber:13},void 0),e(C,{direction:"row",spacing:2,sx:c=>({img:{maxWidth:"47%"},[c.breakpoints.down("md")]:{justifyContent:"center"}}),children:[!!n&&e(a,{component:"img",src:ie,alt:"install app",loading:"lazy",sx:{cursor:"pointer"},onClick:()=>window.open(n,"_self")},void 0,!1,{fileName:s,lineNumber:139,columnNumber:15},void 0),!!t&&e(a,{component:"img",src:re,alt:"get app",loading:"lazy",sx:{cursor:"pointer",ml:2},onClick:()=>window.open(t,"_self")},void 0,!1,{fileName:s,lineNumber:149,columnNumber:15},void 0)]},void 0,!0,{fileName:s,lineNumber:126,columnNumber:11},void 0)]},void 0,!0,{fileName:s,lineNumber:68,columnNumber:9},void 0)]},void 0,!0,{fileName:s,lineNumber:35,columnNumber:7},void 0)},void 0,!1,{fileName:s,lineNumber:27,columnNumber:5},void 0)};var p="/Users/nasir/Documents/node/FlyhubRedirects/src/components/home/HomeView.tsx";const j=({list:r,name:i})=>e(P,{children:[e(ee,{name:i},void 0,!1,{fileName:p,lineNumber:15,columnNumber:7},void 0),(r||[]).length?(r||[]).map((o,n)=>e(oe,{item:o,isOdd:n%2!==0},`redirect-item-${o.id}`,!1,{fileName:p,lineNumber:23,columnNumber:13},void 0)):e(h,{variant:"h5",component:"h2",children:"No app found!"},void 0,!1,{fileName:p,lineNumber:17,columnNumber:9},void 0)]},void 0,!0,{fileName:p,lineNumber:14,columnNumber:5},void 0);var F="/Users/nasir/Documents/node/FlyhubRedirects/src/components/global/loader.tsx";const x=({text:r})=>e(a,{sx:{display:"flex",width:"100%",height:"calc(100vh - 74px - 56px)",alignItems:"center",justifyContent:"center"},children:[e(S,{color:"info",sx:{mr:2}},void 0,!1,{fileName:F,lineNumber:14,columnNumber:5},void 0),e("span",{children:r||"Loading..."},void 0,!1,{fileName:F,lineNumber:15,columnNumber:5},void 0)]},void 0,!0,{fileName:F,lineNumber:5,columnNumber:3},void 0);var ne="/Users/nasir/Documents/node/FlyhubRedirects/src/components/mobileApps/CheckAndRedirect.tsx";const le=({android:r,ios:i})=>{const o=()=>{window.open("https://flyhub.com","_self")};return g.exports.useEffect(()=>{["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.platform.includes("Mac")?i?window.open(i,"_self"):o():r?window.open(r,"_self"):o()},[r,i]),e(x,{},void 0,!1,{fileName:ne,lineNumber:35,columnNumber:10},void 0)};var se="/Users/nasir/Documents/node/FlyhubRedirects/src/routes/errorRoute.tsx";const v=()=>(g.exports.useEffect(()=>{window.open("https://flyhub.com","_self")}),e(x,{},void 0,!1,{fileName:se,lineNumber:8,columnNumber:10},void 0));var A="/Users/nasir/Documents/node/FlyhubRedirects/src/routes/detectApp.tsx";const te=()=>{const i=G().app||"",{isLoading:o,data:n,isFetching:l}=Y(i);if(o||l)return e(x,{},void 0,!1,{fileName:A,lineNumber:15,columnNumber:12},void 0);if(!!n&&!!(n!=null&&n.result))return Array.isArray(n==null?void 0:n.result)?e(j,{list:n==null?void 0:n.result,name:`${i} Apps`.toUpperCase()},void 0,!1,{fileName:A,lineNumber:19,columnNumber:9},void 0):e(le,{...n==null?void 0:n.result},void 0,!1,{fileName:A,lineNumber:22,columnNumber:12},void 0)};var R="/Users/nasir/Documents/node/FlyhubRedirects/src/routes/homeRoute.tsx";const me=()=>{const{isLoading:r,error:i,data:o,isFetching:n}=X(null);return r||n||!i&&!o?e(x,{},void 0,!1,{fileName:R,lineNumber:10,columnNumber:60},void 0):!!i||!!o&&!!o.error&&!o.result?e(v,{},void 0,!1,{fileName:R,lineNumber:12,columnNumber:12},void 0):e(j,{list:(o==null?void 0:o.result)||[],name:"All Apps".toUpperCase()},void 0,!1,{fileName:R,lineNumber:15,columnNumber:7},void 0)},ae=q({palette:{primary:{main:"#002441"},secondary:{main:"#e95539"}}});var m="/Users/nasir/Documents/node/FlyhubRedirects/src/App.tsx";const ue=H([{path:"/",element:e(me,{},void 0,!1,{fileName:m,lineNumber:16,columnNumber:14},void 0),errorElement:e(v,{},void 0,!1,{fileName:m,lineNumber:17,columnNumber:19},void 0)},{path:"/:app",element:e(te,{},void 0,!1,{fileName:m,lineNumber:21,columnNumber:14},void 0),errorElement:e(v,{},void 0,!1,{fileName:m,lineNumber:22,columnNumber:19},void 0)},{path:"*",element:e(v,{},void 0,!1,{fileName:m,lineNumber:26,columnNumber:14},void 0)}]),ce=()=>e(M,{store:U,children:e(W,{theme:ae,children:[e(V,{enableColorScheme:!0},void 0,!1,{fileName:m,lineNumber:34,columnNumber:9},void 0),e(P,{sx:{py:3},children:e(K,{router:ue},void 0,!1,{fileName:m,lineNumber:36,columnNumber:11},void 0)},void 0,!1,{fileName:m,lineNumber:35,columnNumber:9},void 0)]},void 0,!0,{fileName:m,lineNumber:33,columnNumber:7},void 0)},void 0,!1,{fileName:m,lineNumber:32,columnNumber:5},void 0);var de="/Users/nasir/Documents/node/FlyhubRedirects/src/main.tsx";J.createRoot(document.getElementById("root")).render(e(ce,{},void 0,!1,{fileName:de,lineNumber:12,columnNumber:3},globalThis));
