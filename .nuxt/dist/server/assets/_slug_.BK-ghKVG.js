import { _ as _export_sfc, d as _sfc_main$8, a as gsapWithCSS, S as ScrollTrigger, u as useI18n, e as useRoute, f as useRouter, g as general, c as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, useSSRContext, unref, ref, computed, watchEffect, watch, nextTick, withCtx, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { w as works } from "./works.DnctlLGV.js";
import { p as products } from "./product.QS2MDIpL.js";
import { _ as _sfc_main$9 } from "./PageHead.Di2pFaC-.js";
import { U as USkeleton } from "./USkeleton.BvvtoVFJ.js";
import { M as MouseCursor } from "./MouseCursor.C65lF-5v.js";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { f as firstScreenAnimation } from "./useFirstScreenAnimation.DC5oZruM.js";
import { useHead } from "unhead";
import "hookable";
import "destr";
import "klona";
import "defu";
import "ofetch";
import "pinia";
import "vue-router";
import "h3";
import "radix3";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "@vueuse/core";
import "tailwind-merge";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "unctx";
import "@unhead/shared";
const _sfc_main$7 = {
  __name: "ProductHeader",
  __ssrInlineRender: true,
  props: {
    link: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product__header" }, _attrs))} data-v-253ba7d8><h5 class="product__title" data-v-253ba7d8>${ssrInterpolate(__props.subtitle)}</h5><a${ssrRenderAttr("href", __props.link)} target="_blank" class="product__button product-header-pr" data-v-253ba7d8><div class="product__btn footer__mail btn magnetic" data-btn-hover data-strength="25" data-strength-text="15" data-v-253ba7d8><div class="btn__bg" data-v-253ba7d8></div><div class="btn__circle-wrap" data-v-253ba7d8><div class="btn__circle" data-v-253ba7d8><div class="before__100" data-v-253ba7d8></div></div></div><span class="btn__text" data-v-253ba7d8><p class="btn-text-p change" data-v-253ba7d8>Live Site</p></span><div class="btn__border" data-v-253ba7d8></div></div></a></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product/ProductHeader.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ProductHeader = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-253ba7d8"]]);
