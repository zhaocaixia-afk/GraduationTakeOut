<template>
  <div class="goods-list">
    <scroll ref="menuWrapper" class="menu-wrapper">
      <li class="menu-item" v-for="(item, index) in goodsList" :key="index" :class="{ current: index == currentIndex }" @click="changeItem(index)">
        <img :src="item.icon" v-if="item.icon" alt="" />
        {{ item.name }}
      </li>
    </scroll>
    <div class="right-goods">
      <h2 class="list-hook-fixed">{{ titleList[currentIndex] }}</h2>
      <scroll ref="goodsWrapper" class="goods-wrapper" @scroll="scroll" :probe-type="3">
        <li class="good-list-hook" v-for="(item, index) in goodsList" :key="index" ref="goodListHook">
          <h2 class="title">{{ item.name }}</h2>
          <ul>
            <li class="good-item" v-for="(good, index2) in item.foods" :key="index2" @click="showGood(good)">
              <img class="icon" :src="good.icon" alt="" />
              <div class="content">
                <h2 class="name">{{ good.name }}</h2>
                <p class="desc" v-show="good.description">{{ good.description }}</p>
                <div class="extra">
                  <span class="count">月售{{ good.sellCount }}份</span>
                  <span v-if="good.rating">好评率{{ good.rating }}%</span>
                </div>
                <div class="price-count">
                  <div class="price">
                    <span class="now">¥{{ good.price }}</span>
                    <span class="old" v-if="good.oldPrice">¥{{ good.oldPrice }}</span>
                  </div>
                  <cart-control :good="good" />
                </div>
              </div>
            </li>
          </ul>
        </li>
      </scroll>
    </div>

    <cart></cart>

    <!-- 商品详情 -->
    <good :good="good" ref="good" />
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import CartControl from 'components/common/cartControl/CartControl'
import Cart from 'components/common/cart/Cart'
import Good from './Good'

import { getShopGoodsList } from 'network/detail'

export default {
  name: 'DetailGoods',
  data() {
    return {
      goodsList: [], //商品数据
      currentIndex: 0, //左侧此时的当前项
      good: {}, //good点击出现详情数据
      tops: [], //初始化top的数组
      titleList: [] //左侧title的集合,为了右侧的头部显示
    }
  },
  mounted() {
    this._getShopGoodsList()
  },
  methods: {
    async _getShopGoodsList() {
      const result = await getShopGoodsList({ id: this.$route.query.id })
      if (result.code === 0) {
        this.goodsList = result.data.goods
        this.$nextTick(() => {
          // better-scroll的刷新
          this.$refs.menuWrapper.refresh()
          this.$refs.goodsWrapper.refresh()
          this._initTops()
          this._initTitle()
        })
      }
    },
    // 2.点击商品,出现详情页面
    showGood(good) {
      this.good = good
      // 父组件通过ref使用子组件中的方法
      this.$refs.good.toggleShow()
    },
    // 3.点击左侧切换右侧
    changeItem(index) {
      this.currentIndex = index
      this.$refs.goodsWrapper.scrollTo(0, -this.tops[index], 200)
    },
    // 4.初始化tops数组
    _initTops() {
      const tops = []
      this.$refs.goodListHook.forEach(item => {
        // console.log(item.offsetTop)
        tops.push(item.offsetTop)
      })
      tops.push(Number.MAX_VALUE)
      this.tops = tops
      // console.log(this.tops)
    },
    // 5.初始化左侧标题数组
    _initTitle() {
      this.goodsList.forEach(item => {
        this.titleList.push(item.name)
      })
    },
    // 6.scroll滚动
    scroll(position) {
      // currentIndex的改变影响着左侧和右侧头部内容的改变
      let scrollTop = -position.y
      let length = this.tops.length
      for (let i = 0; i < length; i++) {
        if (this.currentIndex !== i && scrollTop >= this.tops[i] && scrollTop < this.tops[i + 1]) {
          this.currentIndex = i
        }
      }
      if (this.currentIndex <= 1) {
        this.$refs.menuWrapper.scrollTo(0, 0, 200)
      }
      if (this.currentIndex >= 7) {
        // 注意数值里面添加了一个最大值
        this.$refs.menuWrapper.scrollTo(0, -54 * (length - 9) - 48, 200)
      }
    }
  },
  components: {
    CartControl,
    Good,
    Scroll,
    Cart
  }
}
</script>

<style scoped lang="scss">
.goods-list {
  display: flex;
  width: 100%;
  height: calc(100% - 172px - 44px);
  padding-bottom: 48px;
  .menu-wrapper {
    width: 80px;
    // height: 442px;
    height: 100%;
    background: #f3f5f7;
    .menu-item {
      height: 54px;
      width: 100%;
      text-align: center;
      line-height: 54px;
      font-size: 12px;
      &.current {
        background: #fff;
      }
      img {
        width: 12px;
        height: 12px;
      }
    }
  }
  .right-goods {
    position: relative;
    flex: 1;
    height: 100%;
    // 固定的导航头
    .list-hook-fixed {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 22;

      padding-left: 10px;
      height: 26px;
      line-height: 26px;
      font-size: 12px;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }
    .goods-wrapper {
      height: 100%;
      .title {
        padding-left: 10px;
        height: 26px;
        line-height: 26px;
        font-size: 12px;
        color: rgb(147, 153, 159);
        background: #f3f5f7;
      }
      .good-item {
        display: flex;
        align-items: center;
        margin: 18px;
        padding-bottom: 18px;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        &:last-child {
          border-bottom: none;
        }
        .icon {
          width: 60px;
          height: 60px;
          margin-right: 15px;
        }
        .content {
          flex: 1;
          .name {
            font-size: 14px;
            color: rgb(7, 17, 27);
            line-height: 20px;
          }
          .desc,
          .extra {
            font-size: 10px;
            line-height: 20px;
            color: rgb(147, 153, 159);
          }
          .desc {
            width: 160px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .extra {
            .count {
              margin-right: 12px;
            }
          }
          .price-count {
            display: flex;
            justify-content: space-between;
            .price {
              font-weight: 700;
              line-height: 20px;
              .now {
                margin-right: 8px;
                font-size: 14px;
                color: rgb(240, 20, 20);
              }
              .old {
                text-decoration: line-through;
                font-size: 10px;
                color: rgb(147, 153, 159);
              }
            }
          }
        }
      }
    }
  }
}
</style>
