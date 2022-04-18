<template>
  <div class="goods bg-gray-50 dark:bg-theme-dark h-screen overflow-y-scroll">
    <nav-bar
      :border="false"
      ref="navBarRef"
      class="absolute top-0 w-screen"
      @click-left="handleBack"
    />

    <!-- 轮播图 -->
    <goods-swiper />

    <!-- 内容区域 -->
    <main class="mx-2 mt-4 mb-16">
      <!-- 价格 -->
      <price-row />

      <!-- 商品信息 -->
      <goods-title />

      <!-- 一些工具 -->
      <goods-tools />

      <div class="dark:text-white my-4"> 商品介绍</div>
      <rich-text v-if="goods" :text="goods.introduction || ''" />
    </main>

    <van-action-bar class="dark:bg-theme-dark-box">
      <van-action-bar-button color="#ddaa71" text="分享商品" />
      <van-action-bar-button text="立即购买" type="danger" @click="handleBuy" />
    </van-action-bar>

    <sku v-model:show="show" :skuInfo="skuInfo" @buy-click="handleBuyClick" />
  </div>
</template>

<script setup name="Goods" lang="ts">
  import { ref, onMounted, provide, computed, Ref, reactive } from 'vue'
  import { fetch_goods } from '@/api/goods'
  import { GoodsSwiper, PriceRow, GoodsTitle, GoodsTools } from './components'
  import RichText from '@/components/RichText/index.vue'
  import Sku from '@/components/Sku/index.vue'
  import { Result } from './interface/result.interface'
  import { SkuInfo, _PropertyGroup } from './interface/sku.interface'
  import { handleProperty, handleSkuIdGroup } from './utils/property'
  import { Goods } from '@/interface/goods.interface'
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  const route = useRoute()

  // 返回
  function handleBack() {
    router.go(-1)
  }

  const result = ref<Result>({})
  const skuInfo = reactive<SkuInfo>({
    propertyGroupList: [],
    mediaUrl: '',
    goods: {},
    skuList: [],
  })

  // 获取商品信息
  onMounted(async () => {
    const { goodsId } = route.query

    const { data } = await fetch_goods(goodsId as unknown as number)

    skuInfo.propertyGroupList = handleProperty(data.propertyGroupList)
    skuInfo.skuIdGroup = handleSkuIdGroup(data.propertyGroupList)

    skuInfo.mediaUrl = data.goods?.agentMedia.mediaUrl
    skuInfo.goods = data.goods
    skuInfo.skuList = data.skuList

    result.value = data
  })

  const goods = computed(() => result.value.goods) as Ref<Goods>

  provide('result', result)

  // 是否显示sku弹窗
  const show = ref<boolean>(false)

  function handleBuy() {
    show.value = true
  }

  interface Skus {
    id: number | string
  }

  //  点击 sku里面的立即购买
  function handleBuyClick(goodsNum: number | string, selectedProperty: _PropertyGroup[][]) {
    const selectIds = selectedProperty.map((item) => {
      return item.map((child) => child.propertyValueId).join(',')
    })

    const skus: Skus[] = skuInfo.skuIdGroup
      ?.filter((item) => selectIds.includes(item.ids))
      .map((item) => ({
        id: item.skuId,
      })) as Skus[]

    router.push({
      path: 'account',
      query: { goodsId: goods.value.goodsId, skus: JSON.stringify(skus), goodsNum },
    })
  }
</script>

<style lang="less" scoped></style>
