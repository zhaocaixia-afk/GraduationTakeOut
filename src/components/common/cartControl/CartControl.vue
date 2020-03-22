<template>
  <div class="cart-control">
    <!-- 减少符号 -->
    <transition name="move">
      <i class="el-icon-remove" v-show="good.count" @click.stop="updateFoodCount(false)"></i>
    </transition>

    <!-- 中间数字 -->
    <div class="cart-count" v-show="good.count">{{ good.count }}</div>
    <!-- 增加符号 -->
    <i class="el-icon-circle-plus" @click.stop="updateFoodCount(true)"></i>
  </div>
</template>

<script>
// import { getStore, getSession, setStore, setSession } from '../../../common/util'
// import { NOW_SHOP } from '../../../common/const'

// import Vue from 'vue'

export default {
  name: 'CartControl',
  data() {
    return {
      // temObj: {},
      // cartList: []
    }
  },
  props: {
    good: {
      type: Object,
      default() {
        return {}
      }
    },
    topLevel: Number
  },
  methods: {
    updateFoodCount(isAdd) {
      this.$store.dispatch('updateFoodCount', { isAdd, good: this.good, topLevel: this.topLevel })

      // this.temObj = getStore(getSession(NOW_SHOP))
      // this.cartList = getSession(getSession(NOW_SHOP)) || []
      // // console.log(this.temObj)
      // // console.log(this.good, this.topLevel)

      // if (isAdd) {
      //   // 增加操作
      //   if (!this.good.count) {
      //     Vue.set(this.good, 'count', 1)
      //     this.cartList.push(this.good)
      //     // console.log(this.cartList)
      //     // 第一大类：存储购物车列表(sessionStorage)
      //     setSession(getSession(NOW_SHOP), this.cartList)
      //   } else {
      //     this.good.count++
      //     // 第一大类：存储购物车列表
      //     const index = this.cartList.findIndex(item => item.name === this.good.name)
      //     this.cartList.splice(index, 1, this.good)
      //     setSession(getSession(NOW_SHOP), this.cartList)
      //   }
      //   // 第二大类(lacalStorage)
      //   let a = this.temObj[this.topLevel].foods.findIndex(item => item.name === this.good.name)
      //   // 第二大类
      //   this.temObj[this.topLevel].foods.splice(a, 1, this.good)
      //   // 第二大类
      //   setStore(getSession(NOW_SHOP), this.temObj)
      // } else {
      //   // 减少操作
      //   if (this.good.count) {
      //     this.good.count--
      //     // 购物车中存储
      //     const indexD = this.cartList.findIndex(item => item.name === this.good.name)
      //     this.cartList.splice(indexD, 1, this.good)
      //     setSession(getSession(NOW_SHOP), this.cartList)
      //     // 总存储
      //     const b = this.temObj[this.topLevel].foods.findIndex(item => item.id === this.good.id)
      //     this.temObj[this.topLevel].foods.splice(b, 1, this.good)
      //     setStore(getSession(NOW_SHOP), this.temObj)

      //     if (this.good.count === 0) {
      //       // 购物车
      //       this.cartList.splice(indexD, 1)
      //       setSession(getSession(NOW_SHOP), this.cartList)
      //     }
      //   }
      // }
    }
  }
}
</script>

<style scoped lang="scss">
.cart-control {
  font-size: 0;
  display: flex;
  align-items: center;

  .el-icon-remove {
    font-size: 24px;
    color: green;
    cursor: pointer;
    &.move-enter-active,
    &.move-leave-active {
      transition: all 0.3s;
    }
    &.move-enter,
    &.move-leave-to {
      opacity: 0;
      transform: translateX(15px) rotate(180deg);
    }
  }

  .cart-count {
    margin: 0 6px;
    text-align: center;
    font-size: 10px;
    color: $gray;
  }

  .el-icon-circle-plus {
    font-size: 24px;
    color: green;
    cursor: pointer;
  }
}
</style>
