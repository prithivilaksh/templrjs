import{c as i,b as t,t as s,d as a,e as u,o as r,v as d}from"./entry.5eee13ba.js";import{_ as p}from"./_plugin-vue_export-helper.c27b6911.js";const c={data(){return{pgHead:this.heading,pgGuide:this.guide,pgShowbutton:this.showbutton,pgButtonText:this.buttonText}},props:{heading:String,buttonText:String,showbutton:String,guide:String,addClickEvent:String}},l={class:"w-full"},g={class:"relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex"},m={class:"flex-1 flex justify-between px-2 sm:px-2"},h={class:"flex-1 min-w-0"},x={class:"text-lg leading-7 font-medium"},_={class:"text-sm leading-5 text-gray-400"},f={key:0,class:"ml-2 mt-2 pr-6 flex items-center space-x-4 sm:ml-6 sm:space-x-6"};function b(o,n,v,w,e,y){return r(),i("header",l,[t("div",g,[t("div",m,[t("div",h,[t("h2",x,s(e.pgHead),1),t("div",null,[t("p",_,s(e.pgGuide),1)])]),e.pgShowbutton=="true"?(r(),i("div",f,[t("button",{type:"button",onClick:n[0]||(n[0]=S=>("useNuxtApp"in o?o.useNuxtApp:a(d))().$bus.$emit("evtCompanyForm")),class:"zyn-button"},s(e.pgButtonText),1)])):u("",!0)])])])}const N=p(c,[["render",b]]);export{N as default};
