<template>
  <div class="code-login">
    <div style="text-align: center; height: 450px" class="relative">
      <div class="text-xl mb-5">扫码登录</div>
      <div class="relative" :class="{ 'scan-code-box': isValid }">
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
            <transition>
              <div v-if="!isValid">
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
                  <div class="text-white font-semibold">二维码已失效</div>
                  <a-button type="primary" shape="round" @click="handleRefresh"
                    >点击刷新</a-button
                  >
                </div>
              </div>
            </transition>
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
        style="color: var(--color-text-3)"
        @click="handleOther"
      >
        选择其他登录方式<icon-right />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCodeHook } from "./hooks/useCodeHooks";
const { get_code, codeImg, isValid, clearTimer } = useCodeHook();

interface Emits {
  (e: "change"): void;
}
const emits = defineEmits<Emits>();

// 点击刷新
function handleRefresh() {
  get_code();
}

// 点击选择其他方式登录
function handleOther() {
  clearTimer();
  emits("change");
}

defineExpose({
  handleRefresh,
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

.code-box {
  width: 250px;
  left: 50%;
  transform: translateX(-50%);
}

.scan,
.code-box {
  transition: all 0.3s linear;
}
.scan-code-box:hover {
  .scan {
    opacity: 1;
    transform: translateX(-180px);
  }
  .code-box {
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
