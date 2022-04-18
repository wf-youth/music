import { Goods } from '@/interface/goods.interface'

export interface Result {
  agentMediaList?: AgentMediaList[]
  banSellProvinceList?: BanSellProvinceList[]
  fare?: Fare
  goods?: Goods
  goodsBanSellListName?: string
  goodsInsuranceList?: GoodsInsuranceList[]
  goodsParameterList?: GoodsParameterList[]
  hasStore?: number
  optionalState?: number
  propertyGroupList?: PropertyGroupList[]
  skuList?: SkuList[]
  store?: Store
  systemTime?: number
}

interface Store {
  captainId: number
  creditScore: number
  favoriteCommentNum: number
  favoriteCommentRate: number
  goodsNum: number
  logoImgId: number
  logoUrl: string
  qualificationsDisplay: number
  qualificationsImgId: number
  returnGoodsNum: number
  salesNum: number
  storeCdate: string
  storeDescribe: string
  storeId: number
  storeName: string
  storeScore: number
  storeStar: number
  storeStatus: number
  supplierId: number
}

export interface SkuList {
  agentMedia: AgentMedia2
  costPrice: number
  currentPayPrice: number
  goodsId: number
  imgId: number
  price: number
  prime1Price: number
  prime2Price: number
  prime3Price: number
  remark: string
  shareProfit: number
  skuCdate: string
  skuId: number
  skuSmallPiecesNum: number
  stock: number
  taokerPrice: number
}

interface AgentMedia2 {
  agentMediaId: number
  mediaUrl: string
}

interface PropertyGroupList {
  propertyGroupId: number
  propertyId: number
  propertyValue: PropertyValue
  propertyValueId: number
  sku: Sku
  skuId: number
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

interface GoodsParameterList {
  goodsId: number
  goodsParameterId: number
  parameterCdate: string
  parameterContent: string
  parameterSort: number
  parameterState: number
  parameterTitle: string
}

interface GoodsInsuranceList {
  goodsInsuranceId: number
  insuranceRulesContent: string
  insuranceRulesContentAll: string
  insuranceRulesId: number
  insuranceRulesName: string
}

interface Fare {
  captainId: number
  costWay: number
  fareCdate: string
  fareId: number
  fareName: string
  fareProvinceList: FareProvinceList[]
  fareType: number
  fareUdate: string
}

interface FareProvinceList {
  addUnitMoney: number
  addUnitValue: number
  fareId: number
  fareProvinceCdate: string
  fareProvinceId: number
  headUnitMoney: number
  headUnitValue: number
}

interface BanSellProvinceList {
  areaName: string
  areaType: number
  provinceCdate: string
  provinceId: number
  provinceName: string
}

interface AgentMediaList {
  agentMediaId: number
  mediaEventType: number
  mediaUrl: string
}
