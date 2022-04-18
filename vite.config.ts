// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node
import { resolve } from "path";
import { ConfigEnv, defineConfig, loadEnv } from "vite";
import { createVitePlugins } from "./config/vite/plugins/index";
import vue from "@vitejs/plugin-vue";

function resolvePath(path: string) {
  return resolve(__dirname, path);
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  console.log(createVitePlugins, "createVitePlugins");

  const env = loadEnv(mode, process.cwd());
  return {
    plugins: createVitePlugins(),
    resolve: {
      alias: {
        "@": resolvePath("./src"),
        "@config": resolvePath("./config"),
        "@components": resolvePath("./src/components"),
        "@utils": resolvePath("./src/utils"),
        "@api": resolvePath("./src/api"),
      },
      extensions: [".js", ".json", ".ts", ".vue"], // 使用路径别名时想要省略的后缀名，可以自己 增减
    },

    // css
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // 这样就能全局使用 src/assets/styles/base.less 定义的 变量
          additionalData: `@import "${resolvePath(
            "src/assets/styles/base.less"
          )}";`,
        },
      },
    },

    // server
    server: {
      hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      // 服务配置
      port: 3000, // 类型： number 指定服务器端口;
      open: true, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: true, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      host: "0.0.0.0", // IP配置，支持从IP启动
      proxy: {
        "/api": {
          target: env.VITE_APP_API_BASE_URL,
          changeOrigin: true,
          rewrite: (path: any) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
