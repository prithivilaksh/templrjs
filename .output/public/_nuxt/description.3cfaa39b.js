import{H as l,t as v}from"./dom.cb3029af.js";import{g as p,j as a,aD as b,k as j,M as w,at as y,d as D,aw as H}from"./entry.5eee13ba.js";var O=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(O||{});let P=p({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:n,attrs:s}){return()=>{let{features:t,...o}=e,r={"aria-hidden":(t&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(t&4)===4&&(t&2)!==2&&{display:"none"}}};return l({ourProps:r,theirProps:o,slot:{},attrs:s,slots:n,name:"Hidden"})}}}),d=Symbol("DescriptionContext");function S(){let e=H(d,null);if(e===null)throw new Error("Missing parent");return e}function N({slot:e=a({}),name:n="Description",props:s={}}={}){let t=a([]);function o(r){return t.value.push(r),()=>{let i=t.value.indexOf(r);i!==-1&&t.value.splice(i,1)}}return b(d,{register:o,slot:e,name:n,props:s}),j(()=>t.value.length>0?t.value.join(" "):void 0)}let C=p({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:()=>`headlessui-description-${v()}`}},setup(e,{attrs:n,slots:s}){let t=S();return w(()=>y(t.register(e.id))),()=>{let{name:o="Description",slot:r=a({}),props:i={}}=t,{id:u,...c}=e,f={...Object.entries(i).reduce((m,[h,g])=>Object.assign(m,{[h]:D(g)}),{}),id:u};return l({ourProps:f,theirProps:c,slot:r.value,attrs:n,slots:s,name:o})}}});export{C as E,N as M,O as a,P as f};
