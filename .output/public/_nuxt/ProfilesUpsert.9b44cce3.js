import{j as m,v as l,aM as f,d as a,c as p,b as e,e as v,x as U,Z as n,aL as r,i as g,l as x,s as y,o as b,H as C}from"./entry.5eee13ba.js";import{a as w}from"./switch.ce1b5e48.js";import"./dom.cb3029af.js";import"./label.0680d1f4.js";import"./description.3cfaa39b.js";import"./use-resolve-button-type.941463e9.js";const j={key:0,class:"fixed inset-0 overflow-hidden","aria-labelledby":"slide-over-title",role:"dialog","aria-modal":"true"},S={class:"absolute inset-0 overflow-hidden"},N=e("div",{class:"absolute inset-0","aria-hidden":"true"},null,-1),R={class:"absolute inset-y-0 right-0 pl-10 max-w-full flex"},B={class:"w-screen max-w-md"},M={class:"h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl"},D={class:"flex-1 h-0 overflow-y-auto"},F={class:"space-y-1 py-6 px-4 bg-gray-200 bg-opacity-50 sm:px-6"},I={class:"flex items-center justify-between space-x-3"},z=e("h2",{class:"text-lg leading-7 font-medium text-gray-700"},"Profiles",-1),A={class:"h-7 flex items-center"},q=e("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),H=[q],L=e("div",null,[e("p",{class:"text-sm leading-5 text-gray-500"},"Manage...")],-1),E={key:0,class:"flex-1 flex flex-col justify-between"},O=C('<div class="space-y-6 pt-6 pb-5"><div class="flex justify-center"><span class="inline-flex"><button type="button" class="inline-flex items-center px-6 py-3 text-base font-medium text-gray-600"><svg class="-ml-1 mr-3 h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing... </button></span></div></div>',1),T=[O],W={key:1,class:"flex-1 flex flex-col justify-between"},J={class:"px-4 divide-y divide-gray-200 sm:px-6"},Z={class:"space-y-6 pt-6 pb-5"},G=["onSubmit"],K={class:"sm:overflow-hidden"},Q={class:"bg-white space-y-6"},X={class:"grid grid-cols-1 gap-y-3 gap-x-4 sm:grid-cols-6"},Y={class:"sm:col-span-6"},ee=e("label",{for:"username",class:"block text-sm font-medium text-gray-700"},"Username",-1),se={class:"mt-1"},te={class:"sm:col-span-6"},ae=e("label",{for:"full_name",class:"block text-sm font-medium text-gray-700"},"Full_name",-1),oe={class:"mt-1"},ie={class:"sm:col-span-6"},le=e("label",{for:"avatar_url",class:"block text-sm font-medium text-gray-700"},"Avatar_url",-1),ne={class:"mt-1"},re={class:"sm:col-span-6"},de=e("label",{for:"website",class:"block text-sm font-medium text-gray-700"},"Website",-1),ce={class:"mt-1"},ue={class:"sm:col-span-6"},me=e("label",{for:"email",class:"block text-sm font-medium text-gray-700"},"Email",-1),fe={class:"mt-1"},pe={class:"sm:col-span-6"},_e=e("label",{for:"is_sso_user",class:"block text-sm font-medium text-gray-700"},"Is_sso_user",-1),ve={class:"mt-1"},ye={class:"sm:col-span-6"},be=e("label",{for:"f_name",class:"block text-sm font-medium text-gray-700"},"F_name",-1),he={class:"mt-1"},ge={class:"sm:col-span-6"},xe=e("label",{for:"l_name",class:"block text-sm font-medium text-gray-700"},"L_name",-1),we={class:"mt-1"},ke=e("div",{class:"sm:col-span-3 mt-1"},[e("label",{for:"is_active",class:"block text-sm font-medium text-gray-700"},"Is-active?")],-1),$e={class:"sm:col-span-3"},Ve={class:"mt-1"},Pe=e("span",{class:"sr-only"},"Is-active?",-1),Ue=e("div",{class:"sm:col-span-3 mt-1"},[e("label",{for:"is_archived",class:"block text-sm font-medium text-gray-700"},"Is-archived?")],-1),Ce={class:"sm:col-span-3"},je={class:"mt-1"},Se=e("span",{class:"sr-only"},"Is-archived?",-1),Ne={class:"w-full flex-shrink-0 px-4 py-4 space-x-4 flex justify-end"},Re=e("span",{class:"inline-flex rounded-md shadow-sm"},[e("button",{type:"button",class:"py-2 px-4 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"},"Reset")],-1),Be={key:0,class:"inline-flex rounded-md shadow-sm"},He={__name:"ProfilesUpsert",setup(Me){const s=m({is_active:!0,is_archived:!1}),d=m(!1),c=m(!1),k=m(!1),u="/api/profiles/";l().$bus.$on("evtUpsertProfiles",i=>{c.value=!c.value,i!==void 0?$(i._cells[0].data):s.value={is_active:!0,is_archived:!1}}),l().$bus.$on("evtDeleteProfiles",i=>{V(i._cells[0].data)});async function $(i){d.value=!0,f(u+i,{method:"get",initialCache:!1,onResponse({request:t,response:o,options:P}){s.value=o._data[0],d.value=!1}},"$Ev73gzTtyR")}async function h(){try{d.value=!0,s.value.id?await f(u+s.value.id,{method:"put",body:_.omit(s.value,"id"),initialCache:!1,onResponse({request:i,response:t,options:o}){t._data&&(t._data.code?l().$toast.show({type:"danger",message:"Failure during update",timeout:6}):(l().$toast.show({type:"success",message:"Record updated successfully",timeout:6}),reloadProfilesStore()))}},"$46djR6H3Hv"):await f(u+"create",{method:"post",body:s.value,initialCache:!1,onResponse({request:i,response:t,options:o}){t._data&&(t._data.code?l().$toast.show({type:"danger",message:"Failure during insert",timeout:6}):(l().$toast.show({type:"success",message:"Record added successfully",timeout:6}),reloadProfilesStore()))}},"$SjB9LjNOfW"),d.value=!1,l().$bus.$emit("evtSearchProfiles"),s.value={is_active:!0,is_archived:!1},c.value=!c.value}catch(i){console.log(i),d.value=!1}finally{}}async function V(i){try{await f(u+i,{method:"delete",body:{},initialCache:!1,onResponse({request:t,response:o,options:P}){console.log("response._data="+JSON.stringify(o._data)),o._data.status==200?(l().$toast.show({type:"success",message:`Delete [${o._data.data[0].email}] was successful`,timeout:6}),l().$bus.$emit("evtSearchProfiles"),s.value={is_active:!0,is_archived:!1}):l().$toast.show({type:"danger",message:"Failure during delete",timeout:6})}},"$Ub56xInvVP")}catch{}finally{}}return(i,t)=>a(c)?(b(),p("section",j,[e("div",S,[N,e("div",R,[e("div",B,[e("div",M,[e("div",D,[e("header",F,[e("div",I,[z,e("div",A,[e("button",{onClick:t[0]||(t[0]=o=>c.value=!1),"aria-label":"Close panel",class:"rounded-md bg-primary-700 text-primary-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"},H)])]),L]),a(d)?(b(),p("div",E,T)):v("",!0),a(d)?v("",!0):(b(),p("div",W,[e("div",J,[e("div",Z,[e("form",{name:"frmProfiles",id:"frmProfiles",class:"space-y-8 divide-y divide-gray-200",onSubmit:U(h,["prevent"])},[e("div",K,[e("div",Q,[e("div",X,[e("div",Y,[ee,e("div",se,[n(e("input",{type:"text",id:"username",name:"username","onUpdate:modelValue":t[1]||(t[1]=o=>a(s).username=o),class:"block w-full pl-5 focus:ring-primary-600 focus:border-primary-600 border-gray-300"},null,512),[[r,a(s).username]])])]),e("div",te,[ae,e("div",oe,[n(e("input",{type:"text",id:"full_name",name:"full_name","onUpdate:modelValue":t[2]||(t[2]=o=>a(s).full_name=o),class:"block w-full pl-5 focus:ring-primary-600 focus:border-primary-600 border-gray-300"},null,512),[[r,a(s).full_name]])])]),e("div",ie,[le,e("div",ne,[n(e("input",{type:"text",id:"avatar_url",name:"avatar_url","onUpdate:modelValue":t[3]||(t[3]=o=>a(s).avatar_url=o),class:"block w-full pl-5 focus:ring-primary-600 focus:border-primary-600 border-gray-300"},null,512),[[r,a(s).avatar_url]])])]),e("div",re,[de,e("div",ce,[n(e("input",{type:"text",id:"website",name:"website","onUpdate:modelValue":t[4]||(t[4]=o=>a(s).website=o),class:"block w-full pl-5 focus:ring-primary-600 focus:border-primary-600 border-gray-300"},null,512),[[r,a(s).website]])])]),e("div",ue,[me,e("div",fe,[n(e("input",{type:"text",id:"email",name:"email","onUpdate:modelValue":t[5]||(t[5]=o=>a(s).email=o),class:"block w-full pl-5 focus:ring-primary-600 focus:border-primary-600 border-gray-300"},null,512),[[r,a(s).email]])])]),e("div",pe,[_e,e("div",ve,[n(e("input",{type:"text",id:"is_sso_user",name:"is_sso_user","onUpdate:modelValue":t[6]||(t[6]=o=>a(s).is_sso_user=o),class:"block w-full pl-5 focus:ring-primary-600 focus:border-primary-600 border-gray-300"},null,512),[[r,a(s).is_sso_user]])])]),e("div",ye,[be,e("div",he,[n(e("input",{type:"text",id:"f_name",name:"f_name","onUpdate:modelValue":t[7]||(t[7]=o=>a(s).f_name=o),class:"block w-full pl-5 focus:ring-primary-600 focus:border-primary-600 border-gray-300"},null,512),[[r,a(s).f_name]])])]),e("div",ge,[xe,e("div",we,[n(e("input",{type:"text",id:"l_name",name:"l_name","onUpdate:modelValue":t[8]||(t[8]=o=>a(s).l_name=o),class:"block w-full pl-5 focus:ring-primary-600 focus:border-primary-600 border-gray-300"},null,512),[[r,a(s).l_name]])])]),ke,e("div",$e,[e("div",Ve,[g(a(w),{id:"is_active",name:"is_active",modelValue:a(s).is_active,"onUpdate:modelValue":t[9]||(t[9]=o=>a(s).is_active=o),class:y([a(s).is_active?"bg-primary-800":"bg-primary-500","relative inline-flex h-[34px] w-[66px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"])},{default:x(()=>[Pe,e("span",{"aria-hidden":"true",class:y([a(s).is_active?"translate-x-9":"translate-x-0","pointer-events-none inline-block h-[30px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"])},null,2)]),_:1},8,["modelValue","class"])])]),Ue,e("div",Ce,[e("div",je,[g(a(w),{id:"is_archived",name:"is_archived",modelValue:a(s).is_archived,"onUpdate:modelValue":t[10]||(t[10]=o=>a(s).is_archived=o),class:y([a(s).is_archived?"bg-primary-800":"bg-primary-500","relative inline-flex h-[34px] w-[66px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"])},{default:x(()=>[Se,e("span",{"aria-hidden":"true",class:y([a(s).is_archived?"translate-x-9":"translate-x-0","pointer-events-none inline-block h-[30px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"])},null,2)]),_:1},8,["modelValue","class"])])])])])])],40,G)])])]))]),e("div",Ne,[Re,a(k)?(b(),p("span",Be,[e("button",{onClick:t[11]||(t[11]=o=>("useNuxtApp"in i?i.useNuxtApp:a(l))().$bus.$emit("evtDeleteProfiles",a(s))),type:"button",class:"py-2 px-4 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-primary-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"},"Delete")])):v("",!0),e("span",{class:"inline-flex rounded-md shadow-sm"},[e("button",{onClick:h,type:"submit",class:"zyn-button"},"Save")])])])])])])])):v("",!0)}};export{He as default};
