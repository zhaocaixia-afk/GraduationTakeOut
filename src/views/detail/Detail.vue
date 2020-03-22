<template>
  <div class="detail">
    <detail-header :shop-info="shopInfo" />
    <tab-control :tab-list="tabList" class="tabControl2" :active-name="activeName" />
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import { setSession, getSession } from 'common/util'
import { NOW_SHOP } from 'common/const'

import DetailHeader from './childCpns/DetailHeader'
import TabControl from './childCpns/TabControl'

export default {
  name: 'Detail',
  data() {
    return {
      tabList: [
        { path: '/detail', text: '点餐', name: 'detail' },
        { path: '/ratings', text: '评价', name: 'ratings' },
        { path: '/info', text: '商家', name: 'info' }
      ],
      activeName: 'detail'
    }
  },
  mounted() {
    setSession(NOW_SHOP, this.$route.params.id)
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
        // console.log(val) // ratings/1
        this.activeName = val.name
      }
    }
  },
  methods: {
    // 1.获取商家详情
    _getShopInfo() {
      this.$store.dispatch('_getShopInfo', getSession(NOW_SHOP))
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
