<template>
  <div class="recommend-playlist mt-12">
    <div class="title font-bold text-xl">推荐歌单 <icon-right /></div>

    <div class="play-list flex flex-wrap">
      <div class="play-item mt-6" v-for="item in playList" :key="item.id">
        <img class="play-img rounded-lg mb-2 mr-6" :src="item.picUrl" alt="" />
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { usePersonalizedHook } from "../hooks/usePersonalizedHook";
const { getPlayList, playList } = usePersonalizedHook();
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
