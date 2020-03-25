<template>
  <div class="profile">
    <nav-bar>
      <div slot="center">我的</div>
    </nav-bar>
    <router-link :to="userInfo._id ? '/userInfo' : '/login'">
      <profile-header :userInfo="userInfo" />
    </router-link>
    <profile-info />
    <profile-list-view :list="orderList" />
    <profile-list-view :list="serviceList" />

    <p class="logout">
      <button @click="logout">退出登录</button>
    </p>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import ProfileHeader from './childCnps/ProfileHeader'
import ProfileInfo from './childCnps/ProfileInfo'
import ProfileListView from './childCnps/ProfileListView'

import { userInfo } from 'common/mixin'
import { clearSession } from '../../common/util'

export default {
  name: 'Profile',
  mixins: [userInfo],
  data() {
    return {
      orderList: [
        { icon: 'icondingdanlan', text: '我的订单' },
        { icon: 'iconjifenshangcheng', text: '积分商城' },
        { icon: 'iconhuiyuan', text: '外卖会员' }
      ],
      serviceList: [{ icon: 'icon_fuwu', text: '服务中心' }],
      userInfo: {}
    }
  },
  components: {
    NavBar,
    ProfileHeader,
    ProfileInfo,
    ProfileListView
  },
  methods: {
    logout() {
      this.$confirm('此操作将退出登录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
        .then(() => {
          clearSession()
          this.$router.push('/msite')
        })
        .catch(() => {})
    }
  }
}
</script>

<style lang="scss">
.profile {
  .logout {
    margin-top: 20px;
    text-align: center;
    button {
      background: #f2f2f2;
      padding: 10px 90px;
      border-radius: 5px;
    }
  }
}
</style>
