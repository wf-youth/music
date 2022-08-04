<template>
  <div class="header-tabs">
    <music-tabs :tabs="tabs" v-model="tabValue" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

let tabValue = $ref(0);
let tabs = $ref<any>([]);
watch(
  () => route.matched,
  (matched) => {
    if (matched.length) {
      const children = matched[0]?.children || [];
      tabs = children.map((item, index) => {
        return {
          key: index,
          value: item?.meta?.title,
          path: item.path,
        };
      });
    }
  }
);
</script>

<style lang="less" scoped></style>
