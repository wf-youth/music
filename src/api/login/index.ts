import  { get } from '@/utils/http/axios'

export function login() {

  return get({
    url: `/login/qr/key`
  })
}
