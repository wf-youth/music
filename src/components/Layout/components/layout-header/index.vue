<template>
  <div class="header px-3 py-3 flex items-center justify-between">
    <div class="logo-box flex items-center justify-between">
      <logo />
      <back-button class="mr-3" />
    </div>
    <div class="search-box">
      <search />
      <tools />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import logo from "./Logo.vue";
import BackButton from "./BackButton.vue";
import search from "./search.vue";
import tools from "./tools.vue";
</script>

<style lang="less" scoped>
.header {
  background-color: @arcoblue-6;
  color: @music-text;

  .logo-box {
    width: @menu-width;
  }
}
</style>
