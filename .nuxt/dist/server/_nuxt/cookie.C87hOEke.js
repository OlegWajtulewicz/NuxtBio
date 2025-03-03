import { useSSRContext, ref, watch, nextTick, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./PageHead.Db6mdQuq.js";
import { M as MouseCursor } from "./MouseCursor.CX_r0-0Y.js";
import { _ as _export_sfc, f as useI18n, g as general } from "../server.mjs";
import { f as firstScreenAnimation } from "./useFirstScreenAnimation.DC5oZruM.js";
import { useHead } from "unhead";
import "hookable";
import "vue-router";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "pinia";
import "defu";
import "@unhead/shared";
import "radix3";
import "destr";
import "klona";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "@vueuse/core";
import "tailwind-merge";
import "@iconify/vue";
const _sfc_main$1 = {
  __name: "CookiesPage",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-80ade0bc><section class="section policy" data-watch="navigator" data-watch-threshold="0.1" data-v-80ade0bc><div class="policy__container container-small-s" data-v-80ade0bc><div class="policy__row" data-v-80ade0bc><div class="policy__flex-col textblock" data-v-80ade0bc><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.intro.text1"))}</p><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.intro.text2"))}</p><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.intro.text3"))}</p><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.intro.text4"))}</p><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.intro.text5"))}</p><button id="btn-open-consent" class="hello__btn btn btn-click magnetic open-consent-btn" data-strength="70" data-strength-text="25" data-v-80ade0bc><div class="btn-fill" data-v-80ade0bc></div><span class="btn-text" data-v-80ade0bc><i hidden class="btn__text" style="${ssrRenderStyle({ "display": "none" })}" data-v-80ade0bc></i><span class="btn-text-inner change" data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.button.text"))}</span></span></button><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.settings.text1"))}</p><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.settings.text2"))}</p><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.settings.text3"))}</p><p data-v-80ade0bc><strong data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.categories.title"))}</strong></p><p data-v-80ade0bc><strong data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.categories.necessary.title"))}</strong></p><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.categories.necessary.description"))}</p><p data-v-80ade0bc><strong data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.categories.analytics.title"))}</strong></p><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.categories.analytics.description"))}</p><p data-v-80ade0bc><strong data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.categories.preferences.title"))}</strong></p><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.categories.preferences.description"))}</p><p data-v-80ade0bc><strong data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.categories.marketing.title"))}</strong></p><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.categories.marketing.description"))}</p><p data-v-80ade0bc><strong data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.google_consent.title"))}</strong></p><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.google_consent.ad_storage.title"))}</p><ul data-v-80ade0bc><li data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.google_consent.ad_storage.description"))}</li></ul><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.google_consent.analytics_storage.title"))}</p><ul data-v-80ade0bc><li data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.google_consent.analytics_storage.description"))}</li></ul><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.google_consent.functionality_storage.title"))}</p><ul data-v-80ade0bc><li data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.google_consent.functionality_storage.description"))}</li></ul><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.google_consent.personalization.title"))}</p><ul data-v-80ade0bc><li data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.google_consent.personalization.description"))}</li></ul><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.google_consent.security_storage.title"))}</p><ul data-v-80ade0bc><li data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.google_consent.security_storage.description"))}</li></ul><p data-v-80ade0bc><strong data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.importance.title"))}</strong></p><ul data-v-80ade0bc><li data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.importance.points.0"))}</li><li data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.importance.points.1"))}</li></ul><p data-v-80ade0bc><strong data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.management.title"))}</strong></p><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.management.text1"))}</p><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.management.text2"))}</p><p data-v-80ade0bc><strong data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.device_settings.title"))}</strong></p><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.device_settings.text1"))}</p><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.device_settings.text2"))}</p><p data-v-80ade0bc><strong data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.interest_based_ads.title"))}</strong></p><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.interest_based_ads.text"))}</p><p data-v-80ade0bc><strong data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.consequences.title"))}</strong></p><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.consequences.text"))}</p><p data-v-80ade0bc><strong data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.contact.title"))}</strong></p><p data-v-80ade0bc>${ssrInterpolate(_ctx.$t("cookie_page.contact.name"))}<br data-v-80ade0bc> ${ssrInterpolate(_ctx.$t("cookie_page.contact.address"))}<br data-v-80ade0bc> ${ssrInterpolate(_ctx.$t("cookie_page.contact.postal"))}<br data-v-80ade0bc> ${ssrInterpolate(_ctx.$t("cookie_page.contact.phone"))} <a href="tel:+48780132019" data-v-80ade0bc>+48 780 132 019</a><br data-v-80ade0bc> ${ssrInterpolate(_ctx.$t("cookie_page.contact.email"))} <a href="mailto:vaitulevichaleh@gmail.com" data-v-80ade0bc>vaitulevichaleh@gmail.com</a></p></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CookiesPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CookiesPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-80ade0bc"]]);
const _sfc_main = {
  __name: "cookie",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const works = ref([]);
    useHead(() => ({
      title: t("meta.cookie.title")
    }));
    watch(
      () => [general.isTransitionFinish, general.isPreloaderVisible],
      ([transitionFinish, preloaderVisibility]) => {
        if (transitionFinish && !preloaderVisibility) {
          nextTick(() => {
            firstScreenAnimation({ parent: ".main" });
          });
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(MouseCursor, { projects: unref(works) }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(CookiesPage, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cookie.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=cookie.C87hOEke.js.map
