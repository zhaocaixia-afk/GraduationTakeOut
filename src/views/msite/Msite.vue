<template>
    <div>
        <nav-bar bgColor="red">
            <div slot="left">
                <i class="el-icon-search"></i>
            </div>
            <div slot="center">{{ address.address }}</div>
            <div slot="right">
                登录|注册
            </div>
        </nav-bar>
        Msite
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import { getURL } from 'network/msite'

    export default {
        name: 'Msite',
        data(){
            return{
                latitude: 29.569186, // 纬度
                longitude: 103.742437, // 经度
                address: {} //地址信息对象（通过前面两个获得的）
            }
        },
        created(){
            this.getAddress()
        },
        methods: {
            // 1.根据经纬度获取地理信息
            async getAddress(){
                const geohash = `${this.latitude},${this.longitude}`
                const result = await getURL(geohash)
                if(result.code === 0){
                    this.address = result.data
                    // console.log(this.address)
                }
            }
        },
        components: {
            NavBar
        }
    }
</script>

<style lang="scss" scoped>

</style>