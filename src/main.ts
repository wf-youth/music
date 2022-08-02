import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import piniaStore from "./store";
// 额外引入图标库
import ArcoVueIcon from "@arco-design/web-vue/es/icon";
//组件样式
import "@arco-design/web-vue/dist/arco.less";
//图标库样式
import "@icon-park/vue-next/styles/index.css";
import "./index.css";

// import 'vue-global-api'
// 支持SVG
import "virtual:svg-icons-register";
createApp(App).use(router).use(piniaStore).use(ArcoVueIcon).mount("#app");
