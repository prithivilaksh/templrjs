import{W as n,c as m,b as a,t as v,e as h,Z as y,aL as S,i as c,d as r,x as w,v as _,ae as u,o as p}from"./entry.5eee13ba.js";import{D as d}from"./Dropdownlist.1b365210.js";import"./_plugin-vue_export-helper.c27b6911.js";const R={key:0,class:"px-2 pt-2 border-b space-y-2"},k={key:0,class:"text-lg leading-7 font-medium"},V={class:"sm:col-span-6"},C=a("label",{for:"name",class:"block text-sm font-medium text-gray-700"}," Name ",-1),$={class:"relative rounded-md shadow-sm"},M=a("div",{class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[a("svg",{class:"h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[a("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),A={class:"sm:col-span-6"},N={class:"sm:col-span-6"},q={class:"sm:col-span-6"},D={class:"py-3 text-right space-x-4"},I=a("button",{type:"button",class:"inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"},"Reset",-1),j={props:{heading:String},components:{Dropdownlist:d},data(){return{isShowSearchRoleVisible:!1,data:{}}},methods:{handleSelectedInRole_record_status(l){this.data.record_status=l.target.value},handleSelectedInRole_mark_as_delete(l){this.data.mark_as_delete=l.target.value},handleSelectedInRoleLimit(l){this.data.limit=l.target.value}},created(){_().$bus.$on("evtShowSearchRole",l=>{this.isShowSearchRoleVisible=!this.isShowSearchRoleVisible})}},U=Object.assign(j,{__name:"RoleSearch",async setup(l){let s,i;const{data:f}=([s,i]=n(()=>u("record_status-list-"+Math.random,()=>$fetch("/api/generic",{initialCache:!1,method:"post",body:{collection:"properties",projection:{},filter:{property_type:{$eq:"record_status"}},limit:1e4},onResponse({request:e,response:t,options:o}){}}),"$X7ROCc8mH2")),s=await s,i(),s),{data:g}=([s,i]=n(()=>u("mark_as_delete-list-"+Math.random,()=>$fetch("/api/generic",{initialCache:!1,method:"post",body:{collection:"properties",projection:{},filter:{property_type:{$eq:"mark_as_delete"}},limit:1e4},onResponse({request:e,response:t,options:o}){}}),"$syWkRVseZc")),s=await s,i(),s),{data:b}=([s,i]=n(()=>u("limits-list-"+Math.random,()=>$fetch("/api/generic",{initialCache:!1,method:"post",body:{collection:"properties",projection:{},filter:{property_type:{$eq:"limit"}},limit:1e4},onResponse({request:e,response:t,options:o}){}}),"$bj2iMWA8Hs")),s=await s,i(),s);return(e,t)=>(p(),m("div",null,[a("form",{name:"frmSearchRole",id:"frmSearchRole",ref:"frmSearchRole",onSubmit:t[5]||(t[5]=w(()=>{},["prevent"])),class:"space-y-8 divide-y divide-gray-200"},[e.isShowSearchRoleVisible?(p(),m("div",R,[this.heading?(p(),m("h2",k,v(this.heading),1)):h("",!0),a("div",V,[C,a("div",$,[M,y(a("input",{type:"search",name:"name",id:"name","onUpdate:modelValue":t[0]||(t[0]=o=>e.data.name=o),class:"focus:ring-lime-600 focus:border-lime-600 block w-full pl-10 sm:text-sm border-gray-300",placeholder:"Search"},null,512),[[S,e.data.name]])])]),a("div",A,[c(d,{data:{data:r(f).documents},onChange:e.handleSelectedInRole_record_status,show_label:"true",modelValue:e.data.record_status,"onUpdate:modelValue":t[1]||(t[1]=o=>e.data.record_status=o),name:"record_status",label:"Record Status",selected_value:e.data.record_status},null,8,["data","onChange","modelValue","selected_value"])]),a("div",N,[c(d,{data:{data:r(g).documents},onChange:e.handleSelectedInRole_mark_as_delete,show_label:"true",modelValue:e.data.mark_as_delete,"onUpdate:modelValue":t[2]||(t[2]=o=>e.data.mark_as_delete=o),name:"mark_as_delete",label:"Mark for Deletion",selected_value:e.data.mark_as_delete},null,8,["data","onChange","modelValue","selected_value"])]),a("div",q,[c(d,{data:{data:r(b).documents},onChange:e.handleSelectedInRoleLimit,show_label:"true",modelValue:e.data.limit,"onUpdate:modelValue":t[3]||(t[3]=o=>e.data.limit=o),name:"limit",label:"Limit #. of results to",selected_value:e.data.limit},null,8,["data","onChange","modelValue","selected_value"])]),a("div",D,[I,a("button",{onClick:t[4]||(t[4]=o=>("useNuxtApp"in e?e.useNuxtApp:r(_))().$bus.$emit("evtSearchRole",e.data)),type:"submit",class:"zyn-button"},"Search")])])):h("",!0)],544)]))}});export{U as default};
