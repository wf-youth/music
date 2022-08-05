<template>
  <div class="banner">
    <a-carousel
      :autoPlay="true"
      animation-name="card"
      indicator-position="outer"
      :style="{
        width: '100%',
        height: '300px',
      }"
    >
      <a-carousel-item v-for="image in images" :style="{ width: '60%' }">
        <img
          :src="image.imageUrl"
          :style="{
            width: '100%',
            height: '100%',
          }"
        />
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
</style>
