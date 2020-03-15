<template>
  <div>
    <div class="cart">
      <div class="content" v-show="!headerOpen">
        <div class="content-left" @click="toggleShow">
          <div class="logo-wrapper">
            <!-- 动态添加highlight -->
            <div class="logo" :class="{ highlight: totalCount }">
              <!-- 动态添加highlight -->
              <i class="el-icon-shopping-cart-2" :class="{ highlight: totalCount }"></i>
            </div>
            <div class="num" v-if="totalCount">{{ totalCount }}</div>
          </div>
          <div class="price-desc">
            <div class="price">¥{{ totalPrice }}</div>
            <div class="desc">另需配送费¥{{ shopInfo.deliveryPrice }}元</div>
          </div>
        </div>
        <div class="content-right">
          <!-- 动态添加enough和not-enough -->
          <div class="pay" :class="payClass">{{ patText }}</div>
        </div>
      </div>

      <transition name="move">
        <div class="cart-list" v-show="listShow">
          <div class="list-header">
            <h2 class="title">购物车</h2>
            <span class="empty" @click="clearCart">清空</span>
          </div>
          <scroll class="scroll" ref="scroll">
            <li class="food" v-for="(food, index) in cartGoodsList" :key="index">
              <span class="name">{{ food.name }}</span>
              <div class="price-count">
                <span class="price">¥{{ food.price }}</span>
                <cart-control :good="food"></cart-control>
              </div>
            </li>
          </scroll>
        </div>
      </transition>
    </div>

    <div class="list-mask" v-show="listShow" @click="toggleShow"></div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import CartControl from 'components/common/cartControl/CartControl'
import Scroll from '../scroll/Scroll'

export default {
  name: 'Cart',
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    ...mapState({
      cartGoodsList: state => state.detail.cartGoodsList,
      headerOpen: state => state.detail.headerOpen,
      shopInfo: state => state.detail.shopInfo
    }),
    ...mapGetters(['totalCount', 'totalPrice']),
    // 结算按钮的样式
    payClass() {
      return this.totalPrice >= this.shopInfo.minPrice ? 'enough' : 'not-enough'
    },
    // 结算按钮的文字
    patText() {
      const { totalPrice } = this
      const { minPrice } = this.shopInfo
      if (totalPrice === 0) {
        return `¥${minPrice}元起送`
      } else if (totalPrice < minPrice) {
        return `还差¥${minPrice - totalPrice}元起送`
      } else {
        return `结算`
      }
    },
    // 购物车列表是否显示
    listShow() {
      // if (this.headerOpen) {
      //   this.updateIsShow()
      // }
      // 1.作用是：当购物车列表减到0时，消失掉
      if (!this.totalCount) {
        this.updateIsShow()
        return false
      }
      // 2.数据得到后，才能够更新
      if (this.isShow) {
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
      }
      // 3.DetailHeader控制cart显示
      // if (this.headerOpen) {
      //   this.updateIsShow()
      // }
      return this.isShow
      // console.log(this.isShow)
    }
  },
  methods: {
    // 1.isShow的切换
    toggleShow() {
      if (this.totalCount > 0) {
        this.isShow = !this.isShow
      }
    },
    // 2.computed中对data数据的修改,ESLint
    updateIsShow() {
      this.isShow = false
    },
    // 3.清空购物车
    clearCart() {}
  },
  components: {
    CartControl,
    Scroll
  }
}
</script>

<style scoped lang="scss">
.cart {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  height: 48px;
  .content {
    height: 100%;
    display: flex;
    background: #141d27;
    color: rgba(255, 255, 255, 0.4);
    .content-left {
      flex: 1;
      display: flex;
      .logo-wrapper {
        position: relative;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: #141d27;
        top: -10px;
        margin: 0 12px;
        .logo {
          width: 46px;
          height: 46px;
          margin: 5px;
          background: #2b343c;
          border-radius: 50%;
          text-align: center;
          &.highlight {
            background: green;
          }
          i {
            font-size: 24px;
            line-height: 46px;
            color: #80858a;
            &.highlight {
              color: #fff;
            }
          }
        }
        .num {
          position: absolute;
          top: 0;
          right: 0;
          background: rgb(240, 20, 20);
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
          color: #fff;
          padding: 2px 8px;
          font-size: 9px;
          border-radius: 30px;
        }
      }
      .price-desc {
        .price {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          margin: 5px 0;
          padding-left: 8px;
        }
        .desc {
          font-size: 10px;
        }
      }
    }
    .content-right {
      width: 105px;
      // background: blue;
      .pay {
        line-height: 48px;
        text-align: center;
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        &.not-enough {
          background: #2b333b;
        }
        &.enough {
          background: #00b43c;
          // color: #fff;
        }
      }
    }
  }
  .cart-list {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    transform: translateY(-100%);
    &.move-enter-active,
    &.move-leave-active {
      transition: transform 0.3s;
    }
    &.move-enter,
    &.move-leave-to {
      transform: translateY(0);
    }
    .list-header {
      height: 40px;
      line-height: 40px;
      padding: 0 18px;
      background: #f3f5f7;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 14px;
        color: rgb(7, 17, 27);
      }
      .empty {
        font-size: 12px;
        color: rgb(0, 160, 220);
      }
    }
    .scroll {
      max-height: 217px;
      overflow: hidden;
      background: #fff;
      .food {
        padding: 12px 18px;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        .name {
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .price-count {
          display: flex;
          align-items: center;
          .price {
            margin-right: 10px;
            font-size: 14px;
            font-weight: 700;
            color: rgb(240, 20, 20);
          }
        }
      }
    }
  }
}

.list-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 40;
  background: rgba(7, 17, 27, 0.6);
  &.fade-enter-active,
  &.fade-leave-active {
    transition: all 0.5s;
  }
  &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
    background: rgba(7, 17, 27, 0);
  }
}
</style>
