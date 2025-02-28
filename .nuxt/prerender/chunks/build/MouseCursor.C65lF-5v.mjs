globalThis.__timing__.logStart('Load chunks/build/MouseCursor.C65lF-5v');import { unref, useSSRContext } from 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, u as useI18n } from './server.mjs';

const _sfc_main = {
  __name: "MouseCursor",
  __ssrInlineRender: true,
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9deae9bf><div class="mouse-image" data-v-9deae9bf><div class="mouse-image__bounce overlay" data-v-9deae9bf><div class="mouse-image__float-wrap" data-v-9deae9bf><!--[-->`);
      ssrRenderList(__props.projects, (project) => {
        _push(`<li class="mouse-image__image-inner visible" data-v-9deae9bf><div class="item-latest-work__images" data-v-9deae9bf><div class="${ssrRenderClass([project.color, "item-latest-work__color"])}" data-v-9deae9bf></div><img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.title)} class="tile-image item-latest-work__image ibg" data-v-9deae9bf></div></li>`);
      });
      _push(`<!--]--></div></div></div><div class="mouse-btn no-select" data-v-9deae9bf></div><div class="mouse-span no-select" data-v-9deae9bf><p data-v-9deae9bf><span class="mouse-span__link" data-v-9deae9bf>${ssrInterpolate(unref(t)("live_site"))}</span><span class="icon-Right" data-v-9deae9bf></span></p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MouseCursor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MouseCursor = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9deae9bf"]]);

export { MouseCursor as M };;globalThis.__timing__.logEnd('Load chunks/build/MouseCursor.C65lF-5v');
//# sourceMappingURL=MouseCursor.C65lF-5v.mjs.map
