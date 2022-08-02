<template>
  <div class="layout">
    <a-layout style="height: 100vh">
      <a-layout-header> <layout-header></layout-header></a-layout-header>
      <a-layout>
        <a-layout-sider :style="{ '--color-menu-light-bg': '#ededed' }">
          Sider
        </a-layout-sider>
        <a-layout-content> <slot></slot></a-layout-content>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { LayoutHeader } from "./components/index";
import { ref } from "vue";
</script>

<style lang="less" scoped></style>
