import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import routes from 'virtual:generated-pages'
import { getToken } from '../utils/auth'

routes.push({
  path: '/',
  redirect: '/login',
})

console.log(routes, '自动生成的路由')
//导入生成的路由数据
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
