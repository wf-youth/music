<template>
  <div class="recommend-playlist mt-12">
    <div class="title font-bold text-xl">推荐歌单 <icon-right /></div>

    <div class="play-list flex flex-wrap">
      <div class="play-item mt-6">
        <img
          class="play-img rounded-lg mb-2 mr-6"
          src="http://p1.music.126.net/PzgUTHoKuWyqjuzDAC6S5w==/109951166299954997.jpg?param=140y140"
          alt=""
        />
        <div>国语珍藏 | 给你一张过去的CD</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { usePersonalizedHook } from "../hooks/usePersonalizedHook";
const { getPlayList } = usePersonalizedHook();
onMounted(() => {
  getPlayList();
});
</script>

<style lang="less" scoped>
.play-item {
  width: 140px;

  .play-img {
    width: 140px;
    height: 140px;
  }
}
</style>
