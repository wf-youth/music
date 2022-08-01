<template>
  <div class="iconfont">
    <icon-font :type="type" :size="size" />
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@arco-design/web-vue";

const IconFont = Icon.addFromIconFontCn({
  src: "http://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

interface Props {
  type: string;
  size?: number;
}

const { type, size = 22 } = defineProps<Props>();
</script>

<style lang="less" scoped></style>
