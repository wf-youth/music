<template>
  <layout>
    <router-view></router-view>
  </layout>
</template>
<script setup lang="ts">
import { useAppStore } from "./store";

const AppStore = useAppStore();
AppStore.setTheme(AppStore.theme);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
