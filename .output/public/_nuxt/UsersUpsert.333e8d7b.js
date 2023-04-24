import{_ as u}from"./CheckBoxGroup.8cc628b7.js";import{D as h}from"./Dropdownlist.1b365210.js";import{v as i,c as _,b as e,x as p,Z as d,aL as n,i as r,e as f,o as b}from"./entry.5eee13ba.js";import{_ as x}from"./_plugin-vue_export-helper.c27b6911.js";const v={components:{},data(){return{isUpsertUsersVisible:!1,data:{},api:""}},methods:{async upsertUsers(a){try{if(this.$_.isUndefined(this.data.id)){const{data:s}=await this.$axios.post(this.$config.apiURL+"Users",this.data)}else{const{data:s}=await this.$axios.put(this.$config.apiURL+"Users/"+this.data.id,this.data)}this.data={},this.isUpsertUsersVisible=!this.isUpsertUsersVisible,i().$bus.$emit("evtRefreshUsersDatatable"),this.$toast.success("Record saved successfully")}catch(s){console.log(s),this.$toast.error("Oops!Save failed...")}finally{}},async deleteUsers(){try{this.data.is_enabled=!1;const{data:a}=await this.$axios.delete(this.$config.apiURL+"Users/"+this.data.id);$nuxt.$emit("evtRefreshUsersDatatable"),this.$toast.success("Record has been deleted successfully")}catch{this.$toast.error("Oops! delete failed...")}finally{}},async bindUsers(){},async closeUsersPanel(){this.data={},this.isUpsertUsersVisible=!this.isUpsertUsersVisible},handleSelectedInStatus(a){this.data.is_enabled=a},handleSelectedInMarkAsDelete(a){this.data.mark_as_delete=a},handleCheckedInRole(a){}},computed:{},mounted(){},created(){i().$bus.$on("evtUpsertUsers",a=>{if(a!==void 0)return this.data=a,this.isUpsertUsersVisible=!this.isUpsertUsersVisible,this.data;this.isUpsertUsersVisible=!this.isUpsertUsersVisible}),i().$bus.$on("evtDeleteUsers",a=>{a!==void 0&&(this.data=a,this.deleteUsers())})},beforeDestroy(){i().$bus.$off("evtUpsertUsers"),i().$bus.$off("evtDeleteUsers")}},y={key:0,class:"fixed inset-0 overflow-hidden","aria-labelledby":"slide-over-title",role:"dialog","aria-modal":"true"},U={class:"absolute inset-0 overflow-hidden"},g=e("div",{class:"absolute inset-0","aria-hidden":"true"},null,-1),w={class:"absolute inset-y-0 right-0 pl-10 max-w-full flex"},k={class:"w-screen max-w-md"},V={class:"h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl"},S={class:"flex-1 h-0 overflow-y-auto"},R={class:"space-y-1 py-6 px-4 bg-gray-200 sm:px-6"},C={class:"flex items-center justify-between space-x-3"},D=e("h2",{class:"text-lg leading-7 font-medium text-gray-700"},"Users",-1),I={class:"h-7 flex items-center"},A=e("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),M=[A],L=e("div",null,[e("p",{class:"text-sm leading-5 text-gray-500"},"Create or update user")],-1),B={class:"flex-1 flex flex-col justify-between"},N={class:"px-4 divide-y divide-gray-200 sm:px-6"},P={class:"space-y-6 pt-6 pb-5"},j={class:"sm:overflow-hidden"},$={class:"bg-white space-y-6"},E={class:"grid grid-cols-1 gap-y-3 gap-x-4 sm:grid-cols-6"},O=e("div",{class:"sm:col-span-6"},[e("h2",{class:"text-xl font-medium text-blue-gray-900"},"Profile Information")],-1),z={class:"sm:col-span-6"},F=e("label",{for:"name",class:"block text-sm font-medium text-gray-700"}," First name ",-1),G={class:"mt-1 rounded-md shadow-sm"},T={class:"sm:col-span-6"},Y=e("label",{for:"name",class:"block text-sm font-medium text-gray-700"}," Last name ",-1),Z={class:"mt-1 rounded-md shadow-sm"},q={class:"sm:col-span-6"},H=e("label",{for:"name",class:"block text-sm font-medium text-gray-700"}," Username ",-1),J={class:"mt-1 rounded-md shadow-sm"},K=e("div",{class:"sm:col-span-6"},[e("h2",{class:"text-xl font-medium text-blue-gray-900"},"Personal Information")],-1),Q={class:"sm:col-span-6"},W=e("label",{for:"name",class:"block text-sm font-medium text-gray-700"}," Email ",-1),X={class:"mt-1 rounded-md shadow-sm"},ee={class:"sm:col-span-6"},se=e("label",{for:"name",class:"block text-sm font-medium text-gray-700"}," Phone ",-1),te={class:"mt-1 rounded-md shadow-sm"},oe=e("div",{class:"sm:col-span-6"},[e("h2",{class:"text-xl font-medium text-blue-gray-900"},"Roles & Administration")],-1),ae={class:"sm:col-span-6"},le={class:"sm:col-span-6"},ie={class:"sm:col-span-6"},de={class:"w-full flex-shrink-0 px-4 py-4 space-x-4 flex justify-end"},ne=e("span",{class:"inline-flex rounded-md shadow-sm"},[e("button",{type:"button",class:"py-2 px-4 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"},"Reset")],-1),re={class:"inline-flex rounded-md shadow-sm"};function ce(a,s,me,ue,o,l){const m=u,c=h;return o.isUpsertUsersVisible?(b(),_("section",y,[e("div",U,[g,e("div",w,[e("div",k,[e("div",V,[e("div",S,[e("header",R,[e("div",C,[D,e("div",I,[e("button",{onClick:s[0]||(s[0]=t=>l.closeUsersPanel()),"aria-label":"Close panel",class:"text-gray-600 hover:text-white transition ease-in-out duration-150"},M)])]),L]),e("div",B,[e("div",N,[e("div",P,[e("form",{name:"frmUsers",id:"frmUsers",class:"space-y-8 divide-y divide-gray-200",onSubmit:s[9]||(s[9]=p((...t)=>a.SaveAndUpdate&&a.SaveAndUpdate(...t),["prevent"]))},[e("div",j,[e("div",$,[e("div",E,[O,e("div",z,[F,e("div",G,[d(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>o.data.firstname=t),type:"text",id:"firstname",name:"firstname",autocomplete:"firstname",class:"flex-1 focus:ring-lime-600 focus:border-lime-600 block w-full min-w-0 sm:text-sm border-gray-300"},null,512),[[n,o.data.firstname]])])]),e("div",T,[Y,e("div",Z,[d(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>o.data.lastname=t),type:"text",id:"lastname",name:"lastname",autocomplete:"lastname",class:"flex-1 focus:ring-lime-600 focus:border-lime-600 block w-full min-w-0 sm:text-sm border-gray-300"},null,512),[[n,o.data.lastname]])])]),e("div",q,[H,e("div",J,[d(e("input",{"onUpdate:modelValue":s[3]||(s[3]=t=>o.data.login=t),type:"text",id:"login",name:"login",autocomplete:"login",class:"flex-1 focus:ring-lime-600 focus:border-lime-600 block w-full min-w-0 sm:text-sm border-gray-300"},null,512),[[n,o.data.login]])])]),K,e("div",Q,[W,e("div",X,[d(e("input",{"onUpdate:modelValue":s[4]||(s[4]=t=>o.data.email=t),type:"text",id:"email",name:"email",autocomplete:"email",class:"flex-1 focus:ring-lime-600 focus:border-lime-600 block w-full min-w-0 sm:text-sm border-gray-300"},null,512),[[n,o.data.email]])])]),e("div",ee,[se,e("div",te,[d(e("input",{"onUpdate:modelValue":s[5]||(s[5]=t=>o.data.phone=t),type:"text",id:"phone",name:"phone",autocomplete:"phone",class:"flex-1 focus:ring-lime-600 focus:border-lime-600 block w-full min-w-0 sm:text-sm border-gray-300"},null,512),[[n,o.data.phone]])])]),oe,e("div",ae,[r(m,{onChecked_item:l.handleCheckedInRole,modelValue:o.data.role,"onUpdate:modelValue":s[6]||(s[6]=t=>o.data.role=t),id:"user_role",name:"user_role",label:"Roles",api:"role",checked_value:a.Agent},null,8,["onChecked_item","modelValue","checked_value"])]),e("div",le,[r(c,{modelValue:o.data.is_enabled,"onUpdate:modelValue":s[7]||(s[7]=t=>o.data.is_enabled=t),onSelected_item:l.handleSelectedInStatus,name:"is_enabled",label:"Status",data:{data:[{code:"true",name:"Active"},{code:"false",name:"In-active"}]},selected_value:o.data.is_enabled},null,8,["modelValue","onSelected_item","selected_value"])]),e("div",ie,[r(c,{modelValue:o.data.mark_as_delete,"onUpdate:modelValue":s[8]||(s[8]=t=>o.data.mark_as_delete=t),onSelected_item:l.handleSelectedInMarkAsDelete,name:"mark_as_delete",label:"Mark as delete?",data:{data:[{code:"true",name:"Yes"},{code:"false",name:"No"}]},selected_value:o.data.mark_as_delete},null,8,["modelValue","onSelected_item","selected_value"])])])])])],32)])])])]),e("div",de,[ne,e("span",re,[e("button",{onClick:s[10]||(s[10]=(...t)=>l.upsertUsers&&l.upsertUsers(...t)),type:"submit",class:"zyn-button"},"Save")])])])])])])])):f("",!0)}const be=x(v,[["render",ce]]);export{be as default};
