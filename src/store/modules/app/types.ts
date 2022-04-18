export type Theme = 'dark' | 'loght'
export type DarkMode = 'media' | 'class'
export interface AppState {
  theme: Theme // dark 黑暗模式 light 白色模式
  darkMode: DarkMode // midia 跟随系统 class在html 添加类名
  menu: boolean //是否展示 悬浮菜单按钮

  [propsName: string]: any
}
