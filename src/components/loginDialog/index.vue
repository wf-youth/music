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
        <!-- 二维码 -->
        <div
          style="text-align: center; height: 450px"
          v-if="loginCode"
          class="relative"
        >
          <div class="text-xl mb-5">扫码登录</div>
          <div class="scan-code-box relative">
            <!-- 背景图 -->
            <img
              class="scan absolute right-0"
              src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9643571155/525c/faac/2dc6/fe695c03c7c358ddaa4651736b26a55f.png"
              alt=""
              height="150"
              width="150"
            />
            <!-- 二维码+其他方式登录字体 -->
            <div class="code-box absolute">
              <div class="relative">
                <!-- 二维码 -->
                <a-image
                  class="code"
                  :src="codeImg"
                  alt=""
                  width="100%"
                  style="margin: 0 auto"
                  show-loader
                />
                <!-- 蒙层(失效+刷新) -->
                <div
                  style="
                    width: 100%;
                    height: 100%;
                    opacity: 0.3;
                    background-color: #000;
                  "
                  class="absolute top-0 text-black"
                ></div>

                <div class="code_refresh absolute">
                  <div class="font-black">二维码已失效</div>
                  <a-button type="primary" shape="round">点击刷新</a-button>
                </div>
              </div>
              <!-- 底部 -->
              <div class="mt-3 text-sm">
                使用<a
                  style="color: rgb(51, 113, 188)"
                  class=""
                  :href="'https://music.163.com/#/download'"
                  >网易云APP</a
                >扫码登录
              </div>
            </div>
          </div>
          <div
            class="login-other text-xs absolute bottom-2"
            style="color: var(--color-text-4)"
            @click="handleOther"
          >
            选择其他登录方式<icon-right />
          </div>
        </div>
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
import { ref } from "vue";
import { qr_key, qr_create } from "@/api/login/index";

// 弹窗打开关闭
let visible = $ref(false);
// 点击关闭弹窗
function handleClose() {
  visible = false;
}
// 二维码base码
let codeImg = $ref("");

// 点击打开弹框
async function showVisible() {
  // 打开弹框
  visible = true;
  //   获取key
  codeImg =
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftva1.sinaimg.cn%2Flarge%2F006APoFYly1g8mf9qe5udg30jz0jzjtr.gif&refer=http%3A%2F%2Ftva1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662261012&t=ade1bd238f25300f69afdaa381863368";
  const {
    data: { unikey },
  } = await qr_key();
  //   通过key去获取base64码
  const {
    data: { qrimg },
  } = await qr_create(unikey);
  codeImg = qrimg;
}
// 轮询检测二维码状态
let timer = ref();
function check_code() {
  timer.value = setInterval(async () => {}, 2000);
}
// 判断是否是二维码登录还是账号密码登录
let loginCode = $ref(true);
// 点击选择其他方式登录
function handleOther() {
  loginCode = false;
}
defineExpose({
  showVisible,
});
</script>

<style lang="less" scoped>
.scan-code-box {
  height: 300px;
  width: 330px;
  margin: 0 auto;
}
.scan {
  opacity: 0;
}
.scan-code-box:hover {
  .scan {
    animation: scan 1s;
    animation-fill-mode: forwards;
  }
  .code-box {
    animation: code 1s;
    animation-fill-mode: forwards;
  }
}

.code-box {
  width: 250px;
  left: 50%;
  transform: translateX(-50%);
}

@keyframes scan {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: translateX(-180px);
  }
}

@keyframes code {
  0% {
    width: 250px;
  }

  100% {
    width: 150px;
    transform: translateX(0px);
  }
}
.login-other {
  cursor: pointer;
  left: 50%;
  transform: translateX(-50%);
}
.code_refresh {
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
