<template>
  <div
    class="theme-menu fixed top-20 z-10 flex items-center transition-all duration-300"
    :class="className"
  >
    <svg-icon name="svg-dog" size="xl" @click="show = !show" />
    <div class="toggle-theme">
      <van-switch
        v-model="checked"
        size="16px"
        active-color="#000"
        inactive-color="#fff"
        active-value="dark"
        inactive-value="light"
        @change="change"
      />
    </div>
  </div>
</template>
<script setup lang="ts" name="ThemeMenu">
  import { ref, computed } from 'vue'
  import { useAppStore } from '@/store'
  import { Theme } from '@/store/modules/app/types'

  const AppStore = useAppStore()

  // 是否选中
  const checked = ref<string>(AppStore.theme)
  // 是否展示
  const show = ref<boolean>(false)
  // 类名
  const className = computed<string>(() => (show.value ? 'right-0' : '-right-9'))

  // 改变暗黑模式
  function change(val: Theme) {
    AppStore.setTheme(val)

    setTimeout(() => {
      show.value = false
    }, 300)
  }
</script>

<style lang="less" scoped></style>
