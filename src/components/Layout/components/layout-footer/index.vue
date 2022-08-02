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
        <div class="pl-2 flex flex-col justify-between">
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
      <div>播放操作</div>
      <div>声音操作</div>
    </div>
    <!-- 哎嘿嘿 这是底部 -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style lang="less" scoped></style>
