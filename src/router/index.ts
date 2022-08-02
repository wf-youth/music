import { routes } from "./modules/index";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

console.log(routes, "自动生成的路由");
//导入生成的路由数据
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
