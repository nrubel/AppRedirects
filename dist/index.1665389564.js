import{u,r as c,j as o,F as d,c as f,R as m,a as h,b as y}from"./vendor.1665389564.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n={"b2b-uae":{andorid:"https://play.google.com/store/apps/details?id=com.flyhub.b2b.uae",ios:"https://apps.apple.com/app/flyhub-agent-uae/id6443584285"}},g=()=>{const r=u().app||"",s=()=>{window.open("https://flyhub.com","_self")};return c.exports.useEffect(()=>{const i=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.platform.includes("Mac");n[`${r}`]?i?n[r].ios?window.open(n[r].ios,"_self"):s():n[r].andorid?window.open(n[r].andorid,"_self"):s():s()},[r,n]),o(d,{children:"Please wait..."})},l=()=>(c.exports.useEffect(()=>{window.open("https://flyhub.com","_self")}),o(d,{children:"Flyhub.com"})),b=f([{path:"/",element:o("div",{children:"Loading..."}),errorElement:o(l,{})},{path:"/apps/:app",element:o(g,{}),errorElement:o(l,{})},{path:"*",element:o(l,{})}]),w=()=>o("div",{style:{display:"flex",width:"100%",height:"100vh",justifyContent:"center",alignItems:"center"},children:o(m,{router:b})});h.createRoot(document.getElementById("root")).render(o(y.StrictMode,{children:o(w,{})}));
