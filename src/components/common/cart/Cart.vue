<template>
  <div>
    <div class="cart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <!-- 动态添加highlight -->
            <div class="logo">
              <!-- 动态添加highlight -->
              <i class="el-icon-shopping-cart-2"></i>
            </div>
            <div class="num">1</div>
          </div>
          <div class="price-desc">
            <div class="price">¥{{ totalPrice }}</div>
            <div class="desc">另需配送费¥4元</div>
          </div>
        </div>
        <div class="content-right">
          <!-- 动态添加enough和not-enough -->
          <div class="pay enough">¥15元起送</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Cart',
  computed: {
    ...mapState({
      cartGoodsList: state => state.detail.cartGoodsList
    }),
    ...mapGetters(['totalCount', 'totalPrice'])
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
        // display: inline-block;
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
}
</style>
