import { h, defineComponent, resolveDynamicComponent } from "vue";

// 封装i-icon组件，默认`font-class`引用模式，支持`unicode`引用、`font-class`引用、`symbol`引用 （https://www.i-icon.cn/help/detail?spm=a313x.7781069.1998910419.20&helptype=code）
export default defineComponent({
  name: "fontIcon",
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
  render() {
    const component = resolveDynamicComponent("Star");

    // return h(component);
  },
});
