import i from"./Icon.84acb30e.js";import{N as p}from"./nuxt-link.3a28fc5d.js";import{u as _}from"./useDocus.12d1b929.js";import{g as u,k as f,o as r,c as b,p as d,m as n,l as h,e as k,d as x,F as g}from"./entry.5eee13ba.js";/* empty css                           */import{_ as B}from"./_plugin-vue_export-helper.c27b6911.js";import"./config.a5798137.js";import"./Icon.vue.2d0699de.js";const N=u({__name:"AppSocialIcons",setup(y){const a=["twitter","facebook","instagram","youtube","github","medium"],{config:s}=_(),c=f(()=>Object.entries(s.value.socials||{}).map(([o,e])=>typeof e=="object"?e:typeof e=="string"&&e&&a.includes(o)?{href:`https://${o}.com/${e}`,icon:`fa-brands:${o}`,label:e}:null).filter(Boolean));return(o,e)=>{const l=i,m=p;return r(!0),b(g,null,d(x(c),t=>(r(),n(m,{key:t.label,rel:"noopener noreferrer",title:t.label,"aria-label":t.label,href:t.href,target:"_blank"},{default:h(()=>[t.icon?(r(),n(l,{key:0,name:t.icon},null,8,["name"])):k("",!0)]),_:2},1032,["title","aria-label","href"]))),128)}}}),D=B(N,[["__scopeId","data-v-224b171c"]]);export{D as default};
