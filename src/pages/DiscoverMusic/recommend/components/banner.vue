<template>
  <div class="banner">
    <a-carousel
      autoPlay
      animation-name="card"
      indicator-position="outer"
      :style="{
        width: '100%',
        height: '300px',
      }"
    >
      <a-carousel-item v-for="item in images" :style="{ width: '810px' }">
        <div class="card-content rounded-xl overflow-hidden relative">
          <img
            :src="item.imageUrl"
            class=""
            :style="{
              width: '100%',
              height: '100%',
            }"
          />

          <div
            class="type absolute right-0 bottom-0 px-6 text-xs py-1 rounded-tl-xl text-white"
            :style="{ backgroundColor: 'var(--music-theme)' }"
          >
            {{ item.typeTitle }}
          </div>
        </div>
      </a-carousel-item>
    </a-carousel>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useBannerHook } from "../hooks/useBannerHook";
let { images, getBanners } = useBannerHook();

onMounted(async () => {
  getBanners();
});
</script>

<style lang="less" scoped>
img {
  object-fit: contain;
}
.banner {
  :deep(.arco-carousel-arrow-left) {
    left: 200px;
  }
  :deep(.arco-carousel-arrow-right) {
    right: 200px;
  }
}
</style>
