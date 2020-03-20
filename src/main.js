import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// element-ui的引入
import './plugins/element.js'

// 1.normalize
import 'normalize.css/normalize.css'
// 2.300ms延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)
// 3.swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
// 4.iconfont
import './assets/icon/iconfont'
import IconSvg from 'components/common/iconSvg/IconSvg'
Vue.component('icon-svg', IconSvg)
// 5.事件总线
Vue.prototype.$bus = new Vue()
// 6.图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from 'assets/img/msite/loading.gif'
Vue.set(VueLazyload, {
  loading
})
// 7.mockjs模拟数据
import './mock/mock'

// 解决问题:vue-router.esm.js?8c4f:2051 Uncaught (in promise) undefined
// import Router from 'vue-router'
// const routerPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error => error)
// }
// npm i vue-router@3.0 -S

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
