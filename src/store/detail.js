import Vue from 'vue'

import { getShopInfo } from 'network/detail'

const state = {
  cartGoodsList: [], //购物车列表
  headerOpen: false, //DetailHeader头部的展开与收缩
  shopInfo: {}
}
const mutations = {
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
  },
  headerOpen(state) {
    state.headerOpen = !state.headerOpen
  },
  getShopInfo(state, shopInfo) {
    state.shopInfo = shopInfo
  },
  // 清空购物车
  clearCart(state) {
    // 清空购物车,要确保选择的数量为0
    state.cartGoodsList.forEach(item => (item.count = 0))
    state.cartGoodsList = []
  }
}
const actions = {
  // 1.同步操作,但是为了保持一个函数做单一事件原则
  updateFoodCount(context, payload) {
    if (payload.isAdd) {
      context.commit('incrementFoodCount', payload.good)
    } else {
      context.commit('decrementFoodCount', payload.good)
    }
  },
  // 2.同步操作,DetailHeader的展开与收缩显示
  updateHeaderOpen(context) {
    context.commit('headerOpen')
  },
  // 3.异步操作,获取DetailInfo的值
  async _getShopInfo(context, id) {
    const res = await getShopInfo(id)
    if (res.code === 0) {
      context.commit('getShopInfo', res.data.info)
    }
  },
  // 4.清空购物车
  clearCart(context) {
    context.commit('clearCart')
  }
}
const getters = {
  // 1.总的件数count
  totalCount(state) {
    return state.cartGoodsList.reduce((total, item) => total + item.count, 0)
  },
  // 2.总的价钱
  totalPrice(state) {
    return state.cartGoodsList.reduce((total, item) => total + item.count * item.price, 0)
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
