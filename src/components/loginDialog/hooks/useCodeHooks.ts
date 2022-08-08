import { qr_key, qr_create, qr_check } from "@/api/login/index";
import { ref } from "vue";

export const useCodeHook = () => {
  const codeImg = ref("");
  const isValid = ref(true);
  const timer = ref<any>();

  async function get_code() {
    codeImg.value =
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftva1.sinaimg.cn%2Flarge%2F006APoFYly1g8mf9qe5udg30jz0jzjtr.gif&refer=http%3A%2F%2Ftva1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662261012&t=ade1bd238f25300f69afdaa381863368";

    const {
      data: { unikey },
    } = await qr_key();
    //   通过key去获取base64码
    const {
      data: { qrimg },
    } = await qr_create(unikey);
    codeImg.value = qrimg;

    isValid.value = true;
    check_code(unikey);
  }

  // 检查 二维码状态
  function check_code(key: string) {
    timer.value = setInterval(async () => {
      const { code } = await qr_check(key);
      /**
       * 800 为二维码过期
       * 801 为等待扫码,
       * 802 为待确认
       * 803 为授权登录成功(803 状态码下会返回 cookies)
       */
      if (code === 800) {
        isValid.value = false;
        clearInterval(timer.value);
      }
    }, 2000);
  }

  // 销毁 timer
  function clearTimer() {
    clearInterval(timer.value);
  }

  return {
    codeImg,
    isValid,
    get_code,
    check_code,
    clearTimer,
  };
};
