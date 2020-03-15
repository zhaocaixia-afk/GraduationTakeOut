<template>
  <scroll class="scroll detail-ratings" ref="scroll">
    <!-- 头部 -->
    <div class="overview">
      <div class="overview-left">
        <h2 class="score">{{ shopInfo.score }}</h2>
        <p class="title">综合评分</p>
        <p class="rank">高于周边商家69.2%</p>
      </div>
      <div class="overview-right">
        <div class="score-wrapper">
          <Star :size="36" :score="shopInfo.deliveryScore" />
          <span class="title">服务态度</span>
          <span class="score">{{ shopInfo.deliveryScore }}</span>
        </div>
        <div class="score-wrapper">
          <Star :size="36" :score="shopInfo.foodScore" />
          <span class="title">商品评分</span>
          <span class="score">{{ shopInfo.foodScore }}</span>
        </div>
        <div class="delivery-wrapper">
          <span class="title">送达时间</span>
          <span class="delivery">{{ shopInfo.deliveryTime }} 分钟</span>
        </div>
      </div>
    </div>
    <div class="split"></div>
    <!-- 全部、满意、不满意 -->
    <div class="ratingsselect">
      <div class="rating-type">
        <p :class="{ active: selectType === 2 }" @click="setSelectType(2)">
          全部<span class="count">{{ ratingsList.length }}</span>
        </p>
        <p :class="{ active: selectType === 0 }" @click="setSelectType(0)">
          满意<span class="count">{{ positiveSize }}</span>
        </p>
        <p :class="{ active: selectType === 1 }" @click="setSelectType(1)">
          不满意<span class="count">{{ ratingsList.length - positiveSize }}</span>
        </p>
      </div>
      <div class="switch" :class="{ on: onlyShowText }">
        <i class="el-icon-success" @click="toggleOnlyShowText"></i>
        <span class="text">只看有内容的评价</span>
      </div>
    </div>
    <!-- 评论列表 -->
    <div class="rating-wrapper">
      <li class="rating-item" v-for="(item, index) in filterRatings" :key="index">
        <img :src="item.userUrl" class="avatar" />
        <div class="content">
          <div class="name-time">
            <p class="name">{{ item.userName }}</p>
            <p class="time">{{ item.commentTime }}</p>
          </div>
          <star :score="item.score" :size="24" class="star"></star>
          <p class="text">{{ item.comment }}</p>
          <div class="img-list" v-if="item.picUrls.length">
            <img :src="img.url" alt="" class="img-item" v-for="(img, index2) in item.picUrls" :key="index2" />
          </div>
          <div class="recommend" v-if="item.recommend.length">
            <icon-svg icon-class="iconzan" class="item-svg down"></icon-svg>
            <span v-for="(recommend, index3) in item.recommend" :key="index3">{{ recommend }}</span>
          </div>
        </div>
      </li>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import Star from 'components/common/star/Star'

import { getShopRatingsList } from 'network/detail'
import { mapState } from 'vuex'

export default {
  name: 'DetailRatings',
  data() {
    return {
      ratingsList: [],
      onlyShowText: true, //只看有内容按钮
      selectType: 2 //2全部,0满意,1不满意
    }
  },
  created() {
    this._getShopRatingsList()
  },
  computed: {
    ...mapState({
      shopInfo: state => state.detail.shopInfo
    }),
    // 监听属性不能接触state中的值
    positiveSize() {
      return this.totalPositiveSize()
    },
    // 筛选数组的显示
    filterRatings() {
      return this._filterRatings()
    }
  },
  methods: {
    // 1.获取到的评论列表
    async _getShopRatingsList() {
      const result = await getShopRatingsList({ id: this.$route.query.id })
      if (result.code === 0) {
        this.ratingsList = result.data.comments
        console.log(this.ratingsList)
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
      }
    },
    // 2.统计满意的长度
    totalPositiveSize() {
      // 0代表满意,1代表不满意
      return this.ratingsList.reduce((total, rating) => total + (!rating.rateType ? 1 : 0), 0)
    },
    // 3.评论数组的筛选
    _filterRatings() {
      const { ratingsList, onlyShowText, selectType } = this
      return ratingsList.filter(rating => {
        const { rateType, comment } = rating
        return (selectType === 2 || selectType === rateType) && (!onlyShowText || comment.length > 0)
      })
    },
    // 全选、满意、不满意按钮点击
    setSelectType(index) {
      this.selectType = index
    },
    toggleOnlyShowText() {
      this.onlyShowText = !this.onlyShowText
    }
  },
  components: {
    Scroll,
    Star
  }
}
</script>

<style scoped lang="scss">
.detail-ratings {
  height: calc(100% - 172px - 44px);
  // 头部
  .overview {
    display: flex;
    padding: 18px 0;
    .overview-left {
      width: 137px;
      border-right: 1px solid rgba(7, 17, 27, 0.1);
      text-align: center;
      .score {
        font-size: 24px;
        color: $orgin;
      }
      .title {
        margin: 8px 0;
        font-size: 12px;
      }
      .rank {
        font-size: 10px;
        color: $text-color;
      }
    }
    .overview-right {
      flex: 1;
      // background: blue;
      padding: 0 30px;
      text-align: center;
      font-size: 12px;
      .score-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 8px 0;
        .score {
          color: $orgin;
        }
      }
    }
    .delivery-wrapper {
      .title {
        font-size: 14px;
        margin-right: 6px;
      }
      .delivery {
        color: $text-color;
      }
    }
  }
  .split {
    width: 100%;
    height: 16px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    background: #f3f5f7;
  }
  // 全部、满意、不满意
  .ratingsselect {
    padding: 20px 0 10px 18px;
    border: 1px solid rgba(7, 17, 27, 0.1);
    .rating-type {
      display: flex;
      margin-bottom: 18px;
      p {
        cursor: pointer;
        padding: 8px 12px;
        margin-right: 8px;
        font-size: 12px;
        color: rgb(77, 85, 93);
        background: rgba(77, 85, 93, 0.2);
        &.active {
          background: $green;
          color: $white;
        }
        .count {
          font-size: 8px;
          margin-left: 2px;
        }
      }
    }
    .switch {
      display: flex;
      align-items: center;
      color: rgb(147, 153, 159);
      &.on {
        i {
          color: $green;
        }
      }
      i {
        cursor: pointer;
        font-size: 24px;
        margin-right: 5px;
      }
      .text {
        font-size: 12px;
      }
    }
  }
  // 评论列表
  .rating-wrapper {
    padding: 0 18px;
    width: 100%;
    height: 100%;
    .rating-item {
      display: flex;
      padding: 18px 0;
      font-size: 12px;
      .avatar {
        display: block;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: red;
        margin-right: 10px;
      }
      .content {
        flex: 1;
        .name-time {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: rgb(7, 0.17, 0.27);
          .time {
            color: $text-color;
          }
        }
        .star {
          margin: 5px 0;
        }
        .text {
          margin-bottom: 5px;
          line-height: 16px;
        }
        .img-list {
          .img-item {
            display: inline-block;
            width: 80px;
            height: 80px;
            margin: 0 5px 5px 0;
          }
        }
        .recommend {
          margin-top: 5px;
          width: 90%;
          .item-svg {
            &.up {
              color: $orgin;
            }
            &.down {
              color: rgb(147, 153, 159);
            }
          }
          span {
            display: inline-block;
            padding: 0 6px;
            border: 1px solid rgba(7, 17, 27, 0.1);
            border-radius: 1px;
            margin: 0 6px;
            margin-bottom: 4px;
          }
        }
      }
    }
  }
}
</style>
