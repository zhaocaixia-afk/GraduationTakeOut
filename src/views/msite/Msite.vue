<template>
    <div class="msite">
        <nav-bar bgColor="red">
            <div slot="left">
                <i class="el-icon-search"></i>
            </div>
            <div slot="center">{{ address.address }}</div>
            <div slot="right">
                登录|注册
            </div>
        </nav-bar>
        <scroll ref="scroll" class="scroll">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </scroll>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

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
            NavBar,
            Scroll
        }
    }
</script>

<style lang="scss" scoped>
.msite{
    height: 100vh;
    // position: relative;
    .scroll {
    overflow: hidden;
    // 方法一:
    height: calc(100% - 94px);

    // 方法二:
    // position: absolute;
    // top: 44px;
    // bottom: 49px;
    // left: 0;
    // right: 0;
  }
}
</style>