const _sfc_main$6 = {
  __name: "ProductImage",
  __ssrInlineRender: true,
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "product__image-wrap",
        "data-scroll-section": ""
      }, _attrs))} data-v-0323b8d0><div class="product__image" data-v-0323b8d0>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: __props.image,
        alt: __props.title,
        class: "ibg",
        loading: "lazy",
        decoding: "async",
        fetchpriority: "high",
        format: "webp",
        fit: "cover",
        placeholder: ""
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product/ProductImage.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ProductImage = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-0323b8d0"]]);
const _sfc_main$5 = {
  __name: "ProductInfo",
  __ssrInlineRender: true,
  props: {
    stack: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product__info info-product" }, _attrs))} data-v-f867ece8><div class="info-product__left" data-v-f867ece8><h5 class="info-product__title" data-v-f867ece8>stack</h5><ul class="info-product__list" data-v-f867ece8><!--[-->`);
      ssrRenderList(__props.stack, (tech) => {
        _push(`<li class="info-product__item" data-v-f867ece8><span class="info-product__divider" data-v-f867ece8>•</span>${ssrInterpolate(tech)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="info-product__right" data-v-f867ece8><h3 class="info-product__title-big" data-v-f867ece8>${ssrInterpolate(__props.title)}</h3><div class="info-product__text" data-v-f867ece8>${ssrInterpolate(__props.description)}</div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product/ProductInfo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ProductInfo = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-f867ece8"]]);
const _sfc_main$4 = {
  __name: "ProductVideo",
  __ssrInlineRender: true,
  props: {
    video: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["product__video-wrap video-wrap-product", __props.color]
      }, _attrs))} data-v-4bc565c8><div class="video-wrap-product__container" data-v-4bc565c8><div class="video-wrap-product__body" data-v-4bc565c8><figure data-v-4bc565c8><div class="video-wrap-product__video-overlay playpauze" data-v-4bc565c8><video playsinline autoplay muted loop${ssrRenderAttr("src", __props.video)} frameborder="0" allowfullscreen data-v-4bc565c8></video></div></figure></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product/ProductVideo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ProductVideo = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-4bc565c8"]]);
const _sfc_main$3 = {
  __name: "ProductDevices",
  __ssrInlineRender: true,
  props: {
    devices: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    gsapWithCSS.registerPlugin(ScrollTrigger);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product__device-wrap device-wrap-product" }, _attrs))}><div class="device-wrap-product__container"><div class="device-wrap-product__item-wrap" data-scroll data-scroll-speed="-1"><div class="device-wrap-product__item"><img${ssrRenderAttr("src", __props.devices[0])} class="ibg"${ssrRenderAttr("alt", `${__props.title} device 1`)}></div></div><div class="device-wrap-product__item-wrap"><div class="device-wrap-product__item"><img${ssrRenderAttr("src", __props.devices[1])} class="ibg"${ssrRenderAttr("alt", `${__props.title} device 2`)}></div></div><div class="device-wrap-product__item-wrap" data-scroll data-scroll-speed="1"><div class="device-wrap-product__item"><img${ssrRenderAttr("src", __props.devices[2])} class="ibg"${ssrRenderAttr("alt", `${__props.title} device 3`)}></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product/ProductDevices.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "ProductButton",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-page-button" }, _attrs))}><div class="product-page-button__container"><a href="mailto:vaitulevichaleh@gmail.com" class="footer__mail product__btn btn magnetic" data-btn-hover data-strength="70" data-strength-text="40"><div class="btn__bg"></div><div class="btn__circle-wrap"><div class="btn__circle"><div class="before__100"></div></div></div><span class="btn__text"><p class="btn-text-p change">${ssrInterpolate(unref(t)("want_same") || "I want the same")}</p></span><div class="btn__border"></div></a></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product/ProductButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/img/product/search.png");
const _imports_1 = publicAssetsURL("/img/product/filters.png");
const _imports_2 = publicAssetsURL("/img/product/login.png");
const _imports_3 = publicAssetsURL("/img/product/acc.png");
const _imports_4 = publicAssetsURL("/img/product/modal.png");
const _imports_5 = publicAssetsURL("/img/product/toast.png");
const _imports_6 = publicAssetsURL("/img/product/cart.png");
const _imports_7 = publicAssetsURL("/img/product/pay.png");
const _imports_8 = publicAssetsURL("/img/product/drawer.png");
const _imports_9 = publicAssetsURL("/img/product/check.png");
const _imports_10 = publicAssetsURL("/img/product/admin.png");
const _imports_11 = publicAssetsURL("/img/product/product-page.png");
const _imports_12 = publicAssetsURL("/img/product/role.png");
const _imports_13 = publicAssetsURL("/img/product/dashboard.png");
const _sfc_main$1 = {
  __name: "ProductGrid",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "prod_container" }, _attrs))}><div class="product__items-grid items-grid-product"><div class="items-grid-product__card-title" data-scroll><div class="items-grid-product__item item-grid-product"><strong class="item-grid-product__title">${ssrInterpolate(unref(t)("productPizza.search.title"))}</strong><br><p class="item-grid-product__text">${ssrInterpolate(unref(t)("productPizza.search.text"))}</p></div></div><div class="items-grid-product__group1"><div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img${ssrRenderAttr("src", _imports_0)} data-scroll data-scroll-speed="-0.5" class="ibg" alt="search"></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__item item-grid-product"><strong class="item-grid-product__title">${ssrInterpolate(unref(t)("productPizza.profile.title"))}</strong><br><p class="item-grid-product__text">${ssrInterpolate(unref(t)("productPizza.profile.text"))}</p></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img${ssrRenderAttr("src", _imports_1)} data-scroll data-scroll-speed="-0.5" class="ibg" alt="filters"></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img${ssrRenderAttr("src", _imports_2)} data-scroll data-scroll-speed="-0.5" class="ibg" alt="login"></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__item item-grid-product"><strong class="item-grid-product__title">${ssrInterpolate(unref(t)("productPizza.filtration.title"))}</strong><br><p class="item-grid-product__text">${ssrInterpolate(unref(t)("productPizza.filtration.text"))}</p></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__item item-grid-product"><strong class="item-grid-product__title">${ssrInterpolate(unref(t)("productPizza.routes.title"))}</strong><br><p class="item-grid-product__text">${ssrInterpolate(unref(t)("productPizza.routes.text"))}</p></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img${ssrRenderAttr("src", _imports_3)} data-scroll data-scroll-speed="-0.5" class="ibg" alt="acc"></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img${ssrRenderAttr("src", _imports_4)} data-scroll data-scroll-speed="-0.5" class="ibg" alt="modal"></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__item item-grid-product"><strong class="item-grid-product__title">${ssrInterpolate(unref(t)("productPizza.auth.title"))}</strong><br><p class="item-grid-product__text">${ssrInterpolate(unref(t)("productPizza.auth.text"))}</p></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img${ssrRenderAttr("src", _imports_5)} data-scroll data-scroll-speed="-0.5" class="ibg" alt="toast"></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__item item-grid-product"><strong class="item-grid-product__title">${ssrInterpolate(unref(t)("productPizza.alerts.title"))}</strong><br><p class="item-grid-product__text">${ssrInterpolate(unref(t)("productPizza.alerts.text"))}</p></div></div></div><div class="items-grid-product__card-title" data-scroll><div class="items-grid-product__item item-grid-product"><strong class="item-grid-product__title">${ssrInterpolate(unref(t)("productPizza.basket.title"))}</strong><br><p class="item-grid-product__text">${ssrInterpolate(unref(t)("productPizza.basket.text"))}</p></div></div><div class="items-grid-product__group2"><div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img${ssrRenderAttr("src", _imports_6)} data-scroll data-scroll-speed="-0.5" class="ibg" alt="cart"></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img${ssrRenderAttr("src", _imports_7)} data-scroll data-scroll-speed="-0.5" class="ibg" alt="pay"></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__item item-grid-product"><strong class="item-grid-product__title">${ssrInterpolate(unref(t)("productPizza.purchase.title"))}</strong><br><p class="item-grid-product__text">${ssrInterpolate(unref(t)("productPizza.purchase.text"))}</p></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img${ssrRenderAttr("src", _imports_8)} data-scroll data-scroll-speed="-0.5" class="ibg" alt="drawer"></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__item item-grid-product"><p class="item-grid-product__text">${ssrInterpolate(unref(t)("productPizza.email.text"))}</p></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img${ssrRenderAttr("src", _imports_9)} data-scroll data-scroll-speed="-0.5" class="ibg" alt="check"></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img${ssrRenderAttr("src", _imports_10)} data-scroll data-scroll-speed="-0.5" class="ibg" alt="admin"></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__item item-grid-product"><strong class="item-grid-product__title">${ssrInterpolate(unref(t)("productPizza.dashboard.title"))}</strong><br><p class="item-grid-product__text">${ssrInterpolate(unref(t)("productPizza.dashboard.text"))}</p></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img${ssrRenderAttr("src", _imports_11)} data-scroll data-scroll-speed="-0.5" class="ibg" alt="product-page"></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img${ssrRenderAttr("src", _imports_12)} data-scroll data-scroll-speed="-0.5" class="ibg" alt="role"></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img${ssrRenderAttr("src", _imports_13)} data-scroll data-scroll-speed="-0.5" class="ibg" alt="dashboard"></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__item item-grid-product"><p class="item-grid-product__text">${ssrInterpolate(unref(t)("productPizza.admin.text"))}</p></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product/ProductGrid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const route = useRoute();
    const router = useRouter();
    const { t, locale } = useI18n();
    const isLoading = ref(true);
    const isError = ref(false);
    const errorMessage = ref("");
    const product = computed(() => {
      var _a2;
      const slug = (_a2 = route.params.slug) == null ? void 0 : _a2.toString().toLowerCase();
      return products[slug];
    });
    watchEffect(() => {
      if (!isLoading.value && !product.value) {
        isError.value = true;
        errorMessage.value = t("project_not_found") || "Проект не найден";
        router.push("/work");
      }
    });
    useHead({
      title: product.value ? `${product.value.title} • Aleh Vaitulevich` : t("project_not_found") || "Проект не найден",
      meta: [
        {
          name: "description",
          content: ((_a = product.value) == null ? void 0 : _a.description) || ""
        }
      ]
    });
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
      var _a2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(MouseCursor, { projects: unref(works) }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      if (unref(isLoading)) {
        _push(`<div class="loading-skeleton"><div class="skeleton-container"><div class="skeleton-header-wrap">`);
        _push(ssrRenderComponent(USkeleton, {
          class: "skeleton-title",
          ui: { background: "skeleton--bg" }
        }, null, _parent));
        _push(ssrRenderComponent(USkeleton, {
          class: "skeleton-button",
          ui: { background: "skeleton--bg" }
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(USkeleton, {
          class: "skeleton-main-image",
          ui: { background: "skeleton--bg" }
        }, null, _parent));
        _push(`<div class="skeleton-info-wrap"><div class="skeleton-info-left">`);
        _push(ssrRenderComponent(USkeleton, {
          class: "skeleton-subtitle",
          ui: { background: "skeleton--bg" }
        }, null, _parent));
        _push(`<div class="skeleton-stack"><!--[-->`);
        ssrRenderList(6, (i) => {
          _push(ssrRenderComponent(USkeleton, {
            key: i,
            class: "skeleton-stack-item",
            ui: { background: "skeleton--bg" }
          }, null, _parent));
        });
        _push(`<!--]--></div></div><div class="skeleton-info-right">`);
        _push(ssrRenderComponent(USkeleton, {
          class: "skeleton-project-title",
          ui: { background: "skeleton--bg" }
        }, null, _parent));
        _push(ssrRenderComponent(USkeleton, {
          class: "skeleton-description",
          ui: { background: "skeleton--bg" }
        }, null, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(product) && !unref(isLoading)) {
        _push(`<section class="${ssrRenderClass([`gradient-${unref(product).color}`, "product-wrap"])}" data-scroll-section><div class="product"><div class="product__container">`);
        _push(ssrRenderComponent(ProductHeader, {
          link: unref(product).liveUrl,
          subtitle: unref(product).subtitle
        }, null, _parent));
        _push(ssrRenderComponent(ProductImage, {
          image: unref(product).mainImage,
          title: unref(product).title
        }, null, _parent));
        _push(ssrRenderComponent(ProductInfo, {
          stack: unref(product).stack,
          title: unref(product).title,
          description: unref(product).description
        }, null, _parent));
        _push(`<div class="section-padding"></div></div></div>`);
        if (unref(product).slug !== "pizza-next") {
          _push(`<!--[-->`);
          if (unref(product).video) {
            _push(ssrRenderComponent(ProductVideo, {
              video: unref(product).video,
              color: unref(product).color
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if ((_a2 = unref(product).devices) == null ? void 0 : _a2.length) {
            _push(ssrRenderComponent(_sfc_main$3, {
              devices: unref(product).devices,
              title: unref(product).title
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (unref(product).slug === "pizza-next") {
          _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<div class="error-container"><p>${ssrInterpolate(unref(errorMessage))}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/work",
          class: "back-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("back_to_works") || "Вернуться к работам")}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("back_to_works") || "Вернуться к работам"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/work/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_.BK-ghKVG.js.map
