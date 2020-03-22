import Vue from 'vue'
import Vuex from 'vuex'

import msite from './msite'
import login from './login'
import detail from './detail'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    msite: msite,
    login: login,
    detail: detail
  }
})
