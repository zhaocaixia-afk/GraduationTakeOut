<template>
  <div>
    <!-- 商品详情 -->
    <!-- <good :good="good" ref="good" /> -->
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
// import Scroll from 'components/common/scroll/Scroll'
// import { mapState } from 'vuex'

// import CartControl from 'components/common/cartControl/CartControl'
// import Good from './Good'

export default {
  name: 'DetailGoods',
  data() {
    return {
      good: {}
    }
  },
  mounted() {
    // this.$store.dispatch('getGoodsList', () => {
    //   // this._initScorll()
    // })
  },
  computed: {
    // 1.获取了推荐视频列表
    // ...mapState({
    //   recommendList: state => state.detail.recommendList
    // })
  },
  methods: {
    // 2.点击商品,出现详情页面
    showGood(good) {
      this.good = good
      // 父组件通过ref使用子组件中的方法
      this.$refs.good.toggleShow()
    }
  },
  components: {
    // CartControl,
    // Good
    // Scroll
  }
}
</script>

<style scoped lang="scss">
.scroll {
  width: 100vw;
  height: 300px;
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
