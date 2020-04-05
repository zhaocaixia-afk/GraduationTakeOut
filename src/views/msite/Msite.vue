<template>
  <div class="msite">
    <nav-bar>
      <div slot="left">
        <i class="el-icon-search" @click="goSearch"></i>
      </div>
      <div slot="center">{{ address.address }}</div>
      <router-link tag="div" :to="userInfo ? '/userinfo' : '/login'" slot="right">
        <i class="el-icon-user" v-if="userInfo !== null"></i>
        <span v-else>登录</span>
      </router-link>
    </nav-bar>
    <scroll ref="scroll" class="scroll">
      <swiper :options="swiperOption" v-if="categorysList.length">
        <swiper-slide v-for="(cateList, index1) in categorysArr" :key="index1">
          <a href="javascript:;" v-for="(cate, index2) in cateList" :key="index2">
            <img :src="`${baseImgUrl}${cate.image_url}`" />
            <span>{{ cate.title }}</span>
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <img v-else src="~assets/img/msite/msite_back.svg" alt="" />
      <div class="nearby">
        <i class="el-icon-s-operation"></i>
        <span>附近商家</span>
      </div>
      <shops-list :shops-list="shops"></shops-list>
    </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import ShopsList from 'components/content/shops/ShopsList'

import { getFoodCategorys, getShops } from 'network/msite'

import { debounce } from 'common/util'

import { userInfo } from 'common/mixin'

import { mapState } from 'vuex'

export default {
  name: 'Msite',
  mixins: [userInfo],
  data() {
    return {
      latitude: 29.569186, // 纬度
      longitude: 103.742437, // 经度
      //swiper参数对象
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      categorysList: [],
      baseImgUrl: 'https://fuss10.elemecdn.com',
      shops: []
    }
  },
  computed: {
    ...mapState({
      address: state => state.msite.address
    }),
    // 1.食品分类列表 拆分成一个二维数组
    categorysArr() {
      const { categorysList } = this
      let arr = []
      let minArr = []
      categorysList.forEach(c => {
        minArr.push(c)

        if (minArr.length === 8) {
          minArr = []
        }
        if (minArr.length === 1) {
          arr.push(minArr)
        }
      })
      return arr
    }
  },
  created() {
    this._getAddress()
    this.getFoodCategorys()
    this.getShops()
  },
  mounted() {
    // 仿抖动操作
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.$bus.$on('itemImageLoad', () => {
      refresh()
    })
  },
  methods: {
    // 1.根据经纬度获取地理信息
    _getAddress() {
      this.$store.dispatch('getAddress', { latitude: this.latitude, longitude: this.longitude })
    },
    // 2.食品分类列表
    async getFoodCategorys() {
      const result = await getFoodCategorys()
      if (result.code === 0) {
        this.categorysList = result.data
      }
    },
    // 3.商铺列表
    async getShops() {
      const result = await getShops()
      if (result.code === 0) {
        this.shops = result.data
      }
    },
    goSearch() {
      this.$router.push('/search')
    }
  },
  components: {
    NavBar,
    Scroll,
    swiper,
    swiperSlide,
    ShopsList
  }
}
</script>

<style lang="scss" scoped>
.msite {
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
    .swiper-container {
      height: 200px;
      border-bottom: 10px solid $b-g;
      .swiper-wrapper {
        .swiper-slide {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-content: space-around;
          a {
            width: 24%;
            height: 90px;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 14px;
            img {
              width: 50px;
              height: 50px;
            }
          }
        }
      }
    }
    .nearby {
      color: $text-color;
      padding-top: 5px;
      i {
        margin: 0 5px;
      }
    }
  }
}
</style>
