import type { Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
// svg
import { createSvgIcon } from "./SvgIcons";
import { AutoImportDeps } from "./autoImport";
import { AutoRegistryComponents } from "./components";
import { ConfigPagesPlugin } from "./pages";
import { ConfigRestartPlugin } from "./restart";
import { StyleImportPlugin } from "./styleImport";
export function createVitePlugins() {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // vue支持
    vue(),
    // svg
    createSvgIcon(),
    // // 自动按需引入组件
    AutoRegistryComponents(),
    // // 自动按需引入依赖
    AutoImportDeps(),
    // 自动生成路由
    ConfigPagesPlugin(),
    // 监听配置文件改动重启
    ConfigRestartPlugin(),
    // 按需引入style组件
    StyleImportPlugin(),
  ];

  return vitePlugins;
}
