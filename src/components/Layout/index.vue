<template>
  <div class="layout">
    <a-layout style="height: 100vh">
      <a-layout-header> <layout-header></layout-header></a-layout-header>
      <a-layout>
        <a-layout-sider
          theme="light"
          :style="{ '--color-menu-light-bg': '#ededed' }"
        >
          Sider
        </a-layout-sider>
        <a-layout-content> <slot></slot></a-layout-content>
      </a-layout>
      <a-layout-footer>
        <layout-footer />
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { LayoutHeader } from "./components/index";
import { ref } from "vue";
// 底部组件引入
import layoutFooter from "./components/layout-footer/index.vue";
</script>

<style lang="less" scoped></style>
