import{V as o,j as f,W as h,M as x,c as y,b as n,v as a,aM as g,ae as b,o as v}from"./entry.5eee13ba.js";import{a as $,b as m}from"./mermaid.4b1cd600.js";const w={class:"px-4 sm:px-4 lg:px-4"},C=n("div",{class:"sm:flex sm:items-center"},null,-1),k={class:"mt-2 flex flex-col"},q={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},B={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},M={components:{},data(){return{data:[],filter:{}}},methods:{buildMongoQueryFilterCriteria(e){let t={};return _.isString(e.name)&&!a().$s.isBlank(e.name)&&(t.name={$regex:".*"+e.name+".*",$options:"i"}),_.isString(e.contact_type)&&!a().$s.isBlank(e.contact_type)&&(t.contact_type={$eq:e.contact_type}),_.isString(e.client)&&!a().$s.isBlank(e.client)&&(t.client={$eq:e.client}),_.isString(e.record_status)&&!a().$s.isBlank(e.record_status)&&(t.record_status={$eq:e.record_status}),_.isString(e.mark_as_delete)&&!a().$s.isBlank(e.mark_as_delete)&&(t.mark_as_delete={$eq:e.mark_as_delete}),t},async searchContacts(){this.progress=!0;try{let e=await g("/api/contacts",{method:"post",initialCache:!1,body:{projection:o("mongo_query").value.projection,filter:this.buildMongoQueryFilterCriteria(this.filter),limit:_.isNumber(this.filter.limit)?parseInt(this.filter.limit):1e4}},"$08ZDeZ4et1");setTimeout(()=>{o("grid").value.updateConfig({data:e.data._rawValue.documents}).forceRender(),this.progress=!1},2e3)}catch(e){this.progress=!1,a().$toast.show({type:"danger",message:e.message,timeout:6})}}},created(){a().$bus.$on("evtSearchContact",e=>{this.filter=e,this.searchContacts()})}},V=Object.assign(M,{__name:"ContactGrid",async setup(e){let t,r;const u="/api/contacts/",l=o("grid"),p=o("mongo_query",()=>({projection:{},filter:{},limit:25})),c=f(),{data:d}=([t,r]=h(()=>b("Contacts-list-"+Math.random,()=>$fetch(u,{initialCache:!1,method:"post",body:p.value,onResponse({request:s,response:i,options:S}){this.data=i._data.documents}}),"$UQsdmrIApU")),t=await t,r(),t);return x(()=>{l.value=new $({columns:[{id:"_id",name:"Id.",hidden:!0},{id:"name",name:"Name"},{id:"email",name:"Email"},{id:"mobile_phone",name:"Mobile"},{id:"contact_type",name:"Contact Type"},{id:"client",name:"Client"},{id:"mark_as_delete",name:"Mark for deletion?",hidden:!0},{name:"Status",data:s=>{let i=s.record_status?s.record_status.toLowerCase()=="active"?"text-blue-700 bg-blue-50":"text-gray-800 bg-gray-50":"";return m("span",{className:`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium  ${i}`},s.record_status)},sort:!1,width:"25px"},{id:"btnEdit",name:"",formatter:(s,i)=>m("button",{className:"inline-flex items-center rounded-full border border-transparent bg-lime-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",onClick:()=>a().$bus.$emit("evtUpsertContact",i)},"Edit"),sort:!1,width:"50px"}],sort:!0,pagination:{enabled:!0,limit:25,summary:!0},className:{td:"whitespace-nowrap px-2 py-2 text-sm text-gray-500",table:"min-w-full divide-y divide-gray-300",thead:"bg-gray-50",th:"whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"},search:!0,fixedHeader:!0,data:d._rawValue?d._rawValue.documents:[]}),l.value.render(c.value)}),(s,i)=>(v(),y("div",w,[C,n("div",k,[n("div",q,[n("div",B,[n("div",{ref_key:"gridRef",ref:c},null,512)])])])]))}});export{V as default};
