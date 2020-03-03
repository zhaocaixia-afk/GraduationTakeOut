import Vue from 'vue'
import VueRouter from 'vue-router'

const Msite = () => import(/* webpackChunkName: "msite" */ 'views/msite/Msite')
const Search = () => import(/* webpackChunkName: "search" */ 'views/search/Search')
const Order = () => import(/* webpackChunkName: "order" */ 'views/order/Order')
const Profile = () => import(/* webpackChunkName: "profile" */ 'views/profile/Profile')

const Login = () => import(/* webpackChunkName: "login" */ 'views/login/Login')

const UserInfo = () => import(/* webpackChunkName: "userInfo" */ 'views/userInfo/UserInfo')

const Detail = () => import(/* webpackChunkName: "detail" */ 'views/detail/Detail')

Vue.use(VueRouter)

const routes = [
  { path: '', redirect: '/msite' },
  { path: '/msite', component: Msite, meta: { showFooter: true } },
  { path: '/search', component: Search, meta: { showFooter: true } },
  { path: '/order', component: Order, meta: { showFooter: true } },
  { path: '/profile', component: Profile, meta: { showFooter: true } },
  { path: '/login', component: Login },
  { path: '/userInfo', component: UserInfo },
  { path: '/detail', component: Detail }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
