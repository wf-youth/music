<template>
  <van-config-provider :theme-vars="themeVars">
    <van-search
      v-model="searchValue"
      show-action
      clearable
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <span
          class="iconfont icon-app-fanggepailie text-2xl"
          v-if="direction === 'row'"
          @click="direction = 'col'"
        ></span>
        <span
          class="iconfont icon-app-liebiaoshipailie text-2xl"
          v-else
          @click="direction = 'row'"
        ></span>
      </template>

      <template #left>
        <van-icon name="arrow-left" class="text-2xl mr-3" />
      </template>
    </van-search>
  </van-config-provider>
  <div class="height">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div :class="goodsClass" class="pl-2">
        <goods-list
          :direction="direction"
          v-for="item in goodsList"
          :key="item.goodsId"
          :goods="item"
          @click="goGoods"
        />
      </div>
    </van-list>
  </div>
</template>

<script setup name="MainIndex" lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { collect_goods_list } from '@/api/goods'
  import { GoodsListDetail } from '@/components/GoodsList/interface/goodsList.interface'
  import { useRouter } from 'vue-router'
  import GoodsList from '@/components/GoodsList/index.vue'

  const router = useRouter()

  // 商品列表
  let goodsList = ref<GoodsListDetail[]>([])
  // 是否是加载中
  const loading = ref<boolean>(false)
  // 是否是加载结束
  const finished = ref<boolean>(false)
  // size
  const current = ref<number>(1)

  // 获取接口
  async function goods_list_request() {
    const {
      data: { records },
    } = await collect_goods_list(5, { current: current.value, size: 20, sortType: 6 })

    goodsList.value = [...goodsList.value, ...records]
    loading.value = false

    if (records.length < 20) {
      finished.value = true
    }
  }

  function onLoad() {
    current.value++
    goods_list_request()
  }

  onMounted(async () => {
    goods_list_request()
  })

  const searchValue = ref<string>('')
  //   商品列表是否是横向排列
  const direction = ref<'col' | 'row'>('row')

  function onSearch(value: string) {}

  const goodsClass = computed(() => {
    if (direction.value === 'col') {
      return ['flex', 'flex-wrap', 'items-center']
    }
  })

  function goGoods({ goodsId }: GoodsListDetail) {
    router.push({
      path: '/goods',
      query: {
        goodsId,
      },
    })
  }

  const themeVars = {
    VanSearchBackgroundColor: '#000',
    VanSearchContentBackgroundColor: '#000',
  }
</script>

<style lang="less" scoped>
  .height {
    height: 92vh;
    overflow: scroll;
  }
</style>
