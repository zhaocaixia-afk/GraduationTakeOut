<template>
  <div>
    <div class="shops-list" v-if="Object.keys(shopsList).length !== 0">
      <shops-list-item v-for="(shop, index) in shopsList" :key="index" :shop="shop" />
    </div>
    <img src="~assets/img/msite/shop_back.svg" v-else alt="" v-for="item in 6" :key="item" />
  </div>
</template>

<script>
import ShopsListItem from './ShopsListItem'
export default {
  name: 'ShopsList',
  props: {
    shopsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    ShopsListItem
  }
}
</script>

<style lang="scss" scoped></style>
