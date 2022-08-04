<template>
  <div class="login flex items-center" @click="handleLogin">
    <a-avatar>
      <IconUser />
    </a-avatar>
    <div class="ml-5">未登录 <icon-caret-right /></div>
    <!-- 弹框 -->
    <login-dialog ref="loginRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IconUser } from "@arco-design/web-vue/es/icon";
// 登录弹框
import loginDialog from "@/components/loginDialog/index.vue";
const loginRef = ref();
// 点击登录
function handleLogin() {
  loginRef.value.showVisible();
  // console.log(, "kkkk");
}
</script>

<style lang="less" scoped>
.login {
  cursor: pointer;
}
</style>
