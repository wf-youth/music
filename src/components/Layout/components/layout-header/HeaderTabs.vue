<template>
  <div class="header-tabs">tabs</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route);
</script>

<style lang="less" scoped></style>
