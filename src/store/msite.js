import { getURL } from 'network/msite'

const state = {
  address: {} //地址信息对象（通过前面两个获得的）
}

const mutations = {
  _getAddress(state, playload) {
    state.address = playload
  }
}

const actions = {
  async getAddress(context, playload) {
    const result = await getURL(`${playload.latitude},${playload.longitude}`)
    if (result.code === 0) {
      context.commit('_getAddress', result.data)
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
