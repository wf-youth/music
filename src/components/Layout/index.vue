<template>
  <div
    class="layout"
    :style="{
      backgroundColor: 'var(--color-bg-1)',
      color: 'var(--color-text-1)',
    }"
  >
    <a-layout style="height: 100vh">
      <a-layout-header> <layout-header></layout-header></a-layout-header>
      <a-layout>
        <a-layout-sider
          :style="{
            backgroundColor: 'var(--color-bg)',
          }"
        >
          <layout-sider />
        </a-layout-sider>
        <a-layout-content class="p-5">
          <slot></slot>
        </a-layout-content>
      </a-layout>
      <a-layout-footer>
        <layout-footer />
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { LayoutHeader, LayoutFooter } from "./components/index";
import { ref } from "vue";
// 底部组件引入
</script>

<style lang="less" scoped>
// div {
//   background-color: var(----color-bg-1);
// }
</style>
