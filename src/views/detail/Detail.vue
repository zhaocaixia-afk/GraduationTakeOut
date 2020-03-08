<template>
  <div class="detail">
    <detail-header :shop-info="shopInfo" />
    <tab-control :tab-list="tabList" ref="tabControl2" class="tabControl2" @tabCurrent="tabCurrent" />
    <router-view />
  </div>
</template>

<script>
import { getShopsInfo } from 'network/detail'

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
      ]
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
    tabCurrent(index) {
      this.$refs.tabControl2.currentIndex = index
    }
  },
  components: {
    DetailHeader,
    TabControl
  }
}
</script>

<style scoped lang="scss"></style>
