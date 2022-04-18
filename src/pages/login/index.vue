<template>
  <div class="p-7 bg-gray-50 main">
    <!-- logo图片位置 -->
    <div class="flex justify-center items-center">
      <van-image
        round
        width="80"
        height="80"
        src="https://cdn.rewuyqt.com/test/202203091531383900C791B3439AA95B2B336E42A91653159.webp"
      />
    </div>
    <!-- 输入框(账号密码) -->
    <div class="mt-11">
      <van-field
        class="rounded-full user-field"
        v-model="agent.phoneNum"
        placeholder="请输入用户名"
      />
      <van-field
        class="mt-3 rounded-full psd-field"
        v-model="agent.agentPassword"
        type="password"
        placeholder="请输入密码"
      />
    </div>
    <!-- 确认登录按钮 -->
    <div class="mt-12">
      <van-button round size="large" color="#f87171" @click="handleLogin">登录</van-button>
      <div class="text-xs flex justify-between px-2 pt-2 text-gray-400 mt-5">
        <span>账号密码登录</span>
        <span>手机验证码登录</span>
      </div>
    </div>
    <!-- 其他方式登录 -->
    <div class="mt-40 text-xs" @click="handleOtherLogin">
      <van-divider>其他方式登录</van-divider>
      <div class="flex flex-col justify-center items-center">
        <van-icon name="wechat" size="32" color="#07c160" />

        <div class="text-xs text-gray-400 mt-2">微信账号登录</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import { setToken } from '@/utils/auth'
  import { Toast } from 'vant'
  import { useRouter } from 'vue-router'
  import { useUserStore } from '@/store'
  let router = useRouter()
  const agent = reactive({
    phoneNum: '',
    agentPassword: '',
  })
  async function handleLogin() {
    const { login } = useUserStore()

    // 登录
    await login(agent)
    router.push('/main')
  }
  // 点击其他方式登录
  function handleOtherLogin() {
    console.log('这是微信登录')
  }
  // const agentPassword=ref('')
  // const { proxy } = getCurrentInstance()
  // const router = useRouter()
  // const route = useRoute()
</script>

<style lang="less" scoped>
  .main {
    height: 100vh;
    :deep(.van-button) {
      color: #000;
      font-size: 12px;
      border: none;
      height: 34px;
    }
    .user-field,
    .psd-field {
      padding: 5px 10px;
      font-size: 12px;
    }
  }
</style>
