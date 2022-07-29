<template>
  <div class="header px-3 py-3">
    <logo />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import logo from "./Logo.vue";
</script>

<style lang="less" scoped>
.header {
  background-color: @music-theme;
  color: @music-text;
}
</style>
