import { get } from '@/utils/http/axios'
import { QrKeyObject, QrCreate,QrCheck } from './type'
// 二维码的key
export function qr_key():Promise<QrKeyObject> {

  return get({
    url: `/login/qr/key?timerstamp=${new Date().getTime()}`
  })
}
// 二维码base64
export function qr_create(key:string):Promise<QrCreate> {

  return get({
    url: `/login/qr/create?timerstamp=${new Date().getTime()}`,
    params:{qrimg:true,key}
  })
}

// 检测二维码状态
export function qr_check(key:string):Promise<QrCheck> {

  return get({
    url: `/login/qr/check?timerstamp=${new Date().getTime()}`,
    params:{key}
  })
}



