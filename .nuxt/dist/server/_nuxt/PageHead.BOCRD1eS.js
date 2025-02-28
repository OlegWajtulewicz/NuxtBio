import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { u as useI18n } from "../server.mjs";
const _sfc_main = {
  __name: "PageHead",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const route = useRoute();
    const pageTitle = computed(() => {
      const path = route.path;
      const pageName = path.split("/").filter(Boolean).pop() || "home";
      return t(`pages.${pageName}.title`);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "home page-head",
        "data-scroll-section": ""
      }, _attrs))}><div class="home__container"><div class="home__text" data-scroll data-scroll-speed="+2.5"><div class="span-lines animate"><h1 class="home__subtitle text-effect">${ssrInterpolate(pageTitle.value)}</h1></div></div></div><div class="line"></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHead.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=PageHead.BOCRD1eS.js.map
