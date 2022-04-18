export interface PropertyGroup {
  propertyGroupId: number
  propertyId: number
  propertyValue: PropertyValue
  propertyValueId: number
  sku: Sku
  skuId: number
  propertyName: string
  property: Property
  propertyImgUrl?: string
  propertyValueGoodsId: number
  optionalNum: number
  previewImgType: number
  propertyGoodsId: number
  propertySubmitRepetitionState: number
  checked: boolean
  disabled: boolean
  stock: number
}

interface Sku {
  skuId: number
}

interface PropertyValue {
  property: Property
  propertyId: number
  propertyImgUrl?: string
  propertyValue: string
  propertyValueGoodsId: number
  propertyValueId: number
}

interface Property {
  optionalNum: number
  previewImgType: number
  propertyGoodsId: number
  propertyId: number
  propertyName: string
  propertySubmitRepetitionState: number
}

export interface SkuIdGroup {
  skuId: number
  children: PropertyGroup[]
  name: string
  ids: string
}

export interface PropertyGroupList {
  propertyName: string
  propertyGroupId: number
  optionalNum: number
  children: PropertyGroup[]
}
