import{aw as m,aD as v,aE as p,j as E,k as w}from"./entry.5eee13ba.js";import{c as g,S as C,F as y}from"./focus-management.fc3e9b19.js";import{o as L}from"./dom.cb3029af.js";let s=Symbol("Context");var O=(n=>(n[n.Open=1]="Open",n[n.Closed=2]="Closed",n[n.Closing=4]="Closing",n[n.Opening=8]="Opening",n))(O||{});function P(){return S()!==null}function S(){return m(s,null)}function j(n){v(s,n)}function f(n,r,u){g.isServer||p(i=>{document.addEventListener(n,r,u),i(()=>document.removeEventListener(n,r,u))})}function k(n,r,u=w(()=>!0)){function i(e,c){if(!u.value||e.defaultPrevented)return;let t=c(e);if(t===null||!t.getRootNode().contains(t))return;let d=function l(o){return typeof o=="function"?l(o()):Array.isArray(o)||o instanceof Set?o:[o]}(n);for(let l of d){if(l===null)continue;let o=l instanceof HTMLElement?l:L(l);if(o!=null&&o.contains(t)||e.composed&&e.composedPath().includes(o))return}return!C(t,y.Loose)&&t.tabIndex!==-1&&e.preventDefault(),r(e,t)}let a=E(null);f("mousedown",e=>{var c,t;u.value&&(a.value=((t=(c=e.composedPath)==null?void 0:c.call(e))==null?void 0:t[0])||e.target)},!0),f("click",e=>{a.value&&(i(e,()=>a.value),a.value=null)},!0),f("blur",e=>i(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}export{P as C,j as c,O as l,S as p,k as y};
