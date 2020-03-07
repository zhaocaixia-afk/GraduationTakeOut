<template>
  <div class="detail">
    <tab-control :tab-list="tabList" v-show="isTopFixed" class="tabControl1" ref="tabControl1" @tabCurrent="tabCurrent" />

    <scroll ref="scroll" class="scroll" :probe-type="3" @scroll="scroll">
      <detail-header :shop-info="shopInfo" @imgLoad="imgLoad" />
      <!-- detail -->
      <tab-control :tab-list="tabList" ref="tabControl2" class="tabControl2" @tabCurrent="tabCurrent" />
      <router-view />
    </scroll>
  </div>
</template>

<script>
import { getShopsInfo } from 'network/detail'

import Scroll from 'components/common/scroll/Scroll'

import DetailHeader from './childCpns/DetailHeader'
import TabControl from './childCpns/TabControl'

export default {
  name: 'Detail',
  data() {
    return {
      shopInfo: {},
      tabList: [
        { path: '/detail', text: '点餐' },
        { path: '/ratings', text: '评价' },
        { path: '/info', text: '商家' }
      ],
      isTopFixed: false, //判读是否吸顶
      tabOffsetTop: 0, //获取tabControl2的高度
      shopGoods: []
    }
  },
  mounted() {
    this._getShopInfo()
  },
  methods: {
    // 1.获取商家详情
    async _getShopInfo() {
      const result = await getShopsInfo()
      if (result.code === 0) {
        this.shopInfo = result.data
      }
      // console.log(this.shopInfo)
    },
    // 2.滚动监听,做吸顶效果
    scroll(position) {
      // console.log(position.y)
      // 1.决定tabControl是否吸顶
      this.isTopFixed = -position.y >= this.tabOffsetTop
    },
    // 3.获取高度
    imgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      // console.log(this.tabOffsetTop)
    },
    // 4.保证tabControl1和tabControl2的index值相同
    tabCurrent(index) {
      this.$refs.tabControl2.currentIndex = index
      this.$refs.tabControl1.currentIndex = index
    }
  },
  components: {
    DetailHeader,
    TabControl,
    Scroll
  }
}
</script>

<style scoped lang="scss">
.detail {
  height: 100vh;
  .tabControl1 {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
  }
  .scroll {
    height: 100%;
  }
}
</style>
