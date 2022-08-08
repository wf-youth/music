<template>
  <div class="login-dialog">
    <a-modal
      v-model:visible="visible"
      :footer="false"
      simple
      title-align="start"
      :width="400"
    >
      <template #title>
        <icon-close
          class="login-close absolute top-3 left-3"
          @click="handleClose"
        />
      </template>
      <div style="height: 480px">
        <code-login ref="codeRef" v-if="loginCode" @change="changeOther" />
        <!-- 二维码 -->

        <!-- 账号密码 -->
        <div v-else>
          这是账号密码登录
          <!-- logo部分 -->

          <!-- 账号密码部分 -->
          <!-- 自动登录 -->
          <!-- 登录按钮 -->
          <!-- 注册 -->
          <!-- 其他登录方式 -->
          <!-- 各个同意服务条款 -->
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";

// 弹窗打开关闭
let visible = $ref(false);
// 判断是否是二维码登录还是账号密码登录
let loginCode = $ref(true);
// 二维码弹窗
const codeRef = ref<any>(null);

// 点击关闭弹窗
function handleClose() {
  visible = false;
}

// 点击打开弹框
function showVisible() {
  // 打开弹框
  visible = true;
  loginCode = true;

  nextTick(() => {
    codeRef.value && codeRef.value.handleRefresh();
  });
}

// 改变登录方式
function changeOther() {
  loginCode = !loginCode;
}

defineExpose({
  showVisible,
});
</script>

<style lang="less" scoped></style>
