import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import piniaStore from "./store";
// 额外引入图标库
import ArcoVueIcon from "@arco-design/web-vue/es/icon";
import "./index.css";

// import 'vue-global-api'
// 支持SVG
import "virtual:svg-icons-register";
createApp(App).use(router).use(piniaStore).use(ArcoVueIcon).mount("#app");
