<template>
  <div class="layout">
    <layout-header></layout-header>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { LayoutHeader } from "./components/index";
import { ref } from "vue";
</script>

<style lang="less" scoped></style>
