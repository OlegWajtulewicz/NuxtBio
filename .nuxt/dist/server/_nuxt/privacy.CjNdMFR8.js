import { useSSRContext, ref, watch, nextTick, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./PageHead.CwTe42JD.js";
import { M as MouseCursor } from "./MouseCursor.C4gLj3dg.js";
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
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-7e2cfae1><section class="section policy" data-watch="navigator" data-watch-threshold="0.1" data-v-7e2cfae1><div class="policy__container container-small-s" data-v-7e2cfae1><div class="policy__row" data-v-7e2cfae1><div class="policy__flex-col textblock" data-v-7e2cfae1><h2 data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section1.title"))}</h2><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section1.text"))}</p><h2 data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section2.title"))}</h2><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section2.purpose"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section2.purpose_text"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section2.legal_basis"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section2.legal_basis_a"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section2.legal_basis_b"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section2.legal_basis_c"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section2.objection_right"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section2.marketing_objection"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section2.legitimate_interest"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section2.legitimate_interest_text"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section2.recipients"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section2.recipients_text"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section2.storage_period"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section2.storage_period_text"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section2.contract_storage"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section2.cancellation_right"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section2.cancellation_text"))}</p><h2 data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section3.title"))}</h2><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section3.purpose"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section3.purpose_text"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section3.legal_basis"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section3.legal_basis_text"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section3.legitimate_interest"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section3.legitimate_interest_text"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section3.storage_period"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section3.storage_period_text"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section3.right_to_object"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section3.right_to_object_text"))}</p><h2 data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.title"))}</h2><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.intro"))}</p><p data-v-7e2cfae1><strong data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.right1"))}</strong></p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.right1_text"))}</p><p data-v-7e2cfae1><strong data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.right2"))}</strong></p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.right2_text"))}</p><p data-v-7e2cfae1><strong data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.right3"))}</strong></p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.right3_text"))}</p><p data-v-7e2cfae1><strong data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.right4"))}</strong></p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.right4_text"))}</p><p data-v-7e2cfae1><strong data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.right5"))}</strong></p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.right5_text"))}</p><p data-v-7e2cfae1><strong data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.right6"))}</strong></p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.right6_text"))}</p><p data-v-7e2cfae1><strong data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.right7"))}</strong></p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.right7_text"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.objection_note"))}</p><p data-v-7e2cfae1><strong data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.general_objection"))}</strong></p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.general_objection_text"))}</p><ul data-v-7e2cfae1><li data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.general_objection_list1"))}</li><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.general_objection_or"))}</p><li data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.general_objection_list2"))}</li></ul><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.general_objection_rights"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.general_objection_consequence"))}</p><p data-v-7e2cfae1><strong data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.marketing_objection"))}</strong></p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.marketing_objection_text"))}</p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.marketing_objection_consequence"))}</p><p data-v-7e2cfae1><strong data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.responsible"))}</strong></p><p data-v-7e2cfae1>${ssrInterpolate(_ctx.$t("privacy_page.section4.contact_info.name"))}<br data-v-7e2cfae1> ${ssrInterpolate(_ctx.$t("privacy_page.section4.contact_info.address"))}<br data-v-7e2cfae1> ${ssrInterpolate(_ctx.$t("privacy_page.section4.contact_info.postal"))}<br data-v-7e2cfae1> ${ssrInterpolate(_ctx.$t("privacy_page.section4.contact_info.phone"))} <a href="tel:+48780132019" data-v-7e2cfae1>+48 780 132 019</a><br data-v-7e2cfae1> ${ssrInterpolate(_ctx.$t("privacy_page.section4.contact_info.email"))} <a href="mailto:vaitulevichaleh@gmail.com" data-v-7e2cfae1>vaitulevichaleh@gmail.com</a></p></div></div></div></section></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PrivacyPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PrivacyPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7e2cfae1"]]);
const _sfc_main = {
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const works = ref([]);
    useHead(() => ({
      title: t("meta.privacy.title")
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
      _push(ssrRenderComponent(PrivacyPage, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=privacy.CjNdMFR8.js.map
