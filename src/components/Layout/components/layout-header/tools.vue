<template>
  <div class="tools ml-8">
    <a-space
      size="medium"
      class="flex items-center"
      :style="{ cursor: 'pointer' }"
    >
      <icon-sun-fill
        :style="{ fontSize: '20px' }"
        @click="setTheme"
        v-if="AppStore.theme === 'light'"
      />
      <icon-moon-fill :style="{ fontSize: '20px' }" @click="setTheme" v-else />
      <icon-settings :style="{ fontSize: '20px' }" />
      <icon-skin :style="{ fontSize: '20px' }" />
      <icon-email :style="{ fontSize: '20px' }" />
      <icon-copy :style="{ fontSize: '20px' }" />
    </a-space>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAppStore } from "@/store";

const AppStore = useAppStore();

function setTheme() {
  AppStore.setTheme(AppStore.theme === "dark" ? "light" : "dark");
}
</script>

<style lang="less" scoped></style>
