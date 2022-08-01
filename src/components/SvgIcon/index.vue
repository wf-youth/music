<template>
  <svg aria-hidden="true" class="svg-icon-spin" :class="calsses">
    <use :xlink:href="symbolId" fill="#ffffff" />
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  prefix: {
    type: String,
    default: "icon",
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#ffffff",
  },
  size: {
    type: String,
    default: "default",
  },
});
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
const calsses = computed(() => {
  return {
    [`sdms-size-${props.size}`]: props.size,
  };
});
const fontSize = reactive({
  default: "54px",
  small: "22px",
  large: "48px",
  xl: "54px",
});
</script>
<style lang="less" scoped>
.svg-icon-spin {
  width: v-bind("fontSize.default");
  height: v-bind("fontSize.default");
  fill: #ffffff;
  vertical-align: middle;
  color: #ffffff;
  &.sdms-size-small {
    font-size: v-bind("fontSize.small");
    height: v-bind("fontSize.small");
  }
  &.sdms-size-large {
    font-size: v-bind("fontSize.large");
    height: v-bind("fontSize.large");
  }
  &.sdms-size-xl {
    font-size: v-bind("fontSize.xl");
    height: v-bind("fontSize.xl");
  }
}
</style>
