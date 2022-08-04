<template>
  <div class="header px-3 py-3 flex items-center justify-between">
    <div class="logo-box flex items-center justify-between">
      <logo />
      <back-button class="mr-3" />
    </div>

    <div class="tabs-box">
      <header-tabs />
    </div>

    <div class="search-box flex items-center">
      <search />
      <tools />
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from "./Logo.vue";
import BackButton from "./BackButton.vue";
import search from "./search.vue";
import tools from "./tools.vue";
import HeaderTabs from "./HeaderTabs.vue";
</script>

<style lang="less" scoped>
.tabs-box {
  flex: 1;
}
.header {
  background-color: @arcoblue-6;
  color: @music-text;

  .logo-box {
    width: @menu-width;
  }
}
</style>
