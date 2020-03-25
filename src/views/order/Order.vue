<template>
  <div class="cart">
    <nav-bar>
      <div slot="left">
        <i class="el-icon-back" @click="$router.back()"></i>
      </div>
      <div slot="center">购物车</div>
      <div slot="right" @click="clearCart">清空</div>
    </nav-bar>
    <scroll class="scroll">
      <cart-list-item v-for="(item, index) in totalList" :key="index" :shop="item" @update="update"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartListItem from './child/CartListItem'
import Scroll from 'components/common/scroll/Scroll'

import { getStore, setStore } from 'common/util'
import { mapGetters } from 'vuex'

export default {
  name: 'Order',
  data() {
    return {
      totalList: []
    }
  },
  created() {
    this.totalList = getStore('totalList')
  },
  computed: {
    ...mapGetters(['getTotalList'])
  },
  watch: {
    getTotalList(val) {
      this.totalList = val
    }
  },
  methods: {
    clearCart() {
      this.$confirm('此操作将清空购物车, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
        .then(() => {
          // 各自购物车
          this.totalList.forEach(item => {
            setStore(`cart${item.shopId}`, [])
          })
          // 各自的数据列表
          this.totalList.forEach(item => {
            let a = getStore(item.shopId)
            item.list.forEach(item2 => {
              a[item2.topLevel].foods.forEach(item3 => {
                item3.count = 0
              })
            })
            setStore(item.shopId, a)
          })
          // 总的购物车列表
          this.totalList = []
          setStore('totalList', this.totalList)
        })
        .catch(() => {})
    },
    update(id) {
      // 购物车清空cart1:[]
      setStore(`cart${id}`, [])
      // 1对应的数据修改:count:0
      let a = getStore(id)
      this.totalList = getStore('totalList')
      let tem = this.totalList.find(item => item.shopId === id).list
      tem.forEach(item => {
        // item.count和item.topLevel
        a[item.topLevel].foods.forEach(item => (item.count = 0))
        setStore(id, a)
      })
      // totalList里面删除这一项
      this.totalList = getStore('totalList')
      let b = this.totalList.findIndex(item => item.shopId === id)
      this.totalList.splice(b, 1)
      setStore('totalList', this.totalList)
    }
  },
  components: {
    NavBar,
    CartListItem,
    Scroll
  }
}
</script>

<style lang="scss" scoped>
.cart {
  .scroll {
    height: calc(100vh - 44px - 49px);
  }
}
</style>
