import l from"./Icon.84acb30e.js";import{c as r,b as e,t as i,d as a,i as p,a as m,e as g,o as d,v as u}from"./entry.5eee13ba.js";import{_ as h}from"./_plugin-vue_export-helper.c27b6911.js";import"./config.a5798137.js";import"./Icon.vue.2d0699de.js";const f={data(){return{pgHead:this.heading,pgGuide:this.guide,pgShowbutton:this.showbutton}},props:{heading:String,showbutton:String,guide:String,addClickEvent:String},methods:{created(){},beforeMount(){}}},x={class:"w-full"},b={class:"relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex"},_={class:"flex-1 flex justify-between px-2 sm:px-2"},w={class:"flex-1 min-w-0"},y={class:"text-lg leading-7 font-medium"},v={class:"text-sm leading-5 text-gray-400"},N={key:0,class:"ml-2 mt-2 pr-6 flex items-center space-x-4 sm:ml-6 sm:space-x-6"};function S(t,s,k,$,o,A){const n=l;return d(),r("header",x,[e("div",b,[e("div",_,[e("div",w,[e("h2",y,i(o.pgHead),1),e("div",null,[e("p",v,i(o.pgGuide),1)])])]),o.pgShowbutton=="true"?(d(),r("div",N,[e("button",{onClick:s[0]||(s[0]=c=>("useNuxtApp"in t?t.useNuxtApp:a(u))().$bus.$emit("evtShowSearchProperties")),type:"button",class:"inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"},[p(n,{name:"icon-park-twotone:search",class:"h-6 w-6"})]),e("button",{type:"button",onClick:s[1]||(s[1]=c=>("useNuxtApp"in t?t.useNuxtApp:a(u))().$bus.$emit("evtUpsertProperties")),class:"zyn-button"},[p(n,{name:"heroicons:plus-20-solid",class:"h-6 w-6 text-white"}),m(" Add a Property ")])])):g("",!0)])])}const z=h(f,[["render",S]]);export{z as default};
