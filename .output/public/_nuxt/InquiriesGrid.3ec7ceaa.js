import{V as u,j as r,v as n,W as _,ae as p,M as g,c as y,b as a,o as v}from"./entry.5eee13ba.js";import{a as w}from"./mermaid.4b1cd600.js";import{f as q,j as $}from"./join.4243fb1a.js";import{t as b}from"./toString.53aed50c.js";import"./_arrayEach.0e9334a0.js";import"./_baseEach.ed2de8af.js";const I={class:"px-4 sm:px-4 lg:px-4"},M=a("div",{class:"sm:flex sm:items-center"},null,-1),D={class:"mt-2 flex flex-col"},N={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},C={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},V={__name:"InquiriesGrid",async setup(j){let s,o;const d=u("grid"),i=r(!1),l=r("");n().$bus.$on("evtSearchInquiries",e=>{h(e)});const c=r(),{data:f}=([s,o]=_(()=>p("Inquiriess-list-"+Math.random,()=>$fetch("/api/inquiries",{initialCache:!1,method:"get"}),"$7qNeQ41uNp")),s=await s,o(),s);async function h(e){if(i.value=!0,e){const t=[];q(e,function(m,x){b(m)!=""&&t.push(x+"=eq."+m)}),l.value=$(t,"&")}try{let t=await p("Inquiriess-list-"+Math.random,()=>$fetch(`/api/inquiries?${l.value}`,{initialCache:!1,method:"get"}),"$GP1cDHZeTC");u("grid").value.updateConfig({data:t.data._rawValue}).forceRender(),i.value=!1}catch(t){i.value=!1,n().$toast.show({type:"danger",message:t.message,timeout:6})}}return g(()=>{d.value=new w({columns:[{id:"id",name:"Id.",width:"25px"},{id:"name",name:"Name",width:"100px"},{id:"created_at",data:e=>n().$dayjs(e.created_at).format("DD-MMM-YYYY"),name:"Date of inquiry",width:"25px"},{id:"inquiry_reason",name:"Reason",width:"100px"},{id:"description",name:"Description",width:"100px"}],sort:!0,pagination:{enabled:!0,limit:10,summary:!0},className:{td:"whitespace-nowrap px-2 py-2 text-sm text-gray-500",table:"min-w-full divide-y divide-gray-300",thead:"bg-gray-50",th:"whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"},search:!0,fixedHeader:!0,data:f.value}),d.value.render(c.value)}),(e,t)=>(v(),y("div",I,[M,a("div",D,[a("div",N,[a("div",C,[a("div",{ref_key:"gridRef",ref:c},null,512)])])])]))}};export{V as default};
