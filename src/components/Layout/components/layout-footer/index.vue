<template>
  <div class="footer-main p-3">
    <!-- 进度条展示 -->
    <div>
      <a-progress
        :percent="0.2"
        :show-text="false"
        style="color: var(--music-theme)"
      />
    </div>
    <div class="flex justify-between items-center">
      <div>图片</div>
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
