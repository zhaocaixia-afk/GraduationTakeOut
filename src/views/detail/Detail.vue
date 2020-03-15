<template>
  <div class="detail">
    <detail-header :shop-info="shopInfo" />
    <tab-control :tab-list="tabList" :id="id" :current-path="currentPath" ref="tabControl2" class="tabControl2" />
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import DetailHeader from './childCpns/DetailHeader'
import TabControl from './childCpns/TabControl'

export default {
  name: 'Detail',
  data() {
    return {
      id: 0,
      tabList: [
        { path: '/detail', text: '点餐' },
        { path: '/ratings', text: '评价' },
        { path: '/info', text: '商家' }
      ],
      currentPath: '/detail'
    }
  },
  mounted() {
    this.id = this.$route.query.id

    this._getShopInfo()
  },
  computed: {
    ...mapState({
      shopInfo: state => state.detail.shopInfo
    })
  },
  watch: {
    $route: {
      handler(val) {
        // console.log(val.path)
        // console.log(oldval)
        this.currentPath = val.path
      }
    }
  },
  methods: {
    // 1.获取商家详情
    _getShopInfo() {
      this.$store.dispatch('_getShopInfo', this.id)
    }
  },
  components: {
    DetailHeader,
    TabControl
  }
}
</script>

<style scoped lang="scss">
.detail {
  height: 100vh;
}
</style>
