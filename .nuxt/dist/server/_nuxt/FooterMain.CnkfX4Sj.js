import { _ as __nuxt_component_0 } from "./nuxt-link.BtawBPGo.js";
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { g as gsapWithCSS } from "./index.C59LGCNT.js";
import { S as ScrollTrigger } from "./ScrollTrigger.Dhnd-cd9.js";
import "hookable";
import { _ as _export_sfc, f as useI18n } from "../server.mjs";
const _imports_0 = "data:image/svg+xml,%3csvg%20width='76'%20height='90'%20viewBox='0%200%2076%2090'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.536%2090L32.408%200.399994H43.288L75.16%2090H64.408L55.576%2065.04H20.12L11.288%2090H0.536ZM23.832%2054.8H51.864L37.912%2015.376L23.832%2054.8Z'%20fill='%23ebe3dc'/%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3csvg%20width='74'%20height='90'%20viewBox='0%200%2074%2090'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M31.384%2090L0.024%200.399994H10.776L36.76%2074.768L62.744%200.399994H73.496L42.264%2090H31.384Z'%20fill='%23ebe3dc'/%3e%3c/svg%3e";
const _sfc_main = {
  __name: "FooterMain",
  __ssrInlineRender: true,
  setup(__props) {
    useI18n();
    gsapWithCSS.registerPlugin(ScrollTrigger);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "footer",
        id: "footer",
        "data-scroll-section": ""
      }, _attrs))} data-v-f5b09f38><div class="footer__container" data-scroll data-scroll-speed="-7.5" data-scroll-position="bottom" data-scroll-offset="-50%, 0%" data-v-f5b09f38><div class="footer__wrapper" data-v-f5b09f38><div class="footer__title" data-v-f5b09f38><span class="footer__divider" data-v-f5b09f38>•</span>Let&#39;s talk</div><div class="footer__line" data-v-f5b09f38></div><a href="mailto:vaitulevichaleh@gmail.com" class="footer__mail btn magnetic" data-btn-hover data-strength="70" data-strength-text="40" style="${ssrRenderStyle({ "translate": "none", "rotate": "none", "scale": "none", "transform": "rotate(0.001deg)" })}" data-v-f5b09f38><div class="btn__bg" data-v-f5b09f38></div><div class="btn__circle-wrap" data-v-f5b09f38><div class="btn__circle" data-v-f5b09f38><div class="before__100" data-v-f5b09f38></div></div></div><span class="btn__text" data-v-f5b09f38><p class="btn-text-p change" data-v-f5b09f38>vaitulevichaleh@gmail.com</p></span><div class="btn__border" data-v-f5b09f38></div></a></div><div class="footer__right right-footer" data-v-f5b09f38><div class="right-footer__body" data-v-f5b09f38><div class="right-footer__logo" data-v-f5b09f38><figure data-v-f5b09f38><img${ssrRenderAttr("src", _imports_0)} alt="logo" class="right-footer__logo--a" data-v-f5b09f38></figure><figure data-v-f5b09f38><img${ssrRenderAttr("src", _imports_1)} alt="logo" class="right-footer__logo--v" data-v-f5b09f38></figure></div></div></div></div><div class="footer__copyright" data-scroll data-scroll-speed="-8.5" data-scroll-position="bottom" data-v-f5b09f38><div class="header__header magnetic" data-strength="20" data-strength-text="10" data-v-f5b09f38><div class="header__svg-icon top" data-v-f5b09f38><a href="https://vaitulevichaleh.com" class="header__logo-btn" data-v-f5b09f38><p class="logo" data-v-f5b09f38>© 2024</p><span class="header__logo-text logo-text" data-v-f5b09f38><span class="logo-text__code" data-v-f5b09f38>Coded by</span><div class="logo-text__wrap" data-v-f5b09f38><span class="logo-text__aleh" data-v-f5b09f38>Aleh</span><span class="logo-text__vait" data-v-f5b09f38>Vaitulevich</span><p hidden class="btn__text" data-v-f5b09f38></p></div></span></a></div></div><div class="footer__cookie magnetic" data-strength="20" data-strength-text="10" data-v-f5b09f38>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cookie",
        class: "footer__cookie"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cookie Policy<p hidden class="btn__text" data-v-f5b09f38${_scopeId}></p>`);
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
      _push(`</div><div class="magnetic footer__privacy" data-strength="20" data-strength-text="10" data-v-f5b09f38>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "footer__cookie"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy<p hidden class="btn__text" data-v-f5b09f38${_scopeId}></p>`);
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
      _push(`</div><div class="footer__time-component" data-v-f5b09f38><h5 class="footer__time-label" data-v-f5b09f38>TIME</h5><p class="time-millisec" data-v-f5b09f38></p></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterMain.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FooterMain = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f5b09f38"]]);
export {
  FooterMain as F
};
//# sourceMappingURL=FooterMain.CnkfX4Sj.js.map
