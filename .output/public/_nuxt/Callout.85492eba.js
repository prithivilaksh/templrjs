import p from"./ContentSlot.9bf0258b.js";import d from"./Icon.84acb30e.js";import{g as _,j as l,o as f,c as v,b as s,i as t,s as r,d as c,Z as h,_ as g}from"./entry.5eee13ba.js";/* empty css                    */import{_ as y}from"./_plugin-vue_export-helper.c27b6911.js";import"./config.a5798137.js";import"./Icon.vue.2d0699de.js";const C={class:"summary"},V={class:"content"},w=_({__name:"Callout",props:{type:{type:String,default:"info",validator(o){return["info","success","warning","danger","primary"].includes(o)}},modelValue:{required:!1,default:()=>l(!1)}},emits:["update:modelValue"],setup(o,{emit:i}){const e=l(o.modelValue),u=()=>{e.value=!e.value,i("update:modelValue",e.value)};return(a,B)=>{const n=p,m=d;return f(),v("div",{class:r(["callout",[o.type]])},[s("span",{class:"preview",onClick:u},[s("span",C,[t(n,{use:a.$slots.summary},null,8,["use"])]),t(m,{name:"heroicons-outline:chevron-right",class:r(["icon",[c(e)&&"rotate"]])},null,8,["class"])]),h(s("div",V,[t(n,{use:a.$slots.content},null,8,["use"])],512),[[g,c(e)]])],2)}}}),q=y(w,[["__scopeId","data-v-37e0bf51"]]);export{q as default};
