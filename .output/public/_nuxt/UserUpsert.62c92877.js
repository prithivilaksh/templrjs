import{D as f}from"./Dropdownlist.1b365210.js";import{_ as b}from"./CheckBoxGroup.8cc628b7.js";import{aM as r,v as d,c,b as e,e as m,x as y,Z as l,aL as i,i as p,o as u,H as x}from"./entry.5eee13ba.js";import{C as v,_ as g}from"./index.79fffb63.js";import{_ as U}from"./_plugin-vue_export-helper.c27b6911.js";const w={components:{Calendar:v,DatePicker:g},data(){return{isUpsertUserVisible:!1,data:{},api:"",date:new Date,progress:!1}},methods:{async upsertUser(o){try{if(this.data.location.coordinates[0]=parseFloat(this.data.location.coordinates[0]),this.data.location.coordinates[1]=parseFloat(this.data.location.coordinates[1]),this.data._id===void 0){const{data:s}=await r("/api/users/User",{method:"post",body:this.data},"$0uslyf1FqG")}else{const{data:s}=await r("/api/users/User/"+this.data._id,{method:"put",body:this.data},"$dzaILaujzS")}this.isUpsertUserVisible=!this.isUpsertUserVisible,d().$bus.$emit("evtRefreshUserDatatable")}catch(s){console.log(s)}finally{}},async deleteUser(){try{this.data.is_enabled=!1;const{data:o}=await r("/api/users/User/"+this.data._id,{method:"delete"},"$J7MTgM96y8");d().$bus.$emit("evtRefreshUserDatatable")}catch{}finally{}},async bindUser(){},async closeUserPanel(){this.data={},this.isUpsertUserVisible=!this.isUpsertUserVisible},handleSelectedInUserMarkAsDelete(o){alert(o),this.data.mark_as_delete=o},handleSelectedInUserStatus(o){this.data.is_enabled=o}},computed:{},mounted(){},created(){d().$bus.$on("evtUpsertUser",o=>{o!==void 0?this.data=o:this.data={location:{type:"Point",coordinates:[0,0]},address:{street:"",apartment:"",city:"",district:"",state:"",country:"",postalCode:""}},this.isUpsertUserVisible=!this.isUpsertUserVisible}),d().$bus.$on("evtDeleteUser",o=>{o!==void 0&&(this.data=o,this.deleteUser())})},beforeDestroy(){d().$bus.$off("evtUpsertUser"),d().$bus.$off("evtDeleteUser")}},k={key:0,class:"fixed inset-0 overflow-hidden","aria-labelledby":"slide-over-title",role:"dialog","aria-modal":"true"},V={class:"absolute inset-0 overflow-hidden"},S=e("div",{class:"absolute inset-0","aria-hidden":"true"},null,-1),C={class:"absolute inset-y-0 right-0 pl-10 max-w-full flex"},D={class:"w-screen max-w-md"},M={class:"h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl"},A={class:"flex-1 h-0 overflow-y-auto"},N={class:"space-y-1 py-6 px-4 bg-gray-200 sm:px-6"},j={class:"flex items-center justify-between space-x-3"},I=e("h2",{class:"text-lg leading-7 font-medium text-gray-700"},"User",-1),P={class:"h-7 flex items-center"},B=e("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),z=[B],F=e("div",null,[e("p",{class:"text-sm leading-5 text-gray-500"},"Create or update User")],-1),L={key:0,class:"flex-1 flex flex-col justify-between"},R=x('<div class="space-y-6 pt-6 pb-5"><div class="flex justify-center"><span class="inline-flex"><button type="button" class="inline-flex items-center px-6 py-3 text-base font-medium text-gray-600"><svg class="-ml-1 mr-3 h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing... </button></span></div></div>',1),E=[R],G={key:1,class:"flex-1 flex flex-col justify-between"},H={class:"px-4 divide-y divide-gray-200 sm:px-6"},T={class:"space-y-6 pt-6 pb-5"},q={class:"sm:overflow-hidden"},J={class:"bg-white space-y-6"},Y={class:"grid grid-cols-1 gap-y-3 gap-x-4 sm:grid-cols-6"},Z={class:"sm:col-span-6"},K=e("label",{for:"first_name",class:"block text-sm font-medium text-gray-700"},"First Name",-1),O={class:"mt-1"},Q={class:"sm:col-span-6"},W=e("label",{for:"last_name",class:"block text-sm font-medium text-gray-700"},"Last Name",-1),X={class:"mt-1"},$={class:"sm:col-span-6"},ee=e("label",{for:"email",class:"block text-sm font-medium text-gray-700"},"Email",-1),se={class:"mt-1"},te={class:"sm:col-span-6"},ae=e("label",{for:"mobile_phone",class:"block text-sm font-medium text-gray-700"},"Mobile phone",-1),oe={class:"mt-1"},le={class:"sm:col-span-6"},ie=e("label",{for:"hand_phone",class:"block text-sm font-medium text-gray-700"},"Hand phone",-1),de={class:"mt-1"},ne=e("div",{class:"sm:col-span-6"},[e("h2",{class:"text-lg font-medium text-gray-900"},"Login Information")],-1),re={class:"sm:col-span-6"},ce=e("label",{for:"username",class:"block text-sm font-medium text-gray-700"},"Username",-1),me={class:"mt-1"},pe={class:"sm:col-span-6"},ue=e("label",{for:"password",class:"block text-sm font-medium text-gray-700"},"Password",-1),_e={class:"mt-1"},he=e("div",{class:"sm:col-span-6"},[e("h2",{class:"text-lg font-medium text-gray-900"},"Administration ")],-1),fe={class:"sm:col-span-6"},be={class:"sm:col-span-6"},ye=e("div",{class:"sm:col-span-6"},[e("h2",{class:"text-lg font-medium text-gray-900"},"Roles")],-1),xe={class:"sm:col-span-6"},ve={class:"w-full flex-shrink-0 px-4 py-4 space-x-4 flex justify-end"},ge=e("span",{class:"inline-flex rounded-md shadow-sm"},[e("button",{type:"button",class:"py-2 px-4 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"},"Reset")],-1),Ue={class:"inline-flex rounded-md shadow-sm"};function we(o,s,ke,Ve,t,n){const _=f,h=b;return t.isUpsertUserVisible?(u(),c("section",k,[e("div",V,[S,e("div",C,[e("div",D,[e("div",M,[e("div",A,[e("header",N,[e("div",j,[I,e("div",P,[e("button",{onClick:s[0]||(s[0]=a=>n.closeUserPanel()),"aria-label":"Close panel",class:"text-gray-600 hover:text-white transition ease-in-out duration-150"},z)])]),F]),t.progress?(u(),c("div",L,E)):m("",!0),t.progress?m("",!0):(u(),c("div",G,[e("div",H,[e("div",T,[e("form",{name:"frmUser",id:"frmUser",class:"space-y-8 divide-y divide-gray-200",onSubmit:s[11]||(s[11]=y((...a)=>o.SaveAndUpdate&&o.SaveAndUpdate(...a),["prevent"]))},[e("div",q,[e("div",J,[e("div",Y,[e("div",Z,[K,e("div",O,[l(e("input",{type:"text",id:"first_name",name:"first_name","onUpdate:modelValue":s[1]||(s[1]=a=>t.data.first_name=a),class:"py-3 px-4 block w-full pl-5 focus:ring-lime-600 focus:border-lime-600 border-gray-300"},null,512),[[i,t.data.first_name]])])]),e("div",Q,[W,e("div",X,[l(e("input",{type:"text",id:"last_name",name:"branchNameArabic","onUpdate:modelValue":s[2]||(s[2]=a=>t.data.last_name=a),class:"py-3 px-4 block w-full pl-5 focus:ring-lime-600 focus:border-lime-600 border-gray-300"},null,512),[[i,t.data.last_name]])])]),e("div",$,[ee,e("div",se,[l(e("input",{type:"text",id:"email",name:"email","onUpdate:modelValue":s[3]||(s[3]=a=>t.data.email=a),class:"py-3 px-4 block w-full pl-5 focus:ring-lime-600 focus:border-lime-600 border-gray-300"},null,512),[[i,t.data.email]])])]),e("div",te,[ae,e("div",oe,[l(e("input",{type:"text",id:"mobile_phone",name:"mobile_phone","onUpdate:modelValue":s[4]||(s[4]=a=>t.data.mobile_phone=a),class:"py-3 px-4 block w-full pl-5 focus:ring-lime-600 focus:border-lime-600 border-gray-300"},null,512),[[i,t.data.mobile_phone]])])]),e("div",le,[ie,e("div",de,[l(e("input",{type:"text",id:"hand_phone",name:"hand_phone","onUpdate:modelValue":s[5]||(s[5]=a=>t.data.hand_phone=a),class:"py-3 px-4 block w-full pl-5 focus:ring-lime-600 focus:border-lime-600 border-gray-300"},null,512),[[i,t.data.hand_phone]])])]),ne,e("div",re,[ce,e("div",me,[l(e("input",{type:"text",id:"username",name:"username","onUpdate:modelValue":s[6]||(s[6]=a=>t.data.username=a),class:"py-3 px-4 block w-full pl-5 focus:ring-lime-600 focus:border-lime-600 border-gray-300"},null,512),[[i,t.data.username]])])]),e("div",pe,[ue,e("div",_e,[l(e("input",{type:"text",id:"password",name:"street","onUpdate:modelValue":s[7]||(s[7]=a=>t.data.password=a),class:"py-3 px-4 block w-full pl-5 focus:ring-lime-600 focus:border-lime-600 border-gray-300"},null,512),[[i,t.data.password]])])]),he,e("div",fe,[p(_,{modelValue:t.data.is_enabled,"onUpdate:modelValue":s[8]||(s[8]=a=>t.data.is_enabled=a),onSelected_item:n.handleSelectedInUserStatus,name:"is_enabled",label:"Status",data:{data:[{code:"true",name:"Active"},{code:"false",name:"In-active"}]},selected_value:t.data.is_enabled},null,8,["modelValue","onSelected_item","selected_value"])]),e("div",be,[p(_,{modelValue:t.data.mark_as_delete,"onUpdate:modelValue":s[9]||(s[9]=a=>t.data.mark_as_delete=a),onSelected_item:n.handleSelectedInUserMarkAsDelete,name:"mark_as_delete",label:"Mark as delete?",data:{data:[{code:"true",name:"Yes"},{code:"false",name:"No"}]},selected_value:t.data.mark_as_delete},null,8,["modelValue","onSelected_item","selected_value"])]),ye,e("div",xe,[p(h,{class:"bg-primary-100 py-2 shadow sm:rounded-lg",modelValue:t.data.roles,"onUpdate:modelValue":s[10]||(s[10]=a=>t.data.roles=a),onChecked_item:o.handleCheckedRoles,name:"roles",data:{data:[{code:"guest",name:"Guest"},{code:"admin",name:"Administrator"},{code:"priest",name:"Priest"},{code:"ec-member",name:"Executive Member"}]},checked_value:["guest"]},null,8,["modelValue","onChecked_item"])])])])])],32)])])]))]),e("div",ve,[ge,e("span",Ue,[e("button",{onClick:s[12]||(s[12]=(...a)=>n.upsertUser&&n.upsertUser(...a)),type:"submit",class:"zyn-button"}," Save ")])])])])])])])):m("",!0)}const Ne=U(w,[["render",we]]);export{Ne as default};
