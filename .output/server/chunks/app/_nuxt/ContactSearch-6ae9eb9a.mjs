import { p as useAsyncData, d as useNuxtApp } from '../server.mjs';
import { withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { D as Dropdownlist } from './Dropdownlist-5dbe543b.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'ufo';
import 'radix3';
import 'cookie-es';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'defu';
import 'ohash';
import 'unstorage';
import 'unstorage/drivers/cloudflare-kv-http';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'node:fs';
import 'node:url';
import 'pathe';
import '@octokit/graphql';
import 'remark-github';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';
import 'nanoid';
import '@supabase/supabase-js';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/localeData.js';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/utc.js';
import 'mitt';
import 'vue-i18n';
import 'underscore.string';
import 'lodash-es';
import './_plugin-vue_export-helper-cc2b3d55.mjs';

const __default__ = {
  props: {
    heading: String
  },
  components: {
    Dropdownlist
  },
  data() {
    return {
      isShowSearchContactVisible: false,
      data: {}
    };
  },
  methods: {
    handleSelectedInContact_record_status(e) {
      this.data.record_status = e.target.value;
    },
    handleSelectedInContact_mark_as_delete(e) {
      this.data.mark_as_delete = e.target.value;
    },
    handleSelectedInContactLimit(e) {
      this.data.limit = e.target.value;
    },
    handleSelectedInContact_contact_type(e) {
      this.data.contact_type = e.target.value;
      if (this.data.contact_type != "Active Client") {
        this.data.client = null;
      }
    },
    handleSelectedInConsultantClient(e) {
      this.data.client = e.target.value;
    }
  },
  created() {
    useNuxtApp().$bus.$on("evtShowSearchContact", (data) => {
      this.isShowSearchContactVisible = !this.isShowSearchContactVisible;
    });
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "ContactSearch",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: record_status } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "record_status-list-" + Math.random,
      () => $fetch("/api/generic", {
        initialCache: false,
        method: "post",
        body: { collection: "properties", projection: {}, filter: { property_type: { $eq: "record_status" } }, limit: 1e4 },
        onResponse({ request, response, options }) {
        }
      }),
      "$4glTzlO0ot"
    )), __temp = await __temp, __restore(), __temp);
    const { data: mark_as_delete } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "mark_as_delete-list-" + Math.random,
      () => $fetch("/api/generic", {
        initialCache: false,
        method: "post",
        body: { collection: "properties", projection: {}, filter: { property_type: { $eq: "mark_as_delete" } }, limit: 1e4 },
        onResponse({ request, response, options }) {
        }
      }),
      "$c2SXda8GIn"
    )), __temp = await __temp, __restore(), __temp);
    const { data: limits } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "limits-list-" + Math.random,
      () => $fetch("/api/generic", {
        initialCache: false,
        method: "post",
        body: { collection: "properties", projection: {}, filter: { property_type: { $eq: "limit" } }, limit: 1e4 },
        onResponse({ request, response, options }) {
        }
      }),
      "$n6hQreZvyt"
    )), __temp = await __temp, __restore(), __temp);
    const { data: contact_types } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "contact_types-" + Math.random,
      () => $fetch("/api/generic", {
        initialCache: false,
        method: "post",
        body: { collection: "configurations", projection: {}, filter: { property_type: { $eq: "Contact Type" } }, limit: 1e4 },
        onResponse({ request, response, options }) {
        }
      }),
      "$QnGNWhF8ph"
    )), __temp = await __temp, __restore(), __temp);
    const { data: clients } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "clients-list-" + Math.random,
      () => $fetch("/api/generic", {
        initialCache: false,
        method: "post",
        body: { collection: "clients", projection: {}, filter: {}, limit: 1e4 },
        onResponse({ request, response, options }) {
        }
      }),
      "$OkA9eImGNt"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><form name="frmSearchContact" id="frmSearchContact" class="space-y-8 divide-y divide-gray-200">`);
      if (_ctx.isShowSearchContactVisible) {
        _push(`<div class="px-2 pt-2 border-b space-y-2">`);
        if (this.heading) {
          _push(`<h2 class="text-lg leading-7 font-medium">${ssrInterpolate(this.heading)}</h2>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="sm:col-span-6"><label for="name" class="block text-sm font-medium text-gray-700"> Name </label><div class="relative rounded-md shadow-sm"><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="search" name="name" id="name"${ssrRenderAttr("value", _ctx.data.name)} class="focus:ring-lime-600 focus:border-lime-600 block w-full pl-10 sm:text-sm border-gray-300" placeholder="Search"></div></div><div class="sm:col-span-6">`);
        _push(ssrRenderComponent(Dropdownlist, {
          data: { data: unref(contact_types).documents },
          onChange: _ctx.handleSelectedInContact_contact_type,
          show_label: "true",
          modelValue: _ctx.data.contact_type,
          "onUpdate:modelValue": ($event) => _ctx.data.contact_type = $event,
          name: "contact_type",
          label: "Contact Type",
          selected_value: _ctx.data.contact_type
        }, null, _parent));
        _push(`</div>`);
        if (_ctx.data.contact_type == "Active Client") {
          _push(`<div class="sm:col-span-6">`);
          _push(ssrRenderComponent(Dropdownlist, {
            data: { data: unref(clients).documents },
            onChange: _ctx.handleSelectedInConsultantClient,
            modelValue: _ctx.data.client,
            "onUpdate:modelValue": ($event) => _ctx.data.client = $event,
            show_label: "true",
            name: "client",
            label: "Client",
            selected_value: _ctx.data.client
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="sm:col-span-6">`);
        _push(ssrRenderComponent(Dropdownlist, {
          data: { data: unref(record_status).documents },
          onChange: _ctx.handleSelectedInContact_record_status,
          show_label: "true",
          modelValue: _ctx.data.record_status,
          "onUpdate:modelValue": ($event) => _ctx.data.record_status = $event,
          name: "record_status",
          label: "Record Status",
          selected_value: _ctx.data.record_status
        }, null, _parent));
        _push(`</div><div class="sm:col-span-6">`);
        _push(ssrRenderComponent(Dropdownlist, {
          data: { data: unref(mark_as_delete).documents },
          onChange: _ctx.handleSelectedInContact_mark_as_delete,
          show_label: "true",
          modelValue: _ctx.data.mark_as_delete,
          "onUpdate:modelValue": ($event) => _ctx.data.mark_as_delete = $event,
          name: "mark_as_delete",
          label: "Mark for Deletion",
          selected_value: _ctx.data.mark_as_delete
        }, null, _parent));
        _push(`</div><div class="sm:col-span-6">`);
        _push(ssrRenderComponent(Dropdownlist, {
          data: { data: unref(limits).documents },
          onChange: _ctx.handleSelectedInContactLimit,
          show_label: "true",
          modelValue: _ctx.data.limit,
          "onUpdate:modelValue": ($event) => _ctx.data.limit = $event,
          name: "limit",
          label: "Limit #. of results to",
          selected_value: _ctx.data.limit
        }, null, _parent));
        _push(`</div><div class="py-3 text-right space-x-4"><button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">Reset</button><button type="submit" class="zyn-button">Search</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacts/ContactSearch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
