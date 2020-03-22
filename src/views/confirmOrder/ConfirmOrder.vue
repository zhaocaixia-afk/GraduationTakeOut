<template>
  <div class="confirm-order">
    <nav-bar>
      <div slot="left">
        <i class="el-icon-arrow-left" @click="$router.back()"></i>
      </div>
      <div slot="center">确认订单</div>
    </nav-bar>

    <scroll class="scroll">
      <div class="basic-message">
        <div class="place b-b">
          <p class="local">
            <span>{{ address.address }}</span>
            <i class="el-icon-arrow-right"></i>
          </p>
          <p class="user">
            <span class="name">{{ userInfo.name }}</span>
            <span v-if="userInfo.phone">{{ userInfo.phone }}</span>
            <span v-else>暂无手机号码</span>
          </p>
        </div>
        <div class="identical b-b">
          <p>立即送出</p>
          <p>
            <span class="blue">约{{ deliveryTime }}送达</span>
            <i class="el-icon-arrow-right"></i>
          </p>
        </div>
        <div class="identical">
          <p>支付方式</p>
          <p>
            <span class="blue">支付宝</span>
            <i class="el-icon-arrow-right"></i>
          </p>
        </div>
      </div>

      <div class="goods-list">
        <p class="shop-name">{{ shopInfo.name }}</p>

        <div class="list-item b-b" v-for="(item, index) in cartList" :key="index">
          <img class="avatar" :src="item.icon" alt="" />
          <p class="good-name">{{ item.name }}</p>
          <div class="price-container">
            <p class="good-num">×{{ item.count }}</p>
            <p class="old-price" v-show="item.oldPrice"><span>¥</span>{{ item.oldPrice }}</p>
            <p class="now-price"><span>¥</span>{{ item.price }}</p>
          </div>
        </div>

        <div class="other-money">
          <div>
            <span class="small-name">包装费</span>
            <p class="name">餐盒</p>
          </div>
          <p class="money"><span>¥</span>{{ lunchbox }}</p>
        </div>

        <div class="other-money">
          <div>
            <span class="small-name">配送费</span>
            <p class="name" v-if="shopInfo.description">蜂鸟快送</p>
          </div>
          <p class="money"><span>¥</span>{{ shopInfo.deliveryPrice }}</p>
        </div>
      </div>

      <div class="order-message">
        <div class="item b-b">
          <p class="name">订单备注</p>
          <p class="explain">
            <span>点击可选择</span>
            <i class="el-icon-arrow-right"></i>
          </p>
        </div>
        <div class="item b-b">
          <p class="name">餐具份数</p>
          <p class="explain">
            <span>点击可选择</span>
            <i class="el-icon-arrow-right"></i>
          </p>
        </div>
        <div class="item b-b">
          <p class="name">发票信息</p>
          <p class="explain">
            <span>未选择</span>
            <i class="el-icon-arrow-right"></i>
          </p>
        </div>
        <div class="item b-b">
          <p class="name">号码保护</p>
          <p class="explain">
            <span>点击可选择</span>
            <i class="el-icon-arrow-right"></i>
          </p>
        </div>
      </div>
    </scroll>

    <div class="confirm">
      <div class="pay-money">
        <span class="money">¥{{ totalPrice }}</span>
        <span class="discount">已优惠¥{{ originalPrice }}</span>
      </div>
      <div class="btn" @click="openFullScreen2">
        确认支付
      </div>
    </div>

    <div class="pay-success" v-if="isSuccess">
      <i class="el-icon-success"></i>
      <p>支付成功</p>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import { mapState } from 'vuex'

import { getSession, getStore } from 'common/util'
import { USER_INFO } from 'common/const'

