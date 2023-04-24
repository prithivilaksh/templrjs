import{c as n,b as e,e as m,t as s,d as r,F as _,p as u,o as d,v as l}from"./entry.5eee13ba.js";import{C as p,_ as f}from"./index.79fffb63.js";const h={class:"grid grid-cols-1 lg:grid-cols-2 gap-x-4"},x={"aria-labelledby":"applicant-information-title"},y={class:"bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6"},b={class:"max-w-lg mx-auto lg:max-w-none"},g={"aria-labelledby":"userprofile",class:""},w={key:0},v={class:"aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg"},j=["src"],k=e("h3",{class:"font-medium text-gray-900"},"User Profile",-1),N={class:"mt-2 divide-y divide-gray-200 border-t border-b border-gray-200"},A={class:"flex justify-between py-3 text-sm font-medium"},$=e("dt",{class:"text-gray-500"},"First Name",-1),U={class:"whitespace-nowrap text-gray-900"},C={class:"flex justify-between py-3 text-sm font-medium"},E=e("dt",{class:"text-gray-500"},"Last Name",-1),B={class:"whitespace-nowrap text-gray-900"},F={class:"flex justify-between py-3 text-sm font-medium"},P=e("dt",{class:"text-gray-500"},"Email",-1),D={class:"whitespace-nowrap text-gray-900"},S={class:"flex justify-between py-3 text-sm font-medium"},J=e("dt",{class:"text-gray-500"},"Mobile",-1),L={class:"whitespace-nowrap text-gray-900"},M={class:"flex justify-between py-3 text-sm font-medium"},R=e("dt",{class:"text-gray-500"},"Member since",-1),T={class:"whitespace-nowrap text-gray-900"},V={class:"pt-2 sm:flex sm:items-center sm:justify-between"},Z=e("p",{class:"mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left"},null,-1),z={"aria-labelledby":"User-Roles"},O={class:"bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6"},q=e("h3",{class:"font-medium text-gray-900"},"Assigned Role(s)",-1),G={class:"sm:col-span-2"},H={class:"bg-primary-50 bg-opacity-50 mt-1 text-sm text-gray-900 rounded-md"},I={role:"list",class:"divide-y divide-gray-200 rounded-md border border-gray-200"},K={class:"flex w-0 flex-1 items-center"},Q={class:"ml-2 w-0 flex-1 truncate"},W={class:"pt-2 sm:flex sm:items-center sm:justify-between"},X=e("p",{class:"mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left"},null,-1),Y={components:{Calendar:p,DatePicker:f},data(){return{data:{}}},methods:{},async asyncData({params:c}){},created(){this.data={location:{type:"Point",coordinates:[0,0]},address:{street:"",apartment:"",city:"",district:"",state:"",country:"",postalCode:""}}}},se=Object.assign(Y,{__name:"UserProfile",setup(c){const t={_id:{$oid:"6327b3f0d2b1b68f79f3fbc4"},email:"suresh@zynomi.com",roles:["Field Engineer","Administrator"],username:"Shemar_Bruen",password:"suresh",last_name:"Jacklyn.Schiller36",first_name:"Jaida_Abshire",hand_phone:"(300) 515-2009 x8411",created_at:"2022-09-18T14:44:47.046Z",modified_at:"2022-09-18T04:16:42.264Z",subscription:"free",mobile_phone:"785.486.1601"};return(o,i)=>(d(),n("div",h,[e("div",null,[e("section",x,[e("div",y,[e("div",b,[e("section",g,[t.picture?(d(),n("div",w,[e("div",v,[e("img",{src:t.picture,alt:"",class:"object-cover"},null,8,j)])])):m("",!0),e("div",null,[k,e("dl",N,[e("div",A,[$,e("dd",U,s(t.first_name),1)]),e("div",C,[E,e("dd",B,s(t.last_name),1)]),e("div",F,[P,e("dd",D,s(t.email),1)]),e("div",S,[J,e("dd",L,s(t.mobile_phone),1)]),e("div",M,[R,e("dd",T,s(t.created_at),1)])])]),e("div",V,[e("button",{type:"submit",onClick:i[0]||(i[0]=a=>("useNuxtApp"in o?o.useNuxtApp:r(l))().$bus.$emit("evtUpsertUser")),class:"w-full bg-lime-600 border border-transparent shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-lime-50 focus:ring-lime-400 sm:ml-6 sm:order-last sm:w-auto"},"Edit"),Z])])])])])]),e("div",null,[e("section",z,[e("div",O,[q,e("div",G,[e("dd",H,[e("ul",I,[(d(!0),n(_,null,u(t.roles,a=>(d(),n("li",{key:a,class:"flex items-center justify-between py-3 pl-3 pr-4 text-sm"},[e("div",K,[e("span",Q,s(a),1)])]))),128))])])]),e("div",W,[e("button",{type:"submit",onClick:i[1]||(i[1]=a=>("useNuxtApp"in o?o.useNuxtApp:r(l))().$bus.$emit("evtUpsertUser")),class:"w-full bg-lime-600 border border-transparent shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-lime-50 focus:ring-lime-400 sm:ml-6 sm:order-last sm:w-auto"},"Edit"),X])])])])]))}});export{se as default};
