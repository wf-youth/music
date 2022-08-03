import { h, defineComponent, Component } from "vue";
import IconPark from "./index";

interface iconType {
  // iconify (https://docs.iconify.design/icon-components/vue/#properties)
  inline?: boolean;
  width?: string | number;
  height?: string | number;
  horizontalFlip?: boolean;
  verticalFlip?: boolean;
  flip?: string;
  rotate?: number | string;
  color?: string;
  horizontalAlign?: boolean;
  verticalAlign?: boolean;
  align?: string;
  onLoad?: Function;

  //  all icon
  style?: object;
}

export function useRenderIcon(icon: string, attrs?: iconType): Component {
  const name = icon;
  const iconName = name.slice(
    0,
    name.indexOf(" ") == -1 ? name.length : name.indexOf(" ")
  );
  const iconType = name.slice(name.indexOf(" ") + 1, name.length);
  return defineComponent({
    name: "FontIcon",
    render() {
      return h(IconPark, {
        icon: iconName,
        iconType,
        ...attrs,
      });
    },
  });
}
