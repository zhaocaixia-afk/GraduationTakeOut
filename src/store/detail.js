import Vue from 'vue'
import { getShopsGoods } from 'network/detail'

const SET_GOODS_LIST = 'setGoodsList'

const state = {
  goodsList: [], //总的商品列表
  recommendList: [], //推荐商品列表
  cartGoodsList: [] //
}
const mutations = {
  // 1.获取goods列表
  [SET_GOODS_LIST](state, payload) {
    state.goodsList = payload.goodsList
    state.recommendList = payload.recommendList
  },
  // 2.增加
  incrementFoodCount(state, good) {
    if (!good.count) {
      Vue.set(good, 'count', 1)
      state.cartGoodsList.push(good)
    } else {
      good.count++
    }
  },
  // 3.减少
  decrementFoodCount(state, good) {
    if (good.count) {
      good.count--
      if (good.count === 0) {
        state.cartGoodsList.splice(state.cartGoodsList.indexOf(good), 1)
      }
    }
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
  },
  // 2.同步操作,但是为了保持一个函数做单一事件原则
  updateFoodCount(context, payload) {
    if (payload.isAdd) {
      context.commit('incrementFoodCount', payload.good)
    } else {
      context.commit('decrementFoodCount', payload.good)
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
