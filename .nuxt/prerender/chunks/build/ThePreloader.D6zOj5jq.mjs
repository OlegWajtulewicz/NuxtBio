globalThis.__timing__.logStart('Load chunks/build/ThePreloader.D6zOj5jq');import { b as buildAssetsURL } from '../_/nitro.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link.DvTVKFmo.mjs';
import { mergeProps, withCtx, openBlock, createBlock, createVNode, unref, createTextVNode, toDisplayString, useSSRContext, defineComponent, createElementBlock, ref, provide, watch } from 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/vue/server-renderer/index.mjs';
import { f as useI18n, _ as _export_sfc, c as useNuxtApp } from './server.mjs';
import { useRouter } from 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = "" + buildAssetsURL("nuxtbio/sprite.3NLFG0sF.svg");
const _sfc_main$4 = {
  __name: "TheHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header",
        id: "header",
        "data-scroll-section": "",
        "data-lenis-prevent": ""
      }, _attrs))}><div class="header__container" id="up"><div class="header__header magnetic" data-strength="20" data-strength-text="10"><div class="header__svg-icon top">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "header__logo-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="logo"${_scopeId}><use${ssrRenderAttr("xlink:href", _imports_0 + "#logo")}${_scopeId}></use></svg><span class="header__logo-text logo-text"${_scopeId}><div class="logo-text__wrap none-transform"${_scopeId}><span class="logo-text__aleh"${_scopeId}>Aleh</span><span class="logo-text__vait"${_scopeId}>Vaitulevich</span><p hidden class="btn__text"${_scopeId}></p></div></span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", { class: "logo" }, [
                createVNode("use", { "xlink:href": _imports_0 + "#logo" })
              ])),
              createVNode("span", { class: "header__logo-text logo-text" }, [
                createVNode("div", { class: "logo-text__wrap none-transform" }, [
                  createVNode("span", { class: "logo-text__aleh" }, "Aleh"),
                  createVNode("span", { class: "logo-text__vait" }, "Vaitulevich"),
                  createVNode("p", {
                    hidden: "",
                    class: "btn__text"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><nav class="header__menu menu-top-header"><ul class="menu-top-header__list"><li class="menu-top-header__item" data-link-update>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/work",
        class: "menu-top-header__link magnetic",
        "data-strength": "20",
        "data-strength-text": "10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("work"))}<p hidden class="btn__text"${_scopeId}></p>`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("work")), 1),
              createVNode("p", {
                hidden: "",
                class: "btn__text"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="menu-top-header__item" data-link-update>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "menu-top-header__link magnetic",
        "data-strength": "20",
        "data-strength-text": "10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("about"))}<p hidden class="btn__text"${_scopeId}></p>`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("about")), 1),
              createVNode("p", {
                hidden: "",
                class: "btn__text"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="menu-top-header__item" data-link-update><a href="#footer" class="menu-top-header__link magnetic" data-strength="20" data-strength-text="10">${ssrInterpolate(unref(t)("contact"))} <p hidden class="btn__text"></p></a></li><button type="button" class="menu__icon icon-menu"><span class="icon-menu__divider">\u2022</span><div class="icon-menu__span-wrap"><span class="icon-menu__menu">${ssrInterpolate(unref(t)("menu"))}</span><span class="icon-menu__close">${ssrInterpolate(unref(t)("close"))}</span></div></button></ul></nav></div></header>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "LanguageSwitcher",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale: currentLocale, setLocale } = useI18n();
    useRouter();
    const locales = [
      { code: "pl", name: "Polski" },
      { code: "ru", name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" },
      { code: "en", name: "English" }
    ];
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "language-switcher" }, _attrs))}><button class="language-switcher__button magnetic" data-strength="25" data-strength-text="15"><span class="btn__text"><div class="globe-icon"><div class="globe-wrapper"><svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a87.5,87.5,0,0,1,48,14.28V74L153.83,99.74,122.36,104l-.31-.22L102.38,90.92A16,16,0,0,0,79.87,95.1L58.93,126.4a16,16,0,0,0-2.7,8.81L56,171.44l-3.27,2.15A88,88,0,0,1,128,40ZM62.29,186.47l2.52-1.65A16,16,0,0,0,72,171.53l.21-36.23L93.17,104a3.62,3.62,0,0,0,.32.22l19.67,12.87a15.94,15.94,0,0,0,11.35,2.77L156,115.59a16,16,0,0,0,10-5.41l22.17-25.76A16,16,0,0,0,192,74V67.67A87.87,87.87,0,0,1,211.77,155l-16.14-14.76a16,16,0,0,0-16.93-3l-30.46,12.65a16.08,16.08,0,0,0-9.68,12.45l-2.39,16.19a16,16,0,0,0,11.77,17.81L169.4,202l2.36,2.37A87.88,87.88,0,0,1,62.29,186.47ZM185,195l-4.3-4.31a16,16,0,0,0-7.26-4.18L152,180.85l2.39-16.19L184.84,152,205,170.48A88.43,88.43,0,0,1,185,195Z"></path></svg></div></div><span class="${ssrRenderClass([{ "is-open": isOpen.value }, "current-lang"])}">${ssrInterpolate(unref(currentLocale))}</span></span></button><div class="${ssrRenderClass([{ "is-open": isOpen.value }, "language-switcher__dropdown"])}"><!--[-->`);
      ssrRenderList(locales, (lang) => {
        _push(`<button class="${ssrRenderClass([{ active: unref(currentLocale) === lang.code }, "language-option magnetic"])}" data-strength="25" data-strength-text="15"><span class="btn__text"><span class="lang-name">${ssrInterpolate(lang.name)}</span></span></button>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/LanguageSwitcher.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "MenuMobile",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    ref(false);
    useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><div class="menu__overlay" data-v-aab98c04></div><div class="menu__fixed" data-v-aab98c04><li class="menu _dynamic_adapt_" data-v-aab98c04><button type="button" class="menu__icon icon-menu" data-v-aab98c04><span class="icon-menu__divider" data-v-aab98c04>\u2022</span><div class="icon-menu__span-wrap" data-v-aab98c04><span class="icon-menu__menu" data-v-aab98c04>${ssrInterpolate(unref(t)("menu"))}</span><span class="icon-menu__close" data-v-aab98c04>${ssrInterpolate(unref(t)("close"))}</span></div></button><nav class="menu__body" data-v-aab98c04><ul class="menu__list" data-v-aab98c04><h5 class="menu__title menu__item" data-v-aab98c04>${ssrInterpolate(unref(t)("navigation"))}</h5><div class="line menu__item" data-v-aab98c04></div><li class="menu__item" data-link-update data-v-aab98c04>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "menu__link magnetic",
        "data-strength": "25",
        "data-strength-text": "15"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="btn__text" data-v-aab98c04${_scopeId}><p class="btn-text-p change" data-v-aab98c04${_scopeId}>${ssrInterpolate(unref(t)("home"))}</p></span>`);
          } else {
            return [
              createVNode("span", { class: "btn__text" }, [
                createVNode("p", { class: "btn-text-p change" }, toDisplayString(unref(t)("home")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="menu__item" data-link-update data-v-aab98c04>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/work",
        class: "menu__link magnetic",
        "data-strength": "25",
        "data-strength-text": "15"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="btn__text" data-v-aab98c04${_scopeId}><p class="btn-text-p change" data-v-aab98c04${_scopeId}>${ssrInterpolate(unref(t)("work"))}</p></span>`);
          } else {
            return [
              createVNode("span", { class: "btn__text" }, [
                createVNode("p", { class: "btn-text-p change" }, toDisplayString(unref(t)("work")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="menu__item" data-link-update data-v-aab98c04>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "menu__link magnetic",
        "data-strength": "25",
        "data-strength-text": "15"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="btn__text" data-v-aab98c04${_scopeId}><p class="btn-text-p change" data-v-aab98c04${_scopeId}>${ssrInterpolate(unref(t)("about"))}</p></span>`);
          } else {
            return [
              createVNode("span", { class: "btn__text" }, [
                createVNode("p", { class: "btn-text-p change" }, toDisplayString(unref(t)("about")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="menu__item" data-link-update data-v-aab98c04><a href="#footer" data-barba-prevent="self" class="menu__link magnetic" data-strength="25" data-strength-text="15" data-v-aab98c04><span class="btn__text" data-v-aab98c04><p class="btn-text-p change" data-v-aab98c04>${ssrInterpolate(unref(t)("contact"))}</p></span></a></li><div class="line menu__item" data-v-aab98c04></div>`);
      _push(ssrRenderComponent(_sfc_main$3, { class: "menu__item" }, null, _parent));
      _push(`</ul></nav></li></div><div class="hamburger-wrap not-active" data-v-aab98c04><button type="button" class="hamburger magnetic" data-strength="50" data-strength-text="30" data-v-aab98c04><div class="btn__bg" data-v-aab98c04></div><span class="btn__text" data-v-aab98c04><p class="btn-text-p change" data-v-aab98c04>${ssrInterpolate(unref(t)("menu"))}</p></span><div class="btn__border" data-v-aab98c04></div></button></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MenuMobile.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const MenuMobile = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-aab98c04"]]);
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$1 = {
  __name: "Cookies",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const isClient = ref(false);
    const bannerVisible = ref(false);
    const settingsButtonVisible = ref(false);
    function hideBanner() {
      bannerVisible.value = false;
      settingsButtonVisible.value = true;
      const banner = (void 0).getElementById("cookie-consent-banner");
      if (banner) {
        banner.classList.remove("visible");
      }
    }
    function showBanner() {
      bannerVisible.value = true;
      settingsButtonVisible.value = false;
      const banner = (void 0).getElementById("cookie-consent-banner");
      if (banner) {
        banner.classList.add("visible");
      }
      setupEventListeners();
    }
    const handleAcceptAll = () => {
      setConsent({
        necessary: true,
        analytics: true,
        preferences: true,
        marketing: true
      });
      hideBanner();
    };
    const handleAcceptSome = () => {
      var _a, _b, _c;
      const analytics = ((_a = (void 0).getElementById("consent-analytics")) == null ? void 0 : _a.checked) || false;
      const preferences = ((_b = (void 0).getElementById("consent-preferences")) == null ? void 0 : _b.checked) || false;
      const marketing = ((_c = (void 0).getElementById("consent-marketing")) == null ? void 0 : _c.checked) || false;
      setConsent({
        necessary: true,
        analytics,
        preferences,
        marketing
      });
      hideBanner();
    };
    const handleRejectAll = () => {
      setConsent({
        necessary: false,
        analytics: false,
        preferences: false,
        marketing: false
      });
      hideBanner();
    };
    function setupEventListeners() {
      const acceptAllBtn = (void 0).getElementById("btn-accept-all");
      const acceptSomeBtn = (void 0).getElementById("btn-accept-some");
      const rejectAllBtn = (void 0).getElementById("btn-reject-all");
      const openConsentBtn = (void 0).getElementById("btn-open-consent");
      if (acceptAllBtn) {
        acceptAllBtn.removeEventListener("click", handleAcceptAll);
        acceptAllBtn.addEventListener("click", handleAcceptAll);
      }
      if (acceptSomeBtn) {
        acceptSomeBtn.removeEventListener("click", handleAcceptSome);
        acceptSomeBtn.addEventListener("click", handleAcceptSome);
      }
      if (rejectAllBtn) {
        rejectAllBtn.removeEventListener("click", handleRejectAll);
        rejectAllBtn.addEventListener("click", handleRejectAll);
      }
      if (openConsentBtn) {
        openConsentBtn.removeEventListener("click", showBanner);
        openConsentBtn.addEventListener("click", showBanner);
      }
    }
    function setConsent(consent) {
      const consentMode = {
        functionality_storage: consent.necessary ? "granted" : "denied",
        security_storage: consent.necessary ? "granted" : "denied",
        ad_storage: consent.marketing ? "granted" : "denied",
        analytics_storage: consent.analytics ? "granted" : "denied",
        personalization: consent.preferences ? "granted" : "denied"
      };
      if ((void 0).gtag) {
        (void 0).gtag("consent", "update", consentMode);
      }
      localStorage.setItem("consentMode", JSON.stringify(consentMode));
    }
    watch(locale, () => {
      if (isClient.value && bannerVisible.value) {
        setupEventListeners();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cookies.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Cookies = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-81d005b3"]]);
const _sfc_main = {
  __name: "ThePreloader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="transition__container"><div class="transition__fade"></div><div class="transition__screen"><div class="transition__rounded-wrap top"><div class="transition__rounded-div"></div></div><div class="transition__rounded-wrap bottom"><div class="transition__rounded-div"></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThePreloader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { Cookies as C, MenuMobile as M, _sfc_main as _, _sfc_main$4 as a };;globalThis.__timing__.logEnd('Load chunks/build/ThePreloader.D6zOj5jq');
//# sourceMappingURL=ThePreloader.D6zOj5jq.mjs.map
