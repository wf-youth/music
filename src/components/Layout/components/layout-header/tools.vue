<template>
  <div class="tools ml-8">
    <a-space size="medium" class="flex items-center">
      <icon-sun-fill :style="{ fontSize: '20px' }" />
      <icon-settings :style="{ fontSize: '20px' }" />
      <icon-skin :style="{ fontSize: '20px' }" />
      <icon-email :style="{ fontSize: '20px' }" />
      <icon-copy :style="{ fontSize: '20px' }" />
    </a-space>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style lang="less" scoped></style>
