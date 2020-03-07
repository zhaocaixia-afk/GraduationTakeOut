import { getShopsGoods } from 'network/detail'

const SET_GOODS_LIST = 'setGoodsList'

const state = {
  goodsList: [], //总的商品列表
  recommendList: [] //推荐商品列表
}
const mutations = {
  [SET_GOODS_LIST](state, payload) {
    state.goodsList = payload.goodsList
    state.recommendList = payload.recommendList
  }
}
const actions = {
  // 1.获取了goodsList,同时赋值了goodsList和recommendList
  async getGoodsList(context, callback) {
    const result = await getShopsGoods()
    if (result.code === 0) {
      const goodsList = result.data
      const recommendList = result.data[0].foods
      context.commit(SET_GOODS_LIST, { goodsList, recommendList })
      callback && callback()
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
