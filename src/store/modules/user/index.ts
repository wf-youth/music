import { defineStore } from 'pinia'
import { Toast } from 'vant'
import {
  login as userLogin,
  logout as userLogout,
  getUserProfile,
  LoginData,
} from '@/api/user/index'
import { setToken, clearToken } from '@/utils/auth'
import { UserState } from './types'
import { login } from '@/api/login'

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    agent: null,
    customer: null,
    payStatus: null,
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
    userProfile(state: UserState): UserState {
      return { ...state }
    },
  },
  actions: {
    switchRoles() {
      return new Promise((resolve) => {
        this.role = this.role === 'user' ? 'user' : 'admin'
        resolve(this.role)
      })
    },
    // 设置用户的信息
    setInfo(user: Partial<UserState>) {
      this.$patch(user)
    },
    // 重置用户信息
    resetInfo() {
      this.$reset()
    },
    // 更新用户信息
    async info() {
      // 重新获取用户信息
      const result = await getUserProfile()
      this.setInfo({ agent: result.agent })
    },
    // 异步登录并存储token
    async login(loginForm: LoginData) {
      const result = await login(loginForm)

      Toast.success('登录成功')
      const token = result['user-token']
      const { agent, customer, payStatus } = result
      if (token) {
        setToken(token)
        this.setInfo({ agent, customer, payStatus })
      }
      return result
    },
    // Logout
    async logout() {
      await userLogout()
      this.resetInfo()
      clearToken()
      // 路由表重置
      // location.reload();
    },
  },
})
