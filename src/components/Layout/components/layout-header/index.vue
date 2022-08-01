<template>
  <div class="header px-3 py-3 flex items-center">
    <logo />
    <div class="search-box">
      <back-button class="mr-3" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import logo from "./Logo.vue";
import BackButton from "./BackButton.vue";
</script>

<style lang="less" scoped>
.header {
  background-color: @arcoblue-6;
  color: @music-text;
}
</style>
