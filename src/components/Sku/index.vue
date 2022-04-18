<template>
  <van-popup position="bottom" round closeable :style="{ height: '90%' }" class="p-3">
    <div class="goods-box flex items-center border-b pb-3">
      <img :src="mainImg" alt="" class="w-24 h-24 mr-5" />

      <div class="goods-price">
        <div class="price">
          <span class="font-bold text-2xl">¥{{ goods.price }}</span>
          <span class="ml-3 line-through">¥{{ goods.priceOrigin }}</span>
        </div>

        <div class="stock text-sm text-gray-400 my-2">库存{{ goods.stock }}</div>

        <div class="sku-name text-sm">请选择规格</div>
      </div>
    </div>

    <div class="sku-list mt-4 overflow-scroll" :style="{ height: '58%' }">
      <div
        class="sku-item mb-3"
        v-for="(item, index) in skuInfo.propertyGroupList"
        :key="item.propertyGroupId"
      >
        <div class="sku-item-title font-bold">
          {{ item.propertyName }} ( {{ item.children.length }} )
        </div>

        <div class="sku-property flex items-center flex-wrap">
          <div
            v-for="(child, childIndex) in item.children"
            class="relative m-1 rounded-md overflow-hidden border"
            :class="{ 'border-theme-color': child.checked, 'text-theme-color': child.checked }"
            :key="child.propertyId"
            @click="
              selectProperty({
                child,
                childIndex,
                item,
                index,
              })
            "
          >
            <div
              v-if="child.stock === 0"
              class="disabled absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gray-700 bg-opacity-30"
            ></div>

            <!-- 图片规格 -->
            <div v-if="child.previewImgType === 2" class="img-props bg-gray-200 text-center">
              <img v-lazy="child.propertyImgUrl" alt="" class="w-28 h-28" />
              <div class="py-2 text-xs"> {{ child.propertyValue }} </div>
            </div>

            <!-- 文字规格 -->
            <div v-else class="text-props text-sm bg-gray-200 text-center p-1">
              {{ child.propertyValue }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 已选规格 -->
    <div class="selected-sku" v-if="skuInfo.propertyGroupList.length">
      <div class="selected-sku-title font-bold mt-4 mb-2"
        >已选规格( {{ selectedPropertyGroup.length }} / {{ skuLimit }} )</div
      >
      <div class="selected-sku-list flex items-center flex-wrap">
        <div
          class="selected-sku-item relative m-2"
          v-for="(selectPro, selectIndex) in selectedPropertyGroup"
          :key="selectIndex"
        >
          <div class="text-xs py-1 px-5 border rounded-md border-theme-color text-theme-color">
            {{ selectText(selectPro) }}
          </div>
          <van-icon
            name="clear"
            class="text-theme-color absolute -right-1 -top-1"
            @click="deletePropertyGroup(selectIndex)"
          />
        </div>
      </div>
    </div>

    <!-- 数量 -->
    <div class="goods-num flex items-center justify-between">
      <div class="goods-num-title font-bold">数量</div>
      <van-stepper v-model="goodsNum" theme="round" button-size="22" :min="1" />
    </div>

    <van-action-bar>
      <van-action-bar-button type="danger" text="立即购买" @click="handleBuy" />
    </van-action-bar>
  </van-popup>
</template>
<script setup name="Sku" lang="ts">
  import { ref, computed } from 'vue'
  import { Toast } from 'vant/es'

  import {
    SkuInfo,
    _PropertyGroupList,
    _PropertyGroup,
  } from '@/pages/goods/interface/sku.interface'
  import { SelectValue } from './interface/index.interface'
  import { SkuList } from '@/pages/goods/interface/result.interface'

  interface Props {
    skuInfo: SkuInfo
  }

  interface Emits {
    (e: 'buyClick', goodsNum: number | string, selectedProperty: _PropertyGroup[][]): void
  }

  const { skuInfo } = defineProps<Props>()

  const emits = defineEmits<Emits>()

  const mainImg = computed<any>({
    get() {
      return skuInfo?.mediaUrl
    },
    set(value: string) {
      return value
    },
  })

  const goods = computed(() => skuInfo?.goods || {})
  const skuLimit = computed(() => goods.value.skuLimit || 1)

  // 已选规格展示
  const selectText = computed(() => {
    return function (selectPro: _PropertyGroup[]) {
      return selectPro.map((item) => item.propertyValue).join('/')
    }
  })

  const goodsNum = ref<number | string>(1)

  // 已选sku
  let selectedProperty: _PropertyGroup[] = reactive([])
  // 选择的 sku组
  const selectedPropertyGroup: _PropertyGroup[][] = reactive([])

  //清空所有选择
  function clear(item: _PropertyGroupList) {
    item.children.forEach((child) => {
      child.checked = false
    })
  }

  // 判断 一组是否选择完成
  function isFinish() {
    return skuInfo?.propertyGroupList?.length === selectedProperty.filter((item) => item).length
  }

  // 选择完成一组
  function selectOver() {
    skuInfo.propertyGroupList.forEach((item) => {
      clear(item)
    })
    selectedPropertyGroup.push(selectedProperty)
    selectedProperty = []
  }

  // 展示已选规格

  // 设置库存
  function setStock(skuId: number) {
    const select = skuInfo.skuList.find((item) => item.skuId === skuId) as SkuList

    skuInfo.propertyGroupList.forEach((item) => {
      item.children.forEach((child) => {
        child.stock = select.stock
      })
    })
  }

  // 选择sku
  function selectProperty({ child, item, index }: SelectValue) {
    const { skuId, stock } = child
    // 判断是否可以选择
    if (selectedPropertyGroup.length === skuLimit.value) {
      Toast(`该商品为${skuLimit.value}个一组`)
      return
    }

    if (stock == 0) {
      Toast('库存不足')

      return
    }

    // 筛选库存 图片信息
    setStock(skuId)

    clear(item)
    child.checked = true

    selectedProperty[index] = child

    // 判断 一组 是否 选择完
    if (isFinish()) {
      selectOver()
    }
  }

  // 删除已选数组
  function deletePropertyGroup(index: number) {
    selectedPropertyGroup.splice(index, 1)
  }

  // 点击立即购买
  function handleBuy() {
    emits('buyClick', goodsNum.value, selectedPropertyGroup)
  }
</script>

<style lang="less" scoped></style>
