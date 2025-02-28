globalThis.__timing__.logStart('Load chunks/build/slug-layout.DBxxNBgM');import { watch, nextTick, mergeProps, useSSRContext, computed, unref, withCtx, createVNode, toDisplayString, createTextVNode } from 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$2, a as _sfc_main$4, M as MenuMobile, C as Cookies } from './ThePreloader.DpW52_Sz.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link.0jHTRVzU.mjs';
import { g as gsapWithCSS } from './index.C59LGCNT.mjs';
import { S as ScrollTrigger } from './ScrollTrigger.Dhnd-cd9.mjs';
import { useRouter, useRoute } from 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/vue-router/dist/vue-router.node.mjs';
import { p as products } from './product.QS2MDIpL.mjs';
import { g as general, _ as _export_sfc, a as useI18n } from './server.mjs';
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
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/pinia/dist/pinia.prod.cjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/@vueuse/core/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/@iconify/vue/dist/iconify.mjs';

const _sfc_main$1 = {
  __name: "FooterWork",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const { t } = useI18n();
    const route = useRoute();
    const currentSlug = computed(() => route.params.slug);
    const nextProject = computed(() => {
      const currentProduct = products[currentSlug.value];
      return (currentProduct == null ? void 0 : currentProduct.nextProject) || null;
    });
    gsapWithCSS.registerPlugin(ScrollTrigger);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-33d175a0><footer id="footer" class="footer footer-product" data-scroll-section data-v-33d175a0><div class="footer-product__container" data-v-33d175a0>`);
      if (unref(nextProject)) {
        _push(`<div class="footer__wrapper footer-product__wrapper-top" data-v-33d175a0>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/work/${unref(nextProject).slug}`,
          class: "footer-product__link-item next-case"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="footer-product__title" data-v-33d175a0${_scopeId}><h2 data-v-33d175a0${_scopeId}>${ssrInterpolate(unref(nextProject).title)}</h2></div><div class="footer-product__image-wrap" data-scroll data-scroll-speed="3" data-scroll-position="bottom" data-v-33d175a0${_scopeId}><div class="footer-product__image-body" data-v-33d175a0${_scopeId}><div class="${ssrRenderClass(["footer-product__image-color", unref(nextProject).color])}" data-v-33d175a0${_scopeId}></div><img${ssrRenderAttr("src", unref(nextProject).image)} class="footer-product__image ibg"${ssrRenderAttr("alt", unref(nextProject).title)} data-v-33d175a0${_scopeId}></div></div>`);
            } else {
              return [
                createVNode("div", { class: "footer-product__title" }, [
                  createVNode("h2", null, toDisplayString(unref(nextProject).title), 1)
                ]),
                createVNode("div", {
                  class: "footer-product__image-wrap",
                  "data-scroll": "",
                  "data-scroll-speed": "3",
                  "data-scroll-position": "bottom"
                }, [
                  createVNode("div", { class: "footer-product__image-body" }, [
                    createVNode("div", {
                      class: ["footer-product__image-color", unref(nextProject).color]
                    }, null, 2),
                    createVNode("img", {
                      src: unref(nextProject).image,
                      class: "footer-product__image ibg",
                      alt: unref(nextProject).title
                    }, null, 8, ["src", "alt"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="footer-product__wrapper-bottom" data-v-33d175a0><div class="footer__line" data-v-33d175a0></div><button class="footer__mail btn magnetic" data-btn-hover data-strength="70" data-strength-text="40" data-v-33d175a0><div class="btn__bg" data-v-33d175a0></div><div class="btn__circle-wrap" data-v-33d175a0><div class="btn__circle" data-v-33d175a0><div class="before__100" data-v-33d175a0></div></div></div><span class="btn__text" data-v-33d175a0><p class="btn-text-p change" data-v-33d175a0>${ssrInterpolate(unref(t)("back"))}</p></span><div class="btn__border" data-v-33d175a0></div></button></div><div class="footer__copyright" data-v-33d175a0><div class="header__header magnetic" data-strength="20" data-strength-text="10" data-v-33d175a0><div class="header__svg-icon top" data-v-33d175a0><a href="https://vaitulevichaleh.com" class="header__logo-btn" data-v-33d175a0><p class="logo" data-v-33d175a0>\xA9 2024</p><span class="header__logo-text logo-text" data-v-33d175a0><span class="logo-text__code" data-v-33d175a0>Coded by</span><div class="logo-text__wrap" data-v-33d175a0><span class="logo-text__aleh" data-v-33d175a0>Aleh</span><span class="logo-text__vait" data-v-33d175a0>Vaitulevich</span></div></span></a></div></div><div class="footer__cookie magnetic" data-strength="20" data-strength-text="10" data-v-33d175a0>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cookie",
        class: "footer__cookie"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cookie Policy<p hidden class="btn__text" data-v-33d175a0${_scopeId}></p>`);
          } else {
            return [
              createTextVNode("Cookie Policy"),
              createVNode("p", {
                hidden: "",
                class: "btn__text"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="magnetic footer__privacy" data-strength="20" data-strength-text="10" data-v-33d175a0>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "footer__cookie"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy<p hidden class="btn__text" data-v-33d175a0${_scopeId}></p>`);
          } else {
            return [
              createTextVNode("Privacy Policy"),
              createVNode("p", {
                hidden: "",
                class: "btn__text"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="footer__time-component" data-v-33d175a0><h5 class="footer__time-label" data-v-33d175a0>TIME</h5><p class="time-millisec" data-v-33d175a0></p></div></div></div></footer></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterWork.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FooterWork = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-33d175a0"]]);
const _sfc_main = {
  __name: "slug-layout",
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper work-slug" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(MenuMobile, null, null, _parent));
      _push(`<main class="main">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(FooterWork, null, null, _parent));
      _push(ssrRenderComponent(Cookies, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/slug-layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/slug-layout.DBxxNBgM');
//# sourceMappingURL=slug-layout.DBxxNBgM.mjs.map
