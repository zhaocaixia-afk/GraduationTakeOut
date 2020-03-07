<template>
  <div class="detail-goods">
    <p class="recommend">商家推荐</p>
    <div class="recommend-wrapper" ref="recommendWrapper">
      <ul class="recommend-content" ref="recommendContent">
        <el-card v-for="(item, index) in this.recommendList" :key="index">
          <img :src="item.image" alt="" />
          <p class="good-name">{{ item.name }}</p>
          <p class="good-sellCount">月售{{ item.sellCount }}</p>
          <div class="price-count">
            <div class="price">
              <p class="good-price">¥{{ item.price }}</p>
              <p class="good-oldPrice" v-if="item.oldPrice">¥{{ item.oldPrice }}</p>
            </div>
            <!-- 添加组件 -->
            <cart-control :good="item" />
          </div>
        </el-card>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

import { mapState } from 'vuex'

import CartControl from 'components/common/cartControl/CartControl'

export default {
  name: 'DetailGoods',
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch('getGoodsList', () => {
      this._initScorll()
    })
  },
  computed: {
    // 1.获取了推荐视频列表
    ...mapState({
      recommendList: state => state.detail.recommendList
    })
  },
  methods: {
    // 1. 横向滚动初始化
    _initScorll() {
      // 设置content的宽度
      if (this.recommendList) {
        let itemWidth = 150
        let margin = 8
        let width = (itemWidth + margin) * this.recommendList.length
        this.$refs.recommendContent.style.width = width + 'px'
        this.$nextTick(() => {
          if (!this.picScroll) {
            this.picScroll = new BScroll('.recommend-wrapper', {
              // click: true,
              scrollX: true
            })
          }
        })
      }
    }
  },
  components: {
    CartControl
    // Scroll
  }
}
</script>

<style scoped lang="scss">
.detail-goods {
  width: 100vw;
  .recommend {
    line-height: 40px;
    font-weight: bold;
    font-size: 18px;
    padding-left: 15px;
  }
  .recommend-wrapper {
    width: 100vw;
    height: 180px;
    overflow: hidden;
    margin-left: 15px;
    .recommend-content {
      display: flex;
      /deep/ .el-card {
        width: 150px;
        height: 180px;
        margin-right: 8px;
        &__body {
          padding: 0;
          .good-name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-left: 6px;
          }
          .good-sellCount {
            color: $gray;
            font-size: 13px;
            margin: 5px 0 2px 6px;
          }
          .price-count {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 6px;
            .price {
              display: flex;
              align-items: center;
              .good-price {
                color: red;
              }
              .good-oldPrice {
                text-decoration: line-through;
                font-size: 12px;
                margin-left: 5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
