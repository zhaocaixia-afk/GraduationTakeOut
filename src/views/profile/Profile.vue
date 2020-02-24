<template>
    <div class="profile">
        <nav-bar bgColor="red">
            <div slot="center">我的</div>
        </nav-bar>
        <router-link to="/login">
            <profile-header/>
        </router-link>
        <profile-info/>
        <profile-list-view :list="orderList"/>
        <profile-list-view :list="serviceList"/>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'

import ProfileHeader from './childCnps/ProfileHeader'
import ProfileInfo from './childCnps/ProfileInfo'
import ProfileListView from './childCnps/ProfileListView'

    export default {
        name: 'Profile',
        data(){
            return{
                orderList: [
                    { icon: 'icondingdanlan', text: '我的订单' },
                    { icon: 'iconjifenshangcheng', text: '积分商城' },
                    { icon: 'iconhuiyuan', text: '外卖会员' },
                ],
                serviceList: [
                    { icon: 'icon_fuwu', text: '服务中心' }
                ]
            }
        },
        components: {
            NavBar,
            ProfileHeader,
            ProfileInfo,
            ProfileListView
        }
    }
</script>

<style lang="scss" scoped>

</style>