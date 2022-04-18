<template>
  <div
    @click="handleClick"
    :class="classList.layout"
    class="rounded-md goods-list flex items-center flex-wrap m-2 bg-white dark:bg-theme-dark-box"
  >
    <img :class="classList.img" class="rounded-md" v-lazy="goods.imgUrl" alt="" />

    <div class="goods-info flex-1 mx-3">
      <div class="goods-title van-multi-ellipsis--l2 w-40">{{ goods.goodsTitle }}</div>
      <div class="text-sm text-gray-500 font-bold my-7 van-ellipsis w-40">
        {{ goods.sellingPoints }}</div
      >
      <div class="flex items-center justify-between">
        <div
          class="price text-theme-color text-xl font-bold flex items-center justify-between w-full"
        >
          <div class="left">¥{{ goods.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup name="GoodsList" lang="ts">
  import { watchEffect, reactive } from 'vue'
  import { GoodsListDetail } from './interface/goodsList.interface'
  interface Props {
    direction?: 'row' | 'col'
    goods: GoodsListDetail
  }

  interface Emits {
    (e: 'click', goods: GoodsListDetail): void
  }

  interface ClassList {
    layout: string[]
    img: string[]
  }

  const { direction = 'row', goods } = defineProps<Props>()
  const emits = defineEmits<Emits>()

  const classList: ClassList = reactive({
    layout: [],
    img: [],
  })

  watchEffect(() => {
    if (direction === 'row') {
      classList.layout = []

      classList.img = ['w-40']
    } else {
      classList.layout = ['layoutWidth']
      classList.img = ['w-full']
    }
  })

  function handleClick() {
    emits('click', goods)
  }
</script>

<style lang="less" scoped>
  .layoutWidth {
    width: 45%;
  }
</style>
