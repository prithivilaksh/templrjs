import r from"./Icon.84acb30e.js";import l from"./ContentSlot.9bf0258b.js";import{g as p,a2 as m,k as u,N as n,a5 as f}from"./entry.5eee13ba.js";/* empty css                 */import{_ as d}from"./_plugin-vue_export-helper.c27b6911.js";import"./config.a5798137.js";import"./Icon.vue.2d0699de.js";const _={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},y=p({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:o=>["primary","info","success","warning","danger"].includes(o)}},setup(o){const t=m(),{flatUnwrap:i,unwrap:a}=f(),s=u(()=>o.icon||_[o.type]);return()=>{const c=i((t.default&&t.default())??[],["ul"]).map(e=>a(e,["li"]));return n("ul",c.map(e=>n("li",[n("span",{class:`list-icon ${o.type}`},n(r,{name:s.value,class:"icon"})),n("span",n(l,{use:()=>e}))])))}}}),N=d(y,[["__scopeId","data-v-f46a86d3"]]);export{N as default};
