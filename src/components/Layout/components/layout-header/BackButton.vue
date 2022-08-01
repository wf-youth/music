<template>
  <div class="back-button">
    <a-space size="mini" class="flex items-center">
      <icon-left :style="{ fontSize: '24px' }" @click="handleBack" />
      <icon-right :style="{ fontSize: '24px' }" @click="handleForward" />
    </a-space>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

function handleBack() {
  router.go(-1);
}

function handleForward() {
  router.go(1);
}
</script>

<style lang="less" scoped></style>
