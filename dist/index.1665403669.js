var h=Object.defineProperty;var b=(o,r,s)=>r in o?h(o,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[r]=s;var m=(o,r,s)=>(b(o,typeof r!="symbol"?r+"":r,s),s);import{r as p,j as t,F as c,u as v,a as y,c as g,Q as w,b as P,R as E,d as x,e as F}from"./vendor.1665403669.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const O=({android:o,ios:r})=>{const s=()=>{window.open("https://flyhub.com","_self")};return p.exports.useEffect(()=>{["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.platform.includes("Mac")?r?window.open(r,"_self"):s():o?window.open(o,"_self"):s()},[o,r]),t(c,{children:"Please wait..."},void 0,!1)};class N{}m(N,"baseUrl","https://adminpanel-test.hrms.flyhub.com");const u=()=>(p.exports.useEffect(()=>{window.open("https://flyhub.com","_self")}),t(c,{children:"Flyhub.com"},void 0,!1));var d="/Users/nasir/Documents/NODE/redirects/src/routes/detectApp.tsx";const D=()=>{const r=v().app||"",{isLoading:s,error:n,data:e,isFetching:i}=y(["fetch"],()=>fetch(`${N.baseUrl}/redirects?type=mobile&path=${r}`,{mode:"cors"}).then(a=>a.json()));return s||i?t(c,{children:"Please wait..."},void 0,!1):!!n||!!e&&!!e.error?t(u,{},void 0,!1,{fileName:d,lineNumber:19,columnNumber:56},void 0):t(O,{...e.result},void 0,!1,{fileName:d,lineNumber:20,columnNumber:15},void 0)};var l="/Users/nasir/Documents/NODE/redirects/src/App.tsx";const j=g([{path:"/",element:t(u,{},void 0,!1,{fileName:l,lineNumber:12,columnNumber:14},void 0),errorElement:t(u,{},void 0,!1,{fileName:l,lineNumber:13,columnNumber:19},void 0)},{path:"/apps/:app",element:t(D,{},void 0,!1,{fileName:l,lineNumber:17,columnNumber:14},void 0),errorElement:t(u,{},void 0,!1,{fileName:l,lineNumber:18,columnNumber:19},void 0)},{path:"*",element:t(u,{},void 0,!1,{fileName:l,lineNumber:22,columnNumber:14},void 0)}]),R=new w,S=()=>t(P,{client:R,children:t("div",{style:{display:"flex",width:"100%",height:"100vh",justifyContent:"center",alignItems:"center"},children:t(E,{router:j},void 0,!1,{fileName:l,lineNumber:40,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:31,columnNumber:7},void 0)},void 0,!1,{fileName:l,lineNumber:30,columnNumber:5},void 0);var f="/Users/nasir/Documents/NODE/redirects/src/main.tsx";x.createRoot(document.getElementById("root")).render(t(F.StrictMode,{children:t(S,{},void 0,!1,{fileName:f,lineNumber:7,columnNumber:5},globalThis)},void 0,!1,{fileName:f,lineNumber:6,columnNumber:3},globalThis));