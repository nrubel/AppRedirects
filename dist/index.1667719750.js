var L=Object.defineProperty;var _=(r,t,n)=>t in r?L(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n;var S=(r,t,n)=>(_(r,typeof t!="symbol"?t+"":t,n),n);import{c as F,f as R,a as z,s as B,j as e,A as I,b as p,T as j,B as a,d as f,u as E,e as O,G as b,r as g,C as w,S as A,g as v,h as Q,i as T,k as U,P as G,l as q,m as M,R as N,n as H}from"./vendor.1667719750.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();class y{}S(y,"baseUrl","https://adminpanel.hrms.flyhub.com");const m=F({reducerPath:"appsApi",baseQuery:R({baseUrl:y.baseUrl}),endpoints:r=>({getApps:r.query({query:t=>({url:"/apps"})}),getSingleApp:r.query({query:t=>({url:`/apps/${t}`})})})}),{useGetAppsQuery:W,useLazyGetAppsQuery:ie,useGetSingleAppQuery:$,useLazyGetSingleAppQuery:ae}=m,C=z({reducer:{[m.reducerPath]:m.reducer},middleware:r=>r().concat(m.middleware)});B(C.dispatch);const D="/logo.1667719750.svg",K=({name:r})=>e(I,{position:"static",sx:{my:2,boxShadow:"none"},color:"transparent",children:p(j,{variant:"dense",sx:{justifyContent:"space-between",px:"0 !important"},children:[e(a,{component:"img",src:D,alt:"flyhub.com",width:117,height:39,loading:"lazy",style:{cursor:"pointer"},onClick:()=>window.open("https://flyhub.com","_self")}),e(f,{variant:"h6",color:"inherit",component:"div",children:r})]})}),V="/appStore.1667719750.svg",J="/playStore.1667719750.svg",X=({item:r,isOdd:t})=>{const{path:n,android:o,cover:s,ios:i,name:d,coverMeta:k,country:l}=r,u=E(O().breakpoints.up("md"));return e(a,{sx:c=>({backgroundColor:"#FFFFFF",borderRadius:4,mb:3.75,p:u?10:5}),children:p(b,{columnSpacing:u?10:2,container:!0,alignItems:"center",flexDirection:t?"row":"row-reverse",children:[e(b,{item:!0,xs:12,md:5,sx:c=>({[c.breakpoints.down("md")]:{textAlign:"center"}}),children:e(g.exports.Suspense,{fallback:e(a,{sx:k,children:e(w,{})}),children:e(a,{component:"img",src:s?y.baseUrl+s:"/flyhub.png",alt:n,sx:{borderRadius:4,maxWidth:"100%"},loading:"lazy"})})}),p(b,{item:!0,xs:12,md:7,children:[e(f,{component:"h2",sx:c=>({mb:2,fontSize:u?44:32,fontWeight:700,lineHeight:1.23,[c.breakpoints.down("md")]:{mt:2,textAlign:"center"}}),children:d}),!!(l!=null&&l.code)&&p(A,{direction:"row",alignItems:"center",sx:c=>({mb:u?5:3,[c.breakpoints.down("md")]:{justifyContent:"center"}}),children:[e(g.exports.Suspense,{fallback:e(a,{sx:{width:36,height:26},children:e(w,{})}),children:e(a,{component:"img",src:y.baseUrl+`/assets/image/flags/${l.code.toLowerCase()}.svg`,alt:l.code,loading:"lazy",sx:{width:36,borderRadius:.6}})}),e(f,{component:"h2",sx:{fontSize:24,fontWeight:700,lineHeight:1.23,ml:3},children:l==null?void 0:l.name})]}),p(A,{direction:"row",spacing:2,sx:c=>({img:{maxWidth:"47%"},[c.breakpoints.down("md")]:{justifyContent:"center"}}),children:[!!o&&e(a,{component:"img",src:J,alt:"install app",loading:"lazy",sx:{cursor:"pointer"},onClick:()=>window.open(o,"_self")}),!!i&&e(a,{component:"img",src:V,alt:"get app",loading:"lazy",sx:{cursor:"pointer",ml:2},onClick:()=>window.open(i,"_self")})]})]})]})})},P=({list:r,name:t})=>p(v,{children:[e(K,{name:t}),(r||[]).length?(r||[]).map((n,o)=>e(X,{item:n,isOdd:o%2!==0},`redirect-item-${n.id}`)):e(f,{variant:"h5",component:"h2",children:"No app found!"})]}),x=({text:r})=>p(a,{sx:{display:"flex",width:"100%",height:"calc(100vh - 74px - 56px)",alignItems:"center",justifyContent:"center"},children:[e(w,{color:"info",sx:{mr:2}}),e("span",{children:r||"Loading..."})]}),Y=({android:r,ios:t})=>{const n=()=>{window.open("https://flyhub.com","_self")};return g.exports.useEffect(()=>{["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.platform.includes("Mac")?t?window.open(t,"_self"):n():r?window.open(r,"_self"):n()},[r,t]),e(x,{})},h=()=>(g.exports.useEffect(()=>{window.open("https://flyhub.com","_self")}),e(x,{})),Z=()=>{const t=Q().app||"",{isLoading:n,data:o,isFetching:s}=$(t);if(n||s)return e(x,{});if(!!o&&!!(o!=null&&o.result))return Array.isArray(o==null?void 0:o.result)?e(P,{list:o==null?void 0:o.result,name:`${t} Apps`.toUpperCase()}):e(Y,{...o==null?void 0:o.result})},ee=()=>{const{isLoading:r,error:t,data:n,isFetching:o}=W(null);return r||o||!t&&!n?e(x,{}):!!t||!!n&&!!n.error&&!n.result?e(h,{}):e(P,{list:(n==null?void 0:n.result)||[],name:"All Apps".toUpperCase()})},re=T({palette:{primary:{main:"#002441"},secondary:{main:"#e95539"}}}),te=U([{path:"/",element:e(ee,{}),errorElement:e(h,{})},{path:"/:app",element:e(Z,{}),errorElement:e(h,{})},{path:"*",element:e(h,{})}]),ne=()=>e(G,{store:C,children:p(q,{theme:re,children:[e(M,{enableColorScheme:!0}),e(v,{sx:{py:3},children:e(N,{router:te})})]})});H.createRoot(document.getElementById("root")).render(e(ne,{}));
