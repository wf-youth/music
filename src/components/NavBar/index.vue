<template>
  <van-config-provider :theme-vars="themeVars">
    <van-nav-bar :title="props.title" left-arrow v-bind="$attrs">
      <template #right>
        <van-icon name="share" size="30" />
      </template>
    </van-nav-bar>
  </van-config-provider>
</template>

<script setup name="NavBar" lang="ts">
  const themeVars = ref({
    NavBarIconColor: '#fff',
    NavBarBackgroundColor: 'rgba(0,0,0,0)',
    NavBarArrowSize: '30px',
  })

  const props = defineProps({
    title: String,
  })
</script>

<style lang="less" scoped></style>
