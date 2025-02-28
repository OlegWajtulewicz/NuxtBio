import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  __name: "USkeleton",
  __ssrInlineRender: true,
  props: {
    ui: {
      type: Object,
      default: () => ({
        rounded: "",
        background: "skeleton--bg",
        animation: "skeleton--pulse"
      })
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["skeleton", [
          __props.ui.rounded,
          __props.ui.background,
          __props.ui.animation
        ]]
      }, _attrs))} data-v-3bf74d91></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/USkeleton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const USkeleton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3bf74d91"]]);
export {
  USkeleton as U
};
//# sourceMappingURL=USkeleton.B53w0lWJ.js.map
