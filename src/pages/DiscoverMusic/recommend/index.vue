<template>
  <div class="recommend flex">
    <!-- <img
      class="scan"
      src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9643571155/525c/faac/2dc6/fe695c03c7c358ddaa4651736b26a55f.png"
      alt=""
    />

    <img class="code" src="../../../assets/images/code.png" alt="" /> -->

    <a-carousel
      :autoPlay="true"
      animation-name="card"
      indicator-position="outer"
      :style="{
        width: '100%',
        height: '300px',
      }"
    >
      <a-carousel-item v-for="image in images" :style="{ width: '60%' }">
        <img
          :src="image"
          :style="{
            width: '100%',
          }"
        />
      </a-carousel-item>
    </a-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const images = [
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
];
</script>

<style lang="less" scoped>
// img {
//   width: 300px;
//   height: 300px;
// }

// .scan:hover {
//   animation: scan 1s;
// }

// .code:hover {
//   animation: code 1s;
// }

// @keyframes scan {
//   0% {
//     opacity: 1;
//   }

//   100% {
//     opacity: 0;
//     transform: translateX(150px);
//   }
// }

// @keyframes code {
//   0% {
//     width: 300px;
//   }

//   100% {
//     width: 500px;
//     height: 500px;
//     transform: translateX(-250px);
//   }
// }
</style>
