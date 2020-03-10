import Vue from 'vue'
const state = {
  cartGoodsList: [] //购物车列表
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
  }
}
const actions = {
  // 2.同步操作,但是为了保持一个函数做单一事件原则
  updateFoodCount(context, payload) {
    if (payload.isAdd) {
      context.commit('incrementFoodCount', payload.good)
    } else {
      context.commit('decrementFoodCount', payload.good)
    }
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
