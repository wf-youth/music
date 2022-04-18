import { get } from '@/utils/http/axios'
import { GoodsList } from './type'

const url = '/GoodsAction.do'

// 商品详情
export function fetch_goods(goodsId: number) {
  return get({
    url: `api/mall/goods/${goodsId}`,
  })
}

// 商品列表
export function collect_goods_list(categories: number, params: GoodsList) {
  return get({
    url: `api/mall/goods/collect/from/virtual_categories/${categories}`,
    params,
  })
}
