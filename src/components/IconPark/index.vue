<script lang="ts">
import { h, resolveDynamicComponent } from "vue";
import {
  Github,
  Star,
  Broadcast,
  PlayTwo,
  Peoples,
  Download,
  Time,
  Music,
} from "@icon-park/vue-next";

interface Props {
  name: any;
  size?: number | string;
  fill?: string | Array<string>;
}

const icons: any = {
  Github,
  Star,
  Broadcast,
  PlayTwo,
  Peoples,
  Download,
  Time,
  Music,
};
// <add-music theme="outline" size="24" fill="#333"/>

function Icon(props: Props) {
  const Component: any = resolveDynamicComponent(icons[props.name]);
  return h(Component, {
    ...props,
  });
}
export default Icon;
</script>
