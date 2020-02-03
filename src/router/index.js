import Vue from 'vue'
import VueRouter from 'vue-router'

const Msite = () => import(/* webpackChunkName: "msite" */ 'views/msite/Msite')
const Search = () => import(/* webpackChunkName: "search" */ 'views/search/Search')
const Order = () => import(/* webpackChunkName: "order" */ 'views/order/Order')
const Profile = () => import(/* webpackChunkName: "profile" */ 'views/profile/Profile')

Vue.use(VueRouter)

const routes = [
  { path: '', redirect: '/msite' },
  { path: '/msite', component: Msite },
  { path: '/search', component: Search },
  { path: '/order', component: Order },
  { path: '/profile', component: Profile }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
