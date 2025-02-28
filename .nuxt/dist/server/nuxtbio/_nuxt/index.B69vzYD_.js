import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { mergeProps, useSSRContext, unref, ref, resolveDirective, withCtx, createVNode, toDisplayString, withDirectives, openBlock, createBlock, createCommentVNode, watch, nextTick } from "vue";
import { g as gsapWithCSS } from "./index.C59LGCNT.js";
import { S as ScrollTrigger } from "./ScrollTrigger.Dhnd-cd9.js";
import $ from "jquery";
import { _ as _export_sfc, f as useI18n, c as useNuxtApp, g as general } from "../../server.mjs";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { _ as __nuxt_component_0 } from "./nuxt-link.DvTVKFmo.js";
import { M as MouseCursor } from "./MouseCursor.DUe2at7q.js";
import { w as works } from "./works.DnctlLGV.js";
import { f as firstScreenAnimation } from "./useFirstScreenAnimation.DC5oZruM.js";
import { useHead } from "unhead";
import "hookable";
import "ofetch";
import "unctx";
import "h3";
import "pinia";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "@vueuse/core";
import "tailwind-merge";
import "@iconify/vue";
gsapWithCSS.registerPlugin(ScrollTrigger);
const _sfc_main$5 = {
  __name: "MainHome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))}><div class="home__bg" data-scroll data-scroll-speed="+1.5"></div><div class="home__container"><div class="home__text" data-scroll data-scroll-speed="-3" data-scroll-position="top"><div class=""><h1 data-value="UI/UX Design" class="home__subtitle text-effect">Creative </h1></div><div class="home__canvas"><div class="home__canvas-wrap" id="myCanvas"></div></div><h1 class="home__subtitle--right" data-scroll data-scroll-speed="-2" data-scroll-position="top"><div class="">web </div></h1><h1 class="home__subtitle--right1"><div class="" data-scroll data-scroll-speed="-2" data-scroll-position="top"> development </div></h1></div></div><div class="line line-main"><div class="line-shadow"></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainHome.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
gsapWithCSS.registerPlugin(ScrollTrigger);
function initMarqueeScrollV2() {
  $("[data-marquee-target]").each(function() {
    let marquee = $(this);
    let marqueeItemsWidth = marquee.find(".marquee-content").width();
    let marqueeSpeed = marquee.attr("data-marquee-speed") * (marqueeItemsWidth / $(void 0).width());
    if ($(void 0).width() <= 540) {
      marqueeSpeed = marqueeSpeed * 0.25;
    } else if ($(void 0).width() <= 1024) {
      marqueeSpeed = marqueeSpeed * 0.5;
    }
    let marqueeDirection = 1;
    let marqueeContent = gsapWithCSS.to(marquee.find(".marquee-content"), { xPercent: -100, repeat: -1, duration: marqueeSpeed, ease: "linear", paused: true }).totalProgress(0.5);
    gsapWithCSS.set(marquee.find(".marquee-content"), { xPercent: 50 });
    ScrollTrigger.create({
      trigger: marquee,
      start: "top bottom",
      end: "bottom top",
      onUpdate(self) {
        if (self.direction !== marqueeDirection) {
          marqueeDirection *= -1;
          if (marquee.attr("data-marquee-direction") == "right") {
            gsapWithCSS.to([marqueeContent], { timeScale: marqueeDirection * -1, overwrite: true });
          } else {
            gsapWithCSS.to([marqueeContent], { timeScale: marqueeDirection, overwrite: true });
          }
        }
        self.direction === -1 ? marquee.attr("data-marquee-status", "normal") : marquee.attr("data-marquee-status", "inverted");
      },
      onEnter: () => marqueeContent.play(),
      onEnterBack: () => marqueeContent.play(),
      onLeave: () => marqueeContent.pause(),
      onLeaveBack: () => marqueeContent.pause()
    });
    marquee.each(function() {
      let triggerElement = $(this);
      let targetElement = $(this).find(".marquee-scroll");
      let marqueeScrollSpeed = $(this).attr("data-marquee-scroll-speed");
      let tl = gsapWithCSS.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: "0% 100%",
          end: "100% 0%",
          scrub: 0
        }
      });
      if (triggerElement.attr("data-marquee-direction") == "left") {
        tl.fromTo(targetElement, {
          x: marqueeScrollSpeed + "vw"
        }, {
          x: marqueeScrollSpeed * -1 + "vw",
          ease: "none"
        });
      }
      if (triggerElement.attr("data-marquee-direction") == "right") {
        tl.fromTo(targetElement, {
          x: marqueeScrollSpeed * -1 + "vw"
        }, {
          x: marqueeScrollSpeed + "vw",
          ease: "none"
        });
      }
    });
  });
}
const _sfc_main$4 = {
  mounted() {
    initMarqueeScrollV2();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "section section-home-intro-marquee",
    "data-scroll-section": ""
  }, _attrs))} data-v-6cad0709><div class="container full" data-v-6cad0709><div class="marquee-group" data-v-6cad0709><div class="marquee" data-marquee-target data-marquee-direction="left" data-marquee-status="inverted" data-marquee-speed="20" data-marquee-scroll-speed="10" data-v-6cad0709><div class="marquee-scroll" data-v-6cad0709><div class="marquee-content" data-v-6cad0709><span class="word" data-v-6cad0709>Aleh Vaitulevich</span><span class="divider" data-v-6cad0709>•</span><span class="word" data-v-6cad0709>Freelance Developer</span><span class="divider" data-v-6cad0709>•</span><span class="word" data-v-6cad0709>Aleh Vaitulevich</span><span class="divider" data-v-6cad0709>•</span><span class="word" data-v-6cad0709>Freelance Developer</span><span class="divider" data-v-6cad0709>•</span><span class="word" data-v-6cad0709>Aleh Vaitulevich</span><span class="divider" data-v-6cad0709>•</span><span class="word" data-v-6cad0709>Freelance Developer</span><span class="divider" data-v-6cad0709>•</span></div><div class="marquee-content" data-v-6cad0709><span class="word" data-v-6cad0709>Aleh Vaitulevich</span><span class="divider" data-v-6cad0709>•</span><span class="word" data-v-6cad0709>Freelance Developer</span><span class="divider" data-v-6cad0709>•</span><span class="word" data-v-6cad0709>Aleh Vaitulevich</span><span class="divider" data-v-6cad0709>•</span><span class="word" data-v-6cad0709>Freelance Developer</span><span class="divider" data-v-6cad0709>•</span><span class="word" data-v-6cad0709>Aleh Vaitulevich</span><span class="divider" data-v-6cad0709>•</span><span class="word" data-v-6cad0709>Freelance Developer</span><span class="divider" data-v-6cad0709>•</span></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MarqueeHome.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const MarqueeHome = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6cad0709"]]);
