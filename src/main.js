import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
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
import './assets/icon/iconfont.js'
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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
