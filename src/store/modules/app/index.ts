import { defineStore } from 'pinia'
import { AppState, Theme } from './types'

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    theme: 'dark', // dark 黑暗模式 light 白色模式
    menu: true, //是否展示 悬浮菜单按钮
    darkMode: 'class', // midia 跟随系统 class在html 添加类名
  }),
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
  getters: {
    appProfile(state: AppState): AppState {
      return { ...state }
    },
  },

  actions: {
    //   更新state
    updateAppState(partial: Partial<AppState>): void {
      this.$patch(partial)
    },
    // 重置state
    resetAppState() {
      this.$reset()
    },
    // 修改主题
    setTheme(theme: Theme): void {
      this.theme = theme
      this.setDarkClass(this.theme === 'dark')
    },
    //根据 系统来设置 暗黑模式
    midiaDark() {
      window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
        this.setDarkClass(e.matches)
      })
    },
    //设置 深色主题class
    setDarkClass(isDark: boolean): void {
      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
  },
})
