import{g as y,v as w,V as k,j as S,k as c,w as z,W as x,d as e,o as l,c as _,m as v,n as C,t as A,C as I}from"./entry.5eee13ba.js";import{u as B}from"./config.a5798137.js";import{I as N,l as D}from"./Icon.vue.2d0699de.js";import{_ as b}from"./_plugin-vue_export-helper.c27b6911.js";const j=["width","height"],q=y({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(m){let o,h;const r=m,g=w(),a=B().nuxtIcon,u=k("icons",()=>({})),p=S(!1),s=c(()=>((a==null?void 0:a.aliases)||{})[r.name]||r.name),d=c(()=>{var t;return(t=u.value)==null?void 0:t[s.value]}),i=c(()=>g.vueApp.component(s.value)),n=c(()=>{const t=r.size||(a==null?void 0:a.size)||"1em";return String(Number(t))===t?`${t}px`:t});async function f(){var t;i.value||(t=u.value)!=null&&t[s.value]||(p.value=!0,u.value[s.value]=await D(s.value).catch(()=>{}),p.value=!1)}return z(()=>s.value,f),!i.value&&([o,h]=x(()=>f()),o=await o,h()),(t,E)=>e(p)?(l(),_("span",{key:0,class:"icon",width:e(n),height:e(n)},null,8,j)):e(d)?(l(),v(e(N),{key:1,icon:e(d),class:"icon",width:e(n),height:e(n)},null,8,["icon","width","height"])):e(i)?(l(),v(C(e(i)),{key:2,class:"icon",width:e(n),height:e(n)},null,8,["width","height"])):(l(),_("span",{key:3,class:"icon",style:I({fontSize:e(n),lineHeight:e(n),width:e(n),height:e(n)})},A(m.name),5))}}),$=b(q,[["__scopeId","data-v-047565da"]]);export{$ as default};
