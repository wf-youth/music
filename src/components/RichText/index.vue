<template>
  <div v-html="text"> </div>
</template>
<script setup name="RichText" lang="ts">
  defineProps<{
    text: string
  }>()
  // const { proxy } = getCurrentInstance()
</script>

<style lang="less" scoped></style>