gsapWithCSS.registerPlugin(ScrollTrigger);
const _sfc_main$3 = {
  __name: "AboutHome",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "about",
        "data-scroll-section": ""
      }, _attrs))} data-v-a7a0463b><div class="about__container" data-v-a7a0463b><div class="about__wrapper" data-v-a7a0463b><div class="about__body" data-v-a7a0463b><div class="about__text" data-v-a7a0463b><p class="span-lines animate" data-v-a7a0463b>${ssrInterpolate(unref(t)("about_home.main_text"))}</p></div><div class="about__kontext" data-v-a7a0463b><p class="about__kontext--text" data-v-a7a0463b>${ssrInterpolate(unref(t)("about_home.context_text"))}</p><div class="about__image magnetic" data-scroll data-scroll-speed="-1.2" data-v-a7a0463b><div class="spinner magnetic" data-strength="70" data-v-a7a0463b></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutHome.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const AboutHome = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a7a0463b"]]);
const _sfc_main$2 = {
  __name: "LatestWork",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const isClient = ref(false);
    useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_lazy = resolveDirective("lazy");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(MouseCursor, {
        projects: unref(works).slice(0, 4)
      }, null, _parent));
      _push(`<section class="latest-work" data-scroll-section><div class="latest-work__container"><h3 class="latest-work__title">${ssrInterpolate(unref(t)("latest_work.title"))}</h3><ul class="latest-work__wrapper work-wrapper"><!--[-->`);
      ssrRenderList(unref(works).slice(0, 4), (project) => {
        _push(`<li class="latest-work__item item-latest-work visible"><div class="latest-work__diwider"></div>`);
        _push(ssrRenderComponent(unref(__nuxt_component_0), {
          to: `/work/${project.slug}`,
          class: "item-latest-work__body"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="item-latest-work__title"${_scopeId}><div class="item-latest-work__title--item"${_scopeId}>${ssrInterpolate(project.title)}</div></div><div class="item-latest-work__body-image"${_scopeId}>`);
              if (isClient.value) {
                _push2(`<div${ssrRenderAttrs(mergeProps({ class: "item-latest-work__images" }, ssrGetDirectiveProps(_ctx, _directive_lazy)))}${_scopeId}><img${ssrRenderAttr("data-src", project.image)}${ssrRenderAttr("alt", project.title)} class="item-latest-work__image ibg"${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="item-latest-work__descr"${_scopeId}>${ssrInterpolate(project.service)}</div>`);
            } else {
              return [
                createVNode("div", { class: "item-latest-work__title" }, [
                  createVNode("div", { class: "item-latest-work__title--item" }, toDisplayString(project.title), 1)
                ]),
                createVNode("div", { class: "item-latest-work__body-image" }, [
                  isClient.value ? withDirectives((openBlock(), createBlock("div", {
                    key: 0,
                    class: "item-latest-work__images"
                  }, [
                    createVNode("img", {
                      "data-src": project.image,
                      alt: project.title,
                      class: "item-latest-work__image ibg"
                    }, null, 8, ["data-src", "alt"])
                  ])), [
                    [_directive_lazy]
                  ]) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "item-latest-work__descr" }, toDisplayString(project.service), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--><div class="latest-work__diwider"></div></ul><ul class="latest-work__wrapper--tiles"><!--[-->`);
      ssrRenderList(unref(works).slice(0, 2), (project) => {
        _push(`<li class="latest-work__item item-latest-work visible">`);
        _push(ssrRenderComponent(unref(__nuxt_component_0), {
          to: `/work/${project.slug}`,
          class: "item-latest-work__body single-tile-wrap"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (isClient.value) {
                _push2(`<div${ssrRenderAttrs(mergeProps({ class: "item-latest-work__images" }, ssrGetDirectiveProps(_ctx, _directive_lazy)))}${_scopeId}><div class="${ssrRenderClass([project.color, "item-latest-work__color"])}"${_scopeId}></div><img${ssrRenderAttr("data-src", project.image)}${ssrRenderAttr("alt", project.title)} class="tile-image item-latest-work__image ibg"${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="item-latest-work__title"${_scopeId}><div class="item-latest-work__title--item"${_scopeId}>${ssrInterpolate(project.title)}</div></div><div class="latest-work__diwider"${_scopeId}></div><div class="item-latest-work__descr"${_scopeId}>${ssrInterpolate(project.service)}</div>`);
            } else {
              return [
                isClient.value ? withDirectives((openBlock(), createBlock("div", {
                  key: 0,
                  class: "item-latest-work__images"
                }, [
                  createVNode("div", {
                    class: ["item-latest-work__color", project.color]
                  }, null, 2),
                  createVNode("img", {
                    "data-src": project.image,
                    alt: project.title,
                    class: "tile-image item-latest-work__image ibg"
                  }, null, 8, ["data-src", "alt"])
                ])), [
                  [_directive_lazy]
                ]) : createCommentVNode("", true),
                createVNode("div", { class: "item-latest-work__title" }, [
                  createVNode("div", { class: "item-latest-work__title--item" }, toDisplayString(project.title), 1)
                ]),
                createVNode("div", { class: "latest-work__diwider" }),
                createVNode("div", { class: "item-latest-work__descr" }, toDisplayString(project.service), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></section><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LatestWork.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "AllWorksButton",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "all-works",
        "data-scroll-section": ""
      }, _attrs))}><div class="all-works__container">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/work",
        class: "all-works__btn btn magnetic",
        "data-btn-hover": "",
        "data-strength": "70",
        "data-strength-text": "40"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="btn__bg"${_scopeId}></div><div class="btn__circle-wrap"${_scopeId}><div class="btn__circle"${_scopeId}><div class="before__100"${_scopeId}></div></div></div><span class="btn__text"${_scopeId}><p class="btn-text-p change"${_scopeId}>${ssrInterpolate(unref(t)("latest_work.all_works"))}</p></span><div class="btn__border"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "btn__bg" }),
              createVNode("div", { class: "btn__circle-wrap" }, [
                createVNode("div", { class: "btn__circle" }, [
                  createVNode("div", { class: "before__100" })
                ])
              ]),
              createVNode("span", { class: "btn__text" }, [
                createVNode("p", { class: "btn-text-p change" }, toDisplayString(unref(t)("latest_work.all_works")), 1)
              ]),
              createVNode("div", { class: "btn__border" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="line"></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllWorksButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    useHead(() => ({
      title: t("meta.home.title")
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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a0236b8e>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(MarqueeHome, null, null, _parent));
      _push(ssrRenderComponent(AboutHome, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a0236b8e"]]);
export {
  index as default
};
//# sourceMappingURL=index.B69vzYD_.js.map
