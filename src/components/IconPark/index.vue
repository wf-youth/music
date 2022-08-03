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
} from "@icon-park/vue-next";

interface Props {
  name: any;
}

const icons: any = {
  Github,
  Star,
  Broadcast,
  PlayTwo,
  Peoples,
  Download,
  Time,
};

function Icon(props: Props) {
  const Component: any = resolveDynamicComponent(icons[props.name]);
  return h(Component);
}
export default Icon;
</script>
