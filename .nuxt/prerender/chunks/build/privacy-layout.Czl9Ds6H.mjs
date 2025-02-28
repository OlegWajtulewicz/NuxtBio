globalThis.__timing__.logStart('Load chunks/build/privacy-layout.Czl9Ds6H');import { watch, nextTick, mergeProps, useSSRContext } from 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$1, a as _sfc_main$4, M as MenuMobile, C as Cookies } from './ThePreloader.kMCUncmi.mjs';
import { F as FooterMain } from './FooterMain.CnkfX4Sj.mjs';
import { g as general } from './server.mjs';
import { f as firstScreenAnimation } from './useFirstScreenAnimation.DC5oZruM.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/unenv/runtime/fetch/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/@iconify/utils/lib/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/unenv/runtime/npm/consola.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/radix3/dist/index.mjs';
import './nuxt-link.BtawBPGo.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/vue-router/dist/vue-router.node.mjs';
import './index.C59LGCNT.mjs';
import './ScrollTrigger.Dhnd-cd9.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/pinia/dist/pinia.prod.cjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/@vueuse/core/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/@iconify/vue/dist/iconify.mjs';

const _sfc_main = {
  __name: "privacy-layout",
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper privacy" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/privacy-layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/privacy-layout.Czl9Ds6H');
//# sourceMappingURL=privacy-layout.Czl9Ds6H.mjs.map
