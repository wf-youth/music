<template>
  <div class="recommend">
    <!-- <img
      class="scan"
      src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9643571155/525c/faac/2dc6/fe695c03c7c358ddaa4651736b26a55f.png"
      alt=""
    />

    <img class="code" src="../../../assets/images/code.png" alt="" /> -->

    <banner />
    <recommend-playlist />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import banner from "./components/banner.vue";
import recommendPlaylist from "./components/recommendPlaylist.vue";
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
