<template>
  <div class="recommend-playlist mt-12">
    <div class="title font-bold text-xl">推荐歌单 <icon-right /></div>

    <div class="play-list flex flex-wrap">
      <div
        class="play-item mt-6 p-3 relative"
        v-for="item in playList"
        :key="item.id"
      >
        <img class="play-img rounded-lg mb-2 mr-6" :src="item.picUrl" alt="" />
        <div>{{ item.name }}</div>

        <!-- 播放数量 -->
        <div
          class="play-num absolute right-4 top-4 px-2 py-1 text-xs rounded-xl bg-opacity-30"
          :style="{ backgroundColor: 'var(--color-bg-opacity)' }"
        >
          <icon-play-arrow />
          {{ num(item.playCount) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { usePersonalizedHook } from "../hooks/usePersonalizedHook";
import { transformNum } from "@/utils/transformNum";
const { getPlayList, playList } = usePersonalizedHook();

const num = computed(() => {
  return function (num: number) {
    return transformNum(num);
  };
});

onMounted(() => {
  getPlayList();
});
</script>

<style lang="less" scoped>
.play-item {
  width: 12.5%;

  .play-img {
    width: 100%;
  }
}
</style>