export default {
  name: 'ConfirmOrder',
  data() {
    return {
      userInfo: {},
      cartList: [],
      isSuccess: false
    }
  },
  computed: {
    ...mapState({
      address: state => state.msite.address,
      shopInfo: state => state.detail.shopInfo
    }),
    // 预计送到时间
    deliveryTime() {
      let nowDate = new Date()
      let hours = nowDate.getHours()

      let minutes = nowDate.getMinutes()
      const time = this.shopInfo.deliveryTime
      minutes = minutes + time

      if (minutes === 60) {
        hours++
        minutes = '00'
      } else if (minutes > 60) {
        hours++
        minutes = minutes - 60
        if (minutes < 10) {
          minutes = '0' + minutes
        }
      }
      return `${hours}:${minutes}`
    },
    // 餐盒费用
    lunchbox() {
      return this.cartList.reduce((total, item) => total + item.count, 0)
    },
    // 总支付金额
    totalPrice() {
      let tem = this.cartList.reduce((total, item) => total + item.count * item.price, 0)
      tem = tem + this.lunchbox + this.shopInfo.deliveryPrice
      return tem
    },
    // 已优惠价格
    originalPrice() {
      var num = 0
      for (let i = 0; i < this.cartList.length; i++) {
        if (this.cartList[i].oldPrice) {
          num = num + this.cartList[i].oldPrice * this.cartList[i].count
        } else {
          num = num + this.cartList[i].price * this.cartList[i].count
        }
      }
      num = num + this.lunchbox + this.shopInfo.deliveryPrice - this.totalPrice
      return num
    }
  },
  created() {
    this.userInfo = getSession(USER_INFO)
    this.cartList = getStore(`cart${this.$route.params.id}`)
  },
  methods: {
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: '支付中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(() => {
        loading.close()
        this.isSuccess = true
        // 跳转页面
        setTimeout(() => {
          this.isSuccess = false
        }, 2000)
      }, 2000)
    }
  },
  components: {
    NavBar,
    Scroll
  }
}
</script>

<style scoped lang="scss">
.confirm-order {
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgb(0, 133, 253) 0%, #fff 50%, rgb(222, 225, 230) 100%);
  .scroll {
    height: calc(100vh - 44px - 49px);
    .basic-message {
      background: #fff;
      margin: 0 10px;
      padding: 0 10px;
      .place {
        padding: 15px 0;
        .local {
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            font-size: 20px;
            font-weight: bold;
          }
          margin-bottom: 5px;
        }
        .user {
          font-size: 14px;
          color: $text-color;
          .name {
            margin-right: 5px;
          }
        }
      }
      .identical {
        display: flex;
        justify-content: space-between;
        line-height: 60px;
        &.time {
          border-bottom: 1px solid $text-color;
        }
        p {
          .blue {
            color: blue;
            margin-right: 5px;
          }
        }
      }
    }

    .goods-list {
      margin: 10px 10px 0;
      background: white;
      padding: 0 15px 15px;
      .shop-name {
        line-height: 40px;
        font-weight: bold;
      }
      .list-item {
        display: flex;
        align-items: center;
        padding: 10px 0;
        img {
          display: inline-block;
          width: 50px;
          height: 50px;
          background: pink;
          // margin-right: 15px;
        }
        .good-name {
          width: 35%;
          margin: 0 25px 0 15px;
        }
        .price-container {
          flex: 1;
          display: flex;
          justify-content: space-between;
          .old-price {
            color: $text-color;
            text-decoration: line-through;
            span {
              font-size: 13px;
            }
          }
          .now-price {
            // float: right;
            span {
              font-size: 13px;
            }
          }
        }
      }
      .other-money {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
        .small-name {
          font-size: 13px;
          float: left;
          border: 1px solid gray;
          margin-right: 10px;
        }
        .name {
          float: left;
        }
        .money {
          span {
            font-size: 13px;
          }
        }
      }
    }

    .order-message {
      margin-top: 10px;
      background: white;
      margin: 10px;
      .item {
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        line-height: 50px;
        .name {
          font-weight: bold;
        }
        .explain {
          color: $text-color;
          i {
            margin-left: 10px;
            font-size: 18px;
          }
        }
      }
      .item:last-of-type {
        border-bottom: none;
      }
    }
  }

  .confirm {
    z-index: 10;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 49px;
    display: flex;
    justify-content: space-between;
    .pay-money {
      flex: 1;
      height: 100%;
      background: rgb(65, 64, 69);
      display: flex;
      align-items: center;
      .money {
        color: white;
        font-size: 20px;
        margin-left: 20px;
        margin-right: 20px;
      }
      .discount {
        border-left: 1px solid gray;
        color: gray;
        padding-left: 10px;
        font-size: 14px;
      }
    }
    .btn {
      height: 100%;
      width: 120px;
      background: $blue;
      color: $white;
      line-height: 49px;
      text-align: center;
    }
  }

  .pay-success {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(240, 249, 235);
    color: $green;
    z-index: 10;
    padding: 10px 20px;
    i {
      font-size: 30px;
      margin-bottom: 10px;
    }
  }
}
</style>
