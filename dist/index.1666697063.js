var L=Object.defineProperty;var U=(r,i,o)=>i in r?L(r,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[i]=o;var S=(r,i,o)=>(U(r,typeof i!="symbol"?i+"":i,o),o);import{c as j,f as C,a as R,s as $,j as e,A as k,T as z,B as t,b,G as x,r as v,C as D,S as _,d as F,u as B,e as I,g as T,P as G,h as Q,i as q,R as H,k as M}from"./vendor.1666697063.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const m of n)if(m.type==="childList")for(const c of m.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const m={};return n.integrity&&(m.integrity=n.integrity),n.referrerpolicy&&(m.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?m.credentials="include":n.crossorigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function l(n){if(n.ep)return;n.ep=!0;const m=o(n);fetch(n.href,m)}})();class h{}S(h,"baseUrl","https://adminpanel-test.hrms.flyhub.com");const f=j({reducerPath:"appsApi",baseQuery:C({baseUrl:h.baseUrl}),endpoints:r=>({getApps:r.query({query:i=>({url:"/apps"})}),getSingleApp:r.query({query:i=>({url:`/apps/${i}`})})})}),{useGetAppsQuery:V,useLazyGetAppsQuery:ce,useGetSingleAppQuery:W,useLazyGetSingleAppQuery:de}=f,E=R({reducer:{[f.reducerPath]:f.reducer},middleware:r=>r().concat(f.middleware)});$(E.dispatch);const K="/logo.1666697063.svg";var d="/Users/nasir/Documents/NODE/redirects/src/components/global/TopBar.tsx";const J=({name:r})=>e(k,{position:"static",sx:{my:2,boxShadow:"none"},color:"transparent",children:e(z,{variant:"dense",sx:{justifyContent:"space-between",px:"0 !important"},children:[e(t,{component:"img",src:K,alt:"flyhub.com",width:117,height:39,loading:"lazy",style:{cursor:"pointer"},onClick:()=>window.open("https://flyhub.com","_self")},void 0,!1,{fileName:d,lineNumber:24,columnNumber:9},void 0),e(b,{variant:"h6",color:"inherit",component:"div",children:r},void 0,!1,{fileName:d,lineNumber:34,columnNumber:9},void 0)]},void 0,!0,{fileName:d,lineNumber:17,columnNumber:7},void 0)},void 0,!1,{fileName:d,lineNumber:9,columnNumber:5},void 0),X="/appStore.1666697063.svg",Y="/playStore.1666697063.svg";var s="/Users/nasir/Documents/NODE/redirects/src/components/home/AppListItem.tsx";const Z=({item:r,isOdd:i})=>{const{path:o,android:l,cover:n,ios:m,name:c,coverMeta:P,country:u}=r;return e(t,{sx:{backgroundColor:"#FFFFFF",borderRadius:4,mb:3.75,p:10},children:e(x,{columnSpacing:10,container:!0,alignItems:"center",flexDirection:i?"row":"row-reverse",children:[e(x,{item:!0,xs:12,md:5,children:e(v.exports.Suspense,{fallback:e(t,{sx:P,children:e(D,{},void 0,!1,{fileName:s,lineNumber:35,columnNumber:17},void 0)},void 0,!1,{fileName:s,lineNumber:34,columnNumber:15},void 0),children:e(t,{component:"img",src:n?h.baseUrl+n:"/flyhub.png",alt:o,sx:{borderRadius:4,maxWidth:"100%"},loading:"lazy"},void 0,!1,{fileName:s,lineNumber:39,columnNumber:13},void 0)},void 0,!1,{fileName:s,lineNumber:32,columnNumber:11},void 0)},void 0,!1,{fileName:s,lineNumber:31,columnNumber:9},void 0),e(x,{item:!0,xs:12,md:7,children:[e(b,{component:"h2",sx:{mb:2,fontSize:44,fontWeight:700,lineHeight:1.23},children:c},void 0,!1,{fileName:s,lineNumber:50,columnNumber:11},void 0),!!(u!=null&&u.code)&&e(_,{direction:"row",alignItems:"center",sx:{mb:5},children:[e(v.exports.Suspense,{fallback:e(t,{sx:{width:36,height:26},children:e(D,{},void 0,!1,{fileName:s,lineNumber:66,columnNumber:21},void 0)},void 0,!1,{fileName:s,lineNumber:65,columnNumber:19},void 0),children:e(t,{component:"img",src:h.baseUrl+`/assets/image/flags/${u.code.toLowerCase()}.svg`,alt:u.code,loading:"lazy",sx:{width:36,borderRadius:.6}},void 0,!1,{fileName:s,lineNumber:70,columnNumber:17},void 0)},void 0,!1,{fileName:s,lineNumber:63,columnNumber:15},void 0),e(b,{component:"h2",sx:{fontSize:24,fontWeight:700,lineHeight:1.23,ml:3},children:u==null?void 0:u.name},void 0,!1,{fileName:s,lineNumber:81,columnNumber:15},void 0)]},void 0,!0,{fileName:s,lineNumber:62,columnNumber:13},void 0),e(_,{direction:"row",spacing:2,children:[!!l&&e(t,{component:"img",src:Y,alt:"install app",loading:"lazy",width:189,height:56,style:{cursor:"pointer"},onClick:()=>window.open(l,"_self")},void 0,!1,{fileName:s,lineNumber:96,columnNumber:15},void 0),e(t,{sx:{ml:2}},void 0,!1,{fileName:s,lineNumber:107,columnNumber:13},void 0),!!m&&e(t,{component:"img",src:X,alt:"get app",loading:"lazy",width:189,height:56,style:{cursor:"pointer"},onClick:()=>window.open(m,"_self")},void 0,!1,{fileName:s,lineNumber:109,columnNumber:15},void 0)]},void 0,!0,{fileName:s,lineNumber:94,columnNumber:11},void 0)]},void 0,!0,{fileName:s,lineNumber:49,columnNumber:9},void 0)]},void 0,!0,{fileName:s,lineNumber:25,columnNumber:7},void 0)},void 0,!1,{fileName:s,lineNumber:17,columnNumber:5},void 0)};var N="/Users/nasir/Documents/NODE/redirects/src/components/home/HomeView.tsx";const O=({list:r,name:i})=>e(F,{children:[e(J,{name:i},void 0,!1,{fileName:N,lineNumber:15,columnNumber:7},void 0),(r||[]).length?(r||[]).map((o,l)=>e(Z,{item:o,isOdd:l%2!==0},`redirect-item-${o.id}`,!1,{fileName:N,lineNumber:23,columnNumber:13},void 0)):e(b,{variant:"h5",component:"h2",children:"No app found!"},void 0,!1,{fileName:N,lineNumber:17,columnNumber:9},void 0)]},void 0,!0,{fileName:N,lineNumber:14,columnNumber:5},void 0);var y="/Users/nasir/Documents/NODE/redirects/src/components/global/loader.tsx";const g=({text:r})=>e(t,{sx:{display:"flex",width:"100%",height:"calc(100vh - 74px - 56px)",alignItems:"center",justifyContent:"center"},children:[e(D,{color:"info",sx:{mr:2}},void 0,!1,{fileName:y,lineNumber:14,columnNumber:5},void 0),e("span",{children:r||"Loading..."},void 0,!1,{fileName:y,lineNumber:15,columnNumber:5},void 0)]},void 0,!0,{fileName:y,lineNumber:5,columnNumber:3},void 0);var ee="/Users/nasir/Documents/NODE/redirects/src/components/mobileApps/CheckAndRedirect.tsx";const re=({android:r,ios:i})=>{const o=()=>{window.open("https://flyhub.com","_self")};return v.exports.useEffect(()=>{["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.platform.includes("Mac")?i?window.open(i,"_self"):o():r?window.open(r,"_self"):o()},[r,i]),e(g,{},void 0,!1,{fileName:ee,lineNumber:35,columnNumber:10},void 0)};var ie="/Users/nasir/Documents/NODE/redirects/src/routes/errorRoute.tsx";const p=()=>(v.exports.useEffect(()=>{window.open("https://flyhub.com","_self")}),e(g,{},void 0,!1,{fileName:ie,lineNumber:8,columnNumber:10},void 0));var w="/Users/nasir/Documents/NODE/redirects/src/routes/detectApp.tsx";const oe=()=>{const i=B().app||"",{isLoading:o,data:l,isFetching:n}=W(i);if(o||n)return e(g,{},void 0,!1,{fileName:w,lineNumber:15,columnNumber:12},void 0);if(!!l&&!!(l!=null&&l.result))return Array.isArray(l==null?void 0:l.result)?e(O,{list:l==null?void 0:l.result,name:i},void 0,!1,{fileName:w,lineNumber:18,columnNumber:14},void 0):e(re,{...l==null?void 0:l.result},void 0,!1,{fileName:w,lineNumber:20,columnNumber:12},void 0)};var A="/Users/nasir/Documents/NODE/redirects/src/routes/homeRoute.tsx";const le=()=>{const{isLoading:r,error:i,data:o,isFetching:l}=V(null);return r||l||!i&&!o?e(g,{},void 0,!1,{fileName:A,lineNumber:10,columnNumber:60},void 0):!!i||!!o&&!!o.error&&!o.result?e(p,{},void 0,!1,{fileName:A,lineNumber:12,columnNumber:12},void 0):e(O,{list:(o==null?void 0:o.result)||[],name:"All"},void 0,!1,{fileName:A,lineNumber:13,columnNumber:15},void 0)},ne=I({palette:{primary:{main:"#002441"},secondary:{main:"#e95539"}}});var a="/Users/nasir/Documents/NODE/redirects/src/App.tsx";const se=T([{path:"/",element:e(le,{},void 0,!1,{fileName:a,lineNumber:16,columnNumber:14},void 0),errorElement:e(p,{},void 0,!1,{fileName:a,lineNumber:17,columnNumber:19},void 0)},{path:"/:app",element:e(oe,{},void 0,!1,{fileName:a,lineNumber:21,columnNumber:14},void 0),errorElement:e(p,{},void 0,!1,{fileName:a,lineNumber:22,columnNumber:19},void 0)},{path:"*",element:e(p,{},void 0,!1,{fileName:a,lineNumber:26,columnNumber:14},void 0)}]),me=()=>e(G,{store:E,children:e(Q,{theme:ne,children:[e(q,{enableColorScheme:!0},void 0,!1,{fileName:a,lineNumber:34,columnNumber:9},void 0),e(F,{sx:{py:3},children:e(H,{router:se},void 0,!1,{fileName:a,lineNumber:36,columnNumber:11},void 0)},void 0,!1,{fileName:a,lineNumber:35,columnNumber:9},void 0)]},void 0,!0,{fileName:a,lineNumber:33,columnNumber:7},void 0)},void 0,!1,{fileName:a,lineNumber:32,columnNumber:5},void 0);var te="/Users/nasir/Documents/NODE/redirects/src/main.tsx";M.createRoot(document.getElementById("root")).render(e(me,{},void 0,!1,{fileName:te,lineNumber:12,columnNumber:3},globalThis));