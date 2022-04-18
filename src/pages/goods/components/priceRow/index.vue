<template>
  <div
    class="price-row flex items-center justify-between bg-white rounded-t-2xl px-3 py-4 pb-5 bg-cover"
  >
    <div class="price text-white">
      <span class="text-3xl font-bold"> ¥{{ goods.price }}</span>
      <span class="ml-1 line-through text-gray-400"> ¥{{ goods.priceOrigin }} </span>
    </div>

    <div class="text-gold"> 热物自营 </div>
  </div>
</template>

<script setup lang="ts">
  import { inject, computed } from 'vue'

  const goods = computed(() => inject<any>('result').value.goods || {})
</script>

<style lang="less" scoped>
  .price-row {
    background-image: url('@/assets/images/price-bg.png');
  }
</style>
