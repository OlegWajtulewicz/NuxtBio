import { watch, nextTick, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2, M as MenuMobile, C as Cookies } from "./ThePreloader.DpW52_Sz.js";
import { F as FooterMain } from "./FooterMain.LkGQDAhI.js";
import { f as firstScreenAnimation } from "./useFirstScreenAnimation.DC5oZruM.js";
import { g as general } from "../server.mjs";
import "./nuxt-link.0jHTRVzU.js";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "vue-router";
import "hookable";
import "./index.C59LGCNT.js";
import "./ScrollTrigger.Dhnd-cd9.js";
import "ofetch";
import "unctx";
import "h3";
import "pinia";
import "unhead";
import "@unhead/shared";
import "radix3";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "@vueuse/core";
import "tailwind-merge";
import "@iconify/vue";
const _sfc_main = {
  __name: "about-layout",
  __ssrInlineRender: true,
  setup(__props) {
    watch(
      () => [general.isTransitionStart, general.isPreloaderVisible],
      ([transitionStart, preloaderVisibility]) => {
        if (transitionStart && !preloaderVisibility) {
          nextTick(() => {
            firstScreenAnimation({ parent: ".main" });
          });
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper about" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(MenuMobile, null, null, _parent));
      _push(`<main class="main">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(FooterMain, null, null, _parent));
      _push(ssrRenderComponent(Cookies, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/about-layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-layout.DzN1IwkD.js.map
