<template>
  <div class="search">
    <a-input-search
      :style="{
        width: '220px',
        '--border-radius-small': '15px',
        '--color-fill-2': 'rgba(255,255,255,.7)',
      }"
      placeholder="搜索"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style lang="less" scoped>
.arco-input-focus {
  background-color: var(--color-fill-2);
  border-color: @arcoblue-6;
  box-shadow: 0 0 0 0;

  input::input-placeholder {
    color: #fff;
  }
}
</style>
