import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 1.normalize
import 'normalize.css/normalize.css'
// 2.300ms延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
