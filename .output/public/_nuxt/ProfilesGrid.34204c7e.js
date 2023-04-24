import{V as p,j as l,v as s,W as v,ae as x,M as y,c as _,b as r,o as w}from"./entry.5eee13ba.js";import{a as $,b as d}from"./mermaid.4b1cd600.js";import{f as P,j as k}from"./join.4243fb1a.js";import{t as q}from"./toString.53aed50c.js";import"./_arrayEach.0e9334a0.js";import"./_baseEach.ed2de8af.js";const C={class:"px-4 sm:px-4 lg:px-4"},D={class:"mt-2 flex flex-col"},N={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},A={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},G={__name:"ProfilesGrid",async setup(S){let a,c;const i="/api/profiles",u=p("grid"),o=l(!1),n=l("");s().$bus.$on("evtSearchProfiles",t=>{h(t)});const f=l(),{data:g}=([a,c]=v(()=>x("Profiles-list-"+Math.random,()=>$fetch(i,{initialCache:!1,method:"get"}),"$ZLqKGeQxrD")),a=await a,c(),a);async function h(t){if(o.value=!0,t){const e=[];P(t,function(m,b){q(m)!=""&&e.push(b+"=eq."+m)}),n.value=k(e,"&")}console.log(`query = [${i}?${n.value}]`);try{let e=await x("Profiles-list-"+Math.random,()=>$fetch(`${i}?${n.value}`,{initialCache:!1,method:"get"}),"$YqO6KAScWd");p("grid").value.updateConfig({data:e.data._rawValue}).forceRender(),o.value=!1}catch(e){o.value=!1,s().$toast.show({type:"danger",message:e.message,timeout:6})}}return y(()=>{u.value=new $({columns:[{id:"id",name:"Id.",width:"50px",hidden:!0},{id:"email",name:"email",width:"50px"},{name:"Status",data:t=>{let e=t.is_active?"text-blue-700 bg-blue-50":"text-gray-800 bg-gray-50";return d("span",{className:`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium  ${e}`},t.is_active?"Active":"Disabled")},sort:!1,width:"25px"},{id:"btnDelete",name:"",formatter:(t,e)=>d("button",{className:"inline-flex items-center rounded-full border border-transparent bg-red-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",onClick:()=>s().$bus.$emit("evtDeleteProfiles",e)},"Delete"),sort:!1,width:"10px"},{id:"btnEdit",name:"",formatter:(t,e)=>d("button",{className:"inline-flex items-center rounded-full border border-transparent bg-lime-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",onClick:()=>s().$bus.$emit("evtUpsertProfiles",e)},"Edit"),sort:!1,width:"50px"}],sort:!0,pagination:{enabled:!0,limit:10,summary:!0},className:{td:"whitespace-nowrap px-2 py-2 text-sm text-gray-500",table:"min-w-full divide-y divide-gray-300",thead:"bg-gray-50",th:"whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"},search:!0,fixedHeader:!0,data:g.value}),u.value.render(f.value)}),(t,e)=>(w(),_("div",C,[r("div",D,[r("div",N,[r("div",A,[r("div",{ref_key:"gridRef",ref:f},null,512)])])])]))}};export{G as default};
