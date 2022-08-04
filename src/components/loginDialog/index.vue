<template>
  <div class="login-dialog">
    <a-modal
      v-model:visible="visible"
      :footer="false"
      simple
      title-align="start"
      :width="300"
    >
      <template #title>
        <icon-close
          class="login-close absolute top-3 left-3"
          @click="handleClose"
        />
      </template>
      <div style="text-align: center">
        <div class="text-xl mb-5">扫码登录</div>
        <img
          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
          alt=""
          height="150"
          width="150"
          style="margin: 0 auto"
        />
        <div class="mt-3 mb-16 text-sm">
          使用<a
            style="color: rgb(51, 113, 188)"
            class=""
            :href="'https://music.163.com/#/download'"
            >网易云APP</a
          >扫码登录
        </div>
        <div class="text-xs" style="color: rgb(143, 143, 143)">
          选择其他登录方式<icon-right />
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// 弹窗打开关闭
let visible = $ref(false);
// 点击关闭弹窗
function handleClose() {
  visible = false;
}
// 点击打开弹框
function showVisible() {
  visible = true;
}
defineExpose({
  showVisible,
});
</script>

<style lang="less" scoped></style>
