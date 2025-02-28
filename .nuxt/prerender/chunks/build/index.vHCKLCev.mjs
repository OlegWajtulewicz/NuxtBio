globalThis.__timing__.logStart('Load chunks/build/index.vHCKLCev');import { ref, useSSRContext, watch, nextTick, unref, computed, mergeProps, withCtx, createVNode, toDisplayString } from 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/vue/server-renderer/index.mjs';
import { defineStore } from 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/pinia/dist/pinia.prod.cjs';
import { _ as _sfc_main$4 } from './PageHead.BOCRD1eS.mjs';
import { _ as _export_sfc, u as useI18n, g as general, a as gsapWithCSS, E as Elastic, P as Power4, c as __nuxt_component_0$2 } from './server.mjs';
import { M as MouseCursor } from './MouseCursor.D6JU-pFX.mjs';
import { w as works } from './works.DnctlLGV.mjs';
import { U as USkeleton } from './USkeleton.C4yEaMxR.mjs';
import { f as firstScreenAnimation } from './useFirstScreenAnimation.DC5oZruM.mjs';
import { useHead } from 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/defu/dist/defu.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/unenv/runtime/fetch/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/@iconify/utils/lib/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/unenv/runtime/npm/consola.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/@vueuse/core/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/vaj-o/OneDrive/Desktop/NuxtBio/node_modules/@unhead/shared/dist/index.mjs';

const useGridViewStore = defineStore("gridView", () => {
  const view = ref("rows");
  function loadSavedState() {
  }
  function setView(newView) {
    view.value = newView;
  }
  return {
    view,
    setView,
    loadSavedState
  };
});
const _sfc_main$3 = {
  __name: "WorksSwitch",
  __ssrInlineRender: true,
  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  setup(__props) {
    const gridViewStore = useGridViewStore();
    const props = __props;
    watch(() => props.isLoading, (newValue) => {
      if (!newValue) {
        initMagneticButtons();
      }
    });
    const gridButtonClasses = computed(() => ({
      "works-switch__grid-wrap": true,
      "btn-": true,
      "btn-normal": true,
      "columns-btn": true,
      "active": !props.isLoading && gridViewStore.view === "columns",
      "not-active": !props.isLoading && gridViewStore.view === "rows"
    }));
    const listButtonClasses = computed(() => ({
      "works-switch__flex-wrap": true,
      "btn-": true,
      "btn-normal": true,
      "rows-btn": true,
      "active": !props.isLoading && gridViewStore.view === "rows",
      "not-active": !props.isLoading && gridViewStore.view === "columns"
    }));
    function initMagneticButtons() {
      if ((void 0).innerWidth > 540) {
        const magnets = (void 0).querySelectorAll(".magnetic");
        magnets.forEach((magnet) => {
          var _a;
          magnet.addEventListener("mousemove", moveMagnet);
          (_a = magnet.parentNode) == null ? void 0 : _a.classList.remove("not-active");
          magnet.addEventListener("mouseleave", function(event) {
            gsapWithCSS.to(event.currentTarget, {
              duration: 1.5,
              x: 0,
              y: 0,
              ease: Elastic.easeOut,
              clearProps: "all"
            });
          });
        });
      }
    }
    function moveMagnet(event) {
      const magnetButton = event.currentTarget;
      const bounding = magnetButton.getBoundingClientRect();
      const magnetsStrength = magnetButton.getAttribute("data-strength") || "70";
      gsapWithCSS.to(magnetButton, {
        duration: 1.5,
        x: ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) * magnetsStrength,
        y: ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) * magnetsStrength,
        rotate: "0.001deg",
        ease: Power4.easeOut
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "works-switch",
        "data-scroll-section": ""
      }, _attrs))} data-v-8e58cd4b><div class="works-switch__container" data-v-8e58cd4b><h5 class="works-switch__title" data-v-8e58cd4b>${ssrInterpolate(_ctx.$t("all_works"))}</h5><div class="works-switch__buttons product-header-pr" data-v-8e58cd4b><button class="${ssrRenderClass(gridButtonClasses.value)}" data-v-8e58cd4b><div class="works-switch__grid btn magnetic" data-strength="70" data-strength-text="40" data-v-8e58cd4b><div class="btn__bg" data-v-8e58cd4b></div><div class="btn__circle-wrap" data-v-8e58cd4b><div class="btn__circle" data-v-8e58cd4b><div class="before__100" data-v-8e58cd4b></div></div></div><span class="btn__text" data-v-8e58cd4b><p class="btn-text-p change" data-v-8e58cd4b><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" data-v-8e58cd4b><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" data-v-8e58cd4b></path></svg></p></span><div class="btn__border" data-v-8e58cd4b></div></div></button><button class="${ssrRenderClass(listButtonClasses.value)}" data-v-8e58cd4b><div class="works-switch__flex btn magnetic" data-strength="70" data-strength-text="40" data-v-8e58cd4b><div class="btn__bg" data-v-8e58cd4b></div><div class="btn__circle-wrap" data-v-8e58cd4b><div class="btn__circle" data-v-8e58cd4b><div class="before__100" data-v-8e58cd4b></div></div></div><span class="btn__text" data-v-8e58cd4b><p class="btn-text-p change" data-v-8e58cd4b><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6" data-v-8e58cd4b><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" data-v-8e58cd4b></path></svg></p></span><div class="btn__border" data-v-8e58cd4b></div></div></button></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WorksSwitch.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const WorksSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-8e58cd4b"]]);
