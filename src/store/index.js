import Vue from 'vue'
import Vuex from 'vuex'

import login from './login'
import detail from './detail'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login: login,
    detail: detail
  }
})
