<template>
  <div class="footer-main">
    <!-- 进度条展示 -->
    <div class="flex justify-center items-start">
      <a-progress :percent="0.2" :show-text="false" :stroke-width="2" />
    </div>
    <div class="flex justify-between items-center p-2">
      <div class="music-msg flex justify-between">
        <!-- 图片 -->
        <a-image
          width="50"
          height="50"
          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
        />
        <!-- 名称 -->
        <div class="pl-2 flex flex-col justify-between py-1">
          <!-- 音乐名称 - 歌手名称 -->
          <div>
            <span>有点甜 </span
            ><span class="text-xs" style="color: var(--color-text-2)">
              - 汪苏泷</span
            >
          </div>
          <!-- 时间(已用/共) -->
          <div style="color: var(--color-text-3)" class="text-xs">
            <span> 01:33 / 03:57</span>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center w-44">
        <like
          :theme="isLike ? 'filled' : 'outline'"
          size="22"
          :fill="isLike ? ['#c24437'] : ['#333']"
          :strokeWidth="1"
          @click="handleLike"
        />
        <go-start
          theme="outline"
          size="22"
          :fill="['#c24437', '#c24437', '#FFF', '#fff']"
          :strokeWidth="1"
        />
        <play
          v-if="isPlay"
          theme="multi-color"
          size="33"
          :fill="['#c24437', '#c24437', '#FFF', '#fff']"
          :strokeWidth="1"
          @click="handlePlay"
        />
        <pause-one
          v-else
          theme="multi-color"
          size="33"
          :fill="['#c24437', '#c24437', '#FFF', '#fff']"
          :strokeWidth="1"
          @click="handlePlay"
        />
        <go-end
          theme="outline"
          size="22"
          :fill="['#c24437', '#c24437', '#FFF', '#fff']"
          :strokeWidth="1"
        />
        <delete theme="outline" size="22" fill="#333" :strokeWidth="1" />
      </div>
      <div class="flex justify-between items-center w-20">
        <monitor-two theme="outline" size="17" fill="#333" :strokeWidth="1" />
        <div
          :style="{
            color: is_show_word ? '#c24437' : '#000',
            userSelect: 'none',
          }"
          @click="handleWord"
        >
          词
        </div>
        <volume-notice theme="outline" size="17" fill="#333" :strokeWidth="1" />
      </div>
    </div>
    <!-- 哎嘿嘿 这是底部 -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Like,
  GoEnd,
  GoStart,
  Play,
  PauseOne,
  Delete,
  MonitorTwo,
  VolumeNotice,
} from "@icon-park/vue-next";

// 是否播放
let isPlay = $ref(true);
// 修改播放暂停
function handlePlay() {
  isPlay = !isPlay;
}
// 是否喜欢
let isLike = $ref(false);
// 修改喜欢/不喜欢
function handleLike() {
  isLike = !isLike;
}

// 是否显示词
let is_show_word = $ref(false);
// 点击歌词显示与否
function handleWord() {
  is_show_word = !is_show_word;
}
</script>

<style lang="less" scoped>
.footer-main {
  cursor: pointer;
  // user-select: "none";
}
* {
  user-select: none;
}
</style>
