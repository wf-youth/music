// import { onMounted, ref, reactive } from 'vue'
// // 获取商品详情
// import { fetch_goods } from '@/api/goods'
// export function useFetchGoods() {
//   type GoodsState = {
//     agentMediaList: object[]
//     banSellProvinceList: object[]
//     fare: object
//     goods: object
//     goodsBanSellListName?: string
//     goodsInsuranceList: object[]
//     goodsParameterList: object[]
//     optionalState: number
//     propertyGroupList: object[]
//     skuList: object[]
//   }

//   const state = reactive<GoodsState>({
//     agentMediaList: [],
//     banSellProvinceList: [],
//     fare: {},
//     goods: {},
//     goodsBanSellListName: '',
//     goodsInsuranceList: [],
//     goodsParameterList: [],
//     optionalState: 0,
//     propertyGroupList: [],
//     skuList: [],
//   })
//   // 获取商品详情信息

//   onMounted(async () => {
//     const { data } = await fetch_goods(6021723)
//     state.agentMediaList =

//   return {
//     goods,
//   }
// }
