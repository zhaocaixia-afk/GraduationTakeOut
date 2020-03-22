import Vue from 'vue'

import { getShopInfo } from 'network/detail'

import { getStore, getSession, setStore } from 'common/util'
import { NOW_SHOP } from 'common/const'

const state = {
  cartGoodsList: [], //购物车列表
  headerOpen: false, //DetailHeader头部的展开与收缩
  shopInfo: {},

  temObj: {},
  cartList: []
}
const mutations = {
  headerOpen(state) {
    state.headerOpen = !state.headerOpen
  },
  getShopInfo(state, shopInfo) {
    state.shopInfo = shopInfo
  },
  // 清空购物车
  clearCart(state, playload) {
    state.cartList = getStore(`cart${playload}`)
    // 总的存储数据
    state.temObj = getStore(getSession(NOW_SHOP))
    state.cartList.forEach(item => {
      state.temObj[item.topLevel].foods.find(good => {
        if (good.name === item.name) {
          good.count = 0
        }
      })
    })
    setStore(getSession(NOW_SHOP), state.temObj)
    // 购物车中数据(不移除清空)
    state.cartList = []
    setStore(`cart${playload}`, state.cartList)
  },

  increase(state, playload) {
    state.temObj = getStore(getSession(NOW_SHOP)) //总数组
    state.cartList = getStore(`cart${getSession(NOW_SHOP)}`) || [] //购物车数组
    if (!playload.good.count) {
      Vue.set(playload.good, 'count', 1)
      Vue.set(playload.good, 'topLevel', playload.topLevel)
      state.cartList.push(playload.good)
      // 第一大类：存储购物车列表(sessionStorage)
      setStore(`cart${getSession(NOW_SHOP)}`, state.cartList)
    } else {
      playload.good.count++
      // 第一大类：存储购物车列表
      const index = state.cartList.findIndex(item => item.name === playload.good.name)
      state.cartList.splice(index, 1, playload.good)
      setStore(`cart${getSession(NOW_SHOP)}`, state.cartList)
    }
    // 第二大类(总列表)
    let a = state.temObj[playload.topLevel].foods.findIndex(item => item.name === playload.good.name)
    // 第二大类
    state.temObj[playload.topLevel].foods.splice(a, 1, playload.good)
    // 第二大类
    setStore(getSession(NOW_SHOP), state.temObj)
  },
  decrease(state, playload) {
    state.temObj = getStore(getSession(NOW_SHOP))
    state.cartList = getStore(`cart${getSession(NOW_SHOP)}`) || []
    if (playload.good.count) {
      playload.good.count--
      // 购物车中存储
      const indexD = state.cartList.findIndex(item => item.name === playload.good.name)
      state.cartList.splice(indexD, 1, playload.good)
      setStore(`cart${getSession(NOW_SHOP)}`, state.cartList)
      // 总存储
      const b = state.temObj[playload.topLevel].foods.findIndex(item => item.name === playload.good.name)
      state.temObj[playload.topLevel].foods.splice(b, 1, playload.good)
      setStore(getSession(NOW_SHOP), state.temObj)

      if (playload.good.count === 0) {
        // 购物车
        state.cartList.splice(indexD, 1)
        setStore(`cart${getSession(NOW_SHOP)}`, state.cartList)
      }
    }
  }
}
const actions = {
  updateFoodCount(context, playload) {
    if (playload.isAdd) {
      context.commit('increase', { good: playload.good, topLevel: playload.topLevel })
    } else {
      context.commit('decrease', { good: playload.good, topLevel: playload.topLevel })
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
      context.commit('getShopInfo', res.data)
    }
  },
  // 4.清空购物车
  clearCart(context, playload) {
    context.commit('clearCart', playload)
  }
}
const getters = {
  // 第二步存储
  getGoodsList(state) {
    if (getStore(getSession(NOW_SHOP))) {
      state.temObj = getStore(getSession(NOW_SHOP))
    }
    return state.temObj
  },
  getCartList(state) {
    if (getStore(`cart${getSession(NOW_SHOP)}`)) {
      state.cartList = getStore(`cart${getSession(NOW_SHOP)}`)
    }
    return state.cartList
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
