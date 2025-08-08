import { defineComponent, mergeDefaults, computed, createElementBlock, openBlock, normalizeClass, toDisplayString } from "vue";
import { extractI18nValue, getDefaultValues, Dot } from "lkt-vue-kernel";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktDot",
  props: /* @__PURE__ */ mergeDefaults({
    text: {},
    class: {}
  }, getDefaultValues(Dot)),
  setup(__props) {
    const props = __props;
    const computedText = computed(() => {
      return extractI18nValue(props.text);
    }), computedClassName = computed(() => {
      let r = [];
      if (String(computedText.value).length > 0) r.push("is-filled");
      if (props.class) r.push(props.class);
      return r.join(" ");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", {
        class: normalizeClass(["lkt-dot", computedClassName.value])
      }, toDisplayString(computedText.value), 3);
    };
  }
});
const LktDot = {
  install: (app) => {
    if (app.component("lkt-dot") === void 0) app.component("lkt-dot", _sfc_main);
  }
};
export {
  LktDot as default
};
