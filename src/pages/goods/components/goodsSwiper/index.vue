<template>
  <div class="goods-swiper relative">
    <van-swipe
      class="my-swipe"
      lazy-render
      :autoplay="9999999"
      indicator-color="#000"
      @change="handleChange"
    >
      <van-swipe-item v-for="item in agentMediaList" :key="item.agentMediaId">
        <div class="video-box" v-if="item.mediaEventType === 2">
          <video
            playsinline
            x5-playsinline
            webkit-playsinline
            autoplay
            muted
            width="100%"
            height="100%"
            :src="item.mediaUrl"
            :ref="handleVideoRef"
            style="object-fit: cover"
            :poster="poster(item.mediaUrl)"
            @ended="handleEnd"
          ></video>
        </div>

        <img v-lazy="item.mediaUrl" class="swiper-img" v-else />
      </van-swipe-item>
    </van-swipe>

    <div v-if="mediaEventType === 2">
      <div class="absolute bottom-5 right-5">
        <!-- 静音按钮 -->
        <span
          v-if="muted"
          @click.stop="handleVolume"
          class="iconfont icon-app-jingyin text-2xl text-white"
        ></span>
        <!-- 声音按钮 -->
        <span
          v-else
          @click.stop="handleVolume"
          class="iconfont icon-app-shengyin_shiti text-2xl text-white"
        ></span>
      </div>

      <!-- 播放按钮 -->
      <span
        v-if="play"
        @click="handlePlay"
        class="text-3xl iconfont icon-app-bofang absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { inject, computed } from 'vue'
  import { useVideoPoster } from '@/hooks/video'

  // 获取轮播图数据
  const agentMediaList = computed(() => inject<any>('result').value.agentMediaList || [])

  // 视频封面图
  const poster = computed(() => {
    return function (url: string) {
      return useVideoPoster(url)
    }
  })

  // 静音
  const muted = ref(true)
  // 播放
  const play = ref(false)
  const videoRef = ref<any>(null)

  function handleVideoRef(e: any): void {
    videoRef.value = e
  }

  // 静音
  function handleVolume(): void {
    if (videoRef) {
      muted.value = !muted.value
      videoRef.value.muted = muted.value
    }
  }
  // 播放
  function handlePlay() {
    if (videoRef) {
      play.value = !play.value
      videoRef.value.play()
    }
  }

  // 结束
  function handleEnd() {
    play.value = true
  }

  // 轮播图的索引
  const active = ref(0)
  function handleChange(index: number) {
    active.value = index
  }

  type Meida = {
    mediaEventType: number
  }
  const mediaEventType = computed<number>(() => {
    const media: Meida = agentMediaList.value[active.value] || {}
    return media.mediaEventType
  })
</script>

<style lang="less" scoped>
  .swiper-img,
  video {
    width: 100%;
    height: 100vw;
  }
</style>
