<template>
  <div class="goods-info rounded-t-2xl bg-white dark:bg-theme-dark-box px-3 py-4 -mt-3">
    <div class="title dark:text-white text-lg"> {{ goods.goodsTitle }} </div>
    <div class="text-xs text-gray-400 mt-2">
      {{ goods.sellingPoints }}
    </div>
    <div class="flex items-center justify-between mt-2">
      <div class="text-xs text-red-500"> 热卖中 </div>
      <div class="text-xs dark:text-white"> 已售{{ goods.salesNum }} </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { inject, computed } from 'vue'

  const goods = computed(() => inject<any>('result').value.goods || {})
</script>

<style lang="less" scoped></style>
