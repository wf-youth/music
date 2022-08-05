import { get } from '@/utils/http/axios'
import { QrKeyObject, QrCreate } from './type'

export function qr_key():Promise<QrKeyObject> {

  return get({
    url: `/login/qr/key?timerstamp=${new Date().getTime()}`
  })
}

export function qr_create(key:string):Promise<QrCreate> {

  return get({
    url: `/login/qr/create?timerstamp=${new Date().getTime()}`,
    params:{qrimg:true,key}
  })
}

