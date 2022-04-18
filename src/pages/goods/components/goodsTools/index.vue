<template>
  <div class="goods-tools">
    <van-cell
      v-for="item in cellList"
      :key="item.id"
      clickable
      class="dark:bg-theme-dark-box dark:text-white"
    >
      <template #title>
        <div class="flex items-center text-xs">
          <div class="flex-shrink-0">{{ item.title }}</div>
          <div class="text-gray-400 ml-5" v-html="item.value"></div>
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script setup lang="ts">
  import { computed, inject, ref } from 'vue'
  import { Result } from '@/pages/goods/interface/result.interface'

  const result: any = inject<Result>('result')

  type Insurance = {
    insuranceRulesName: string
  }
  const insurance = computed(() => {
    if (!result.value?.goodsInsuranceList) return
    return result.value?.goodsInsuranceList
      .map((item: Insurance) => item.insuranceRulesName)
      .join('·')
  })

  type Cell = {
    id: number
    title: string
    value: string
  }

  const cellList = computed<Cell[]>(() => [
    {
      id: 1,
      title: '发货',
      value: result.value.goods?.deliveryRemark,
    },
    {
      id: 2,
      title: '禁售',
      value: result.value?.goodsBanSellListName,
    },
    {
      id: 3,
      title: '邮费',
      value: result.value.fare?.fareName,
    },
    {
      id: 4,
      title: '保障',
      value: insurance.value,
    },
  ])
</script>

<style lang="less" scoped></style>
