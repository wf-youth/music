import { PropertyGroup, SkuIdGroup } from './PropertyGroup.interface'
import { unique } from '@/utils/unique'

// 扁平化
function delayering(list: any[]): any[] {
  return list.map((item) => {
    return {
      ...item,
      ...item.propertyValue.property,
      ...item.propertyValue,
    }
  })
}

// 判断是否已经含有此属性
function findPropertyIndex(name: string, value: string | number, list: any[]) {
  return list.findIndex((item) => item[name] === value)
}

// 筛选出 符合 sku选择的数据
export function handleProperty(propertyGroupList: PropertyGroup[]): any[] {
  let result: any[] = []

  // 扁平化
  propertyGroupList = delayering(propertyGroupList)
  // 去重
  propertyGroupList = unique(propertyGroupList, 'propertyValue')

  propertyGroupList.forEach((item) => {
    const { propertyName, propertyGroupId, optionalNum } = item

    if (findPropertyIndex('propertyName', propertyName, result) === -1) {
      result.push({
        propertyName,
        propertyGroupId,
        optionalNum,
        children: [item],
      })
    } else {
      result[findPropertyIndex('propertyName', propertyName, result)].children.push(item)
    }
  })

  return result
}

// 筛选出 skuid相同的
export function handleSkuIdGroup(propertyGroupList: PropertyGroup[]): any[] {
  propertyGroupList = delayering(propertyGroupList)

  let result: SkuIdGroup[] = []

  function skuIdIndex(skuId: number) {
    return result.findIndex((item) => item.skuId === skuId)
  }

  propertyGroupList.forEach((item) => {
    const { skuId } = item
    if (findPropertyIndex('skuId', skuId, result) === -1) {
      result.push({
        skuId,
        name: '',
        ids: '',
        children: [item],
      })
    } else {
      result[findPropertyIndex('skuId', skuId, result)].children.push(item)
    }
  })

  result = result.map((item) => {
    const obj = {
      name: item.children.map((item) => item.propertyValue).join(','),
      ids: item.children.map((item) => item.propertyValueId).join(','),
    }
    return {
      ...item,
      ...obj,
    }
  })

  return result
}
