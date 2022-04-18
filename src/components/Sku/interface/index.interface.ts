import { _PropertyGroup, _PropertyGroupList } from '@/pages/goods/interface/sku.interface'
// 点击的属性
export interface SelectValue {
  child: _PropertyGroup
  childIndex: number
  item: _PropertyGroupList
  index: number
}
