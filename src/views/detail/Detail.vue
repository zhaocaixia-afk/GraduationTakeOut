<template>
  <div>
    <detail-header :shop-info="shopInfo" />
    <!-- detail -->
  </div>
</template>
<script>
import { getShopsInfo } from 'network/detail'

import DetailHeader from './childCpns/DetailHeader'

export default {
  name: 'Detail',
  data() {
    return {
      shopInfo: {}
    }
  },
  mounted() {
    this._getShopInfo()
  },
  methods: {
    async _getShopInfo() {
      const result = await getShopsInfo()
      if (result.code === 0) {
        this.shopInfo = result.data
      }
      console.log(this.shopInfo)
    }
  },
  components: {
    DetailHeader
  }
}
</script>
<style scoped lang="scss"></style>
