import request, { get } from '@/utils/http/axios'

export function login(data: object) {
  const params: object = {
    dispatch: 'loginByPhoneAndPwd',
    os: 'app',
    ...data,
  }
  return get({
    url: `/m/AgentAction.do`,
    params,
  })
}
