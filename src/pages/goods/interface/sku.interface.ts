import { PropertyGroup, SkuIdGroup, PropertyGroupList } from '../utils/PropertyGroup.interface'
import { Goods } from '@/interface/goods.interface'
import { SkuList } from './result.interface'
export interface SkuInfo {
  propertyGroupList: PropertyGroupList[]
  mediaUrl: string
  goods: Goods
  skuIdGroup?: SkuIdGroup[]
  skuList: SkuList[]
}

export interface _PropertyGroup extends PropertyGroup {}
export interface _PropertyGroupList extends PropertyGroupList {}
