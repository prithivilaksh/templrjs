import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = {
  __name: "NavigationSearchForm",
  __ssrInlineRender: true,
  setup(__props) {
    const data = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        "aria-label": "Sections",
        class: "hidden flex-shrink-0 w-96 bg-white border-r border-blue-gray-200 xl:flex xl:flex-col"
      }, _attrs))}><div class="h-16 px-2 border-b border-blue-gray-200 items-center"><h2 class="text-lg leading-7 font-medium">Business Card</h2><div><p class="text-sm leading-5 text-gray-400">REPL Business card</p></div></div><div class="flex-1 min-h-0 overflow-y-auto p-2"><div class="grid grid-cols-1 gap-y-2 gap-x-4 sm:grid-cols-2"><div class="sm:col-span-6"><h2 class="font-semibold text-gray-700">Cloudinary Image Template Details</h2></div><div class="sm:col-span-6"><div class="mt-1"><input${ssrRenderAttr("value", unref(data).cloudinary_image_version)} type="text" placeholder="version" class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300"></div></div><div class="sm:col-span-6"><div class="mt-1"><input${ssrRenderAttr("value", unref(data).cloudinary_image_public_id)} type="text" placeholder="Public Id." class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300"></div></div><div class="sm:col-span-6"><h2 class="font-semibold text-gray-700">Name</h2></div><div class="sm:col-span-6"><div class="mt-1"><input${ssrRenderAttr("value", unref(data).name)} type="text" placeholder="Name" class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300"></div></div><div class="sm:col-span-3"><div class="mt-1"><input${ssrRenderAttr("value", unref(data).name_x)} type="text" placeholder="X Pos." class="block w-full border-gray-300 shadow-sm focus:ring-primary-600 focus:border-primary-600 sm:text-sm"></div></div><div class="sm:col-span-3"><div class="mt-1"><input${ssrRenderAttr("value", unref(data).name_y)} type="text" placeholder="Y Pos." class="block w-full border-gray-300 shadow-sm focus:ring-primary-600 focus:border-primary-600 sm:text-sm"></div></div><div class="sm:col-span-6"><h2 class="font-semibold text-gray-700">Designation</h2></div><div class="sm:col-span-6"><div class="mt-1"><input${ssrRenderAttr("value", unref(data).designation)} type="text" placeholder="Designation" class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300"></div></div><div class="sm:col-span-3"><div class="mt-1"><input${ssrRenderAttr("value", unref(data).designation_x)} type="text" id="state" name="state" placeholder="X Pos." class="block w-full border-gray-300 shadow-sm focus:ring-primary-600 focus:border-primary-600 sm:text-sm"></div></div><div class="sm:col-span-3"><div class="mt-1"><input${ssrRenderAttr("value", unref(data).designation_y)} type="text" placeholder="Y Pos." class="block w-full border-gray-300 shadow-sm focus:ring-primary-600 focus:border-primary-600 sm:text-sm"></div></div><div class="sm:col-span-6"><h2 class="font-semibold text-gray-700">Email</h2></div><div class="sm:col-span-6"><div class="mt-1"><input${ssrRenderAttr("value", unref(data).email)} type="text" placeholder="Email" class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300"></div></div><div class="sm:col-span-3"><div class="mt-1"><input${ssrRenderAttr("value", unref(data).email_x)} type="text" placeholder="X Pos." class="block w-full border-gray-300 shadow-sm focus:ring-primary-600 focus:border-primary-600 sm:text-sm"></div></div><div class="sm:col-span-3"><div class="mt-1"><input${ssrRenderAttr("value", unref(data).email_y)} type="text" placeholder="Y Pos." class="block w-full border-gray-300 shadow-sm focus:ring-primary-600 focus:border-primary-600 sm:text-sm"></div></div><div class="sm:col-span-6"><h2 class="font-semibold text-gray-700">Mobile</h2></div><div class="sm:col-span-6"><div class="mt-1"><input${ssrRenderAttr("value", unref(data).mobile)} type="text" placeholder="Mobile" class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300"></div></div><div class="sm:col-span-3"><div class="mt-1"><input${ssrRenderAttr("value", unref(data).mobile_x)} type="text" placeholder="X Pos." class="block w-full border-gray-300 shadow-sm focus:ring-primary-600 focus:border-primary-600 sm:text-sm"></div></div><div class="sm:col-span-3"><div class="mt-1"><input${ssrRenderAttr("value", unref(data).mobile_y)} type="text" placeholder="Y Pos." class="block w-full border-gray-300 shadow-sm focus:ring-primary-600 focus:border-primary-600 sm:text-sm"></div></div><div class="sm:col-span-6 pt-2"><button id="btnBusinessCardRender" name="btnBusinessCardRender" type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium text-white bg-primary-900 hover:bg-primary-700 focus:outline-none focus:border-primary-900 focus:shadow-outline-primary active:bg-primary-900 transition duration-150 ease-in-out">Render</button></div></div></div></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/navigation/NavigationSearchForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