const _sfc_main$2 = {
  __name: "WorksList",
  __ssrInlineRender: true,
  props: {
    works: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "works-items work-grid small-work-grid grid-fade grid-rows-part" }, _attrs))} data-v-8180cfcb><div class="works__color" data-v-8180cfcb></div><div class="works-items__container color-container" data-v-8180cfcb><ul class="works-items__items-list work-wrapper" data-v-8180cfcb><!--[-->`);
      ssrRenderList(__props.works, (work) => {
        _push(`<li class="works-items__item visible" data-v-8180cfcb><div class="line" data-v-8180cfcb></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/work/${work.slug}`,
          class: ["works-items__link link-works-items"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h4 class="link-works-items__title" data-v-8180cfcb${_scopeId}>${ssrInterpolate(work.title)}</h4><div class="link-works-items__service" data-v-8180cfcb${_scopeId}><p data-v-8180cfcb${_scopeId}>${ssrInterpolate(work.service)}</p></div><div class="link-works-items__year" data-v-8180cfcb${_scopeId}><p data-v-8180cfcb${_scopeId}>${ssrInterpolate(work.year)}</p></div>`);
            } else {
              return [
                createVNode("h4", { class: "link-works-items__title" }, toDisplayString(work.title), 1),
                createVNode("div", { class: "link-works-items__service" }, [
                  createVNode("p", null, toDisplayString(work.service), 1)
                ]),
                createVNode("div", { class: "link-works-items__year" }, [
                  createVNode("p", null, toDisplayString(work.year), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--><div class="line" data-v-8180cfcb></div></ul></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WorksList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const WorksList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8180cfcb"]]);
const _sfc_main$1 = {
  __name: "WorksGrid",
  __ssrInlineRender: true,
  props: {
    works: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const gridViewStore = useGridViewStore();
    const isClient = ref(false);
    const isImagesLoaded = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "works-grid-wrapper" }, _attrs))} data-v-f446d805><section class="${ssrRenderClass([{
        "grid-fade": true,
        "grid-columns-part": true,
        "grid-fade-out": isClient.value,
        "grid-fade-in": isClient.value && isImagesLoaded.value,
        "grid-view": unref(gridViewStore).view === "rows",
        "list-view": unref(gridViewStore).view === "columns"
      }, "works-tiles work-tiles"])}" data-v-f446d805><div class="works__color" data-v-f446d805></div><div class="works-tiles__container" data-v-f446d805><div class="line" data-v-f446d805></div><ul class="works-tiles__tiles-list work-tiles-wrapper" data-v-f446d805><!--[-->`);
      ssrRenderList(__props.works, (work) => {
        _push(`<li class="works-tiles__item" data-v-f446d805><div class="works-tiles__wrapper" data-v-f446d805>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/work/${work.slug}`,
          class: ["works-tiles__link link-works-tiles"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="link-works-tiles__images" data-v-f446d805${_scopeId}><div class="${ssrRenderClass(["item-latest-work__color", work.color])}" data-v-f446d805${_scopeId}></div><img${ssrRenderAttr("src", work.image)}${ssrRenderAttr("alt", work.title)} class="link-works-tiles__image ibg" data-v-f446d805${_scopeId}></div><h4 class="link-works-tiles__title" data-v-f446d805${_scopeId}>${ssrInterpolate(work.title)}</h4><div class="link-works-tiles__devider" data-v-f446d805${_scopeId}></div><div class="link-works-tiles__footer" data-v-f446d805${_scopeId}><div class="link-works-tiles__service" data-v-f446d805${_scopeId}><p data-v-f446d805${_scopeId}>${ssrInterpolate(work.service)}</p></div><div class="link-works-tiles__year" data-v-f446d805${_scopeId}><p data-v-f446d805${_scopeId}>${ssrInterpolate(work.year)}</p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "link-works-tiles__images" }, [
                  createVNode("div", {
                    class: ["item-latest-work__color", work.color]
                  }, null, 2),
                  createVNode("img", {
                    src: work.image,
                    alt: work.title,
                    class: "link-works-tiles__image ibg"
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("h4", { class: "link-works-tiles__title" }, toDisplayString(work.title), 1),
                createVNode("div", { class: "link-works-tiles__devider" }),
                createVNode("div", { class: "link-works-tiles__footer" }, [
                  createVNode("div", { class: "link-works-tiles__service" }, [
                    createVNode("p", null, toDisplayString(work.service), 1)
                  ]),
                  createVNode("div", { class: "link-works-tiles__year" }, [
                    createVNode("p", null, toDisplayString(work.year), 1)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul></div></section></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WorksGrid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const WorksGrid = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f446d805"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const gridViewStore = useGridViewStore();
    const isLoading = ref(true);
    ref(false);
    useHead(() => ({
      title: t("meta.work.title")
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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-00e14801>`);
      _push(ssrRenderComponent(MouseCursor, { projects: unref(works) }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(WorksSwitch, { isLoading: unref(isLoading) }, null, _parent));
      if (unref(isLoading)) {
        _push(`<div class="works-skeleton" data-v-00e14801><!--[-->`);
        ssrRenderList(6, (i) => {
          _push(`<div class="works-skeleton__item" data-v-00e14801>`);
          _push(ssrRenderComponent(USkeleton, {
            class: "works-skeleton__image",
            ui: { background: "skeleton--bg" }
          }, null, _parent));
          _push(`<div class="works-skeleton__content" data-v-00e14801>`);
          _push(ssrRenderComponent(USkeleton, {
            class: "works-skeleton__title",
            ui: { background: "skeleton--bg" }
          }, null, _parent));
          _push(ssrRenderComponent(USkeleton, {
            class: "works-skeleton__text",
            ui: { background: "skeleton--bg" }
          }, null, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(WorksList, {
          style: unref(gridViewStore).view === "rows" ? null : { display: "none" },
          works: unref(works),
          class: "grid-fade grid-rows-part"
        }, null, _parent));
        _push(ssrRenderComponent(WorksGrid, {
          style: unref(gridViewStore).view === "columns" ? null : { display: "none" },
          works: unref(works),
          class: "grid-fade grid-columns-part"
        }, null, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/work/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-00e14801"]]);

export { index as default };;globalThis.__timing__.logEnd('Load chunks/build/index.vHCKLCev');
//# sourceMappingURL=index.vHCKLCev.mjs.map
