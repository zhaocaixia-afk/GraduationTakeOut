<template>
  <scroll class="scroll detail-ratings">
    <!-- 头部 -->
    <div class="overview">
      <div class="overview-left">
        <h2 class="score">4.5</h2>
        <p class="title">综合评分</p>
        <p class="rank">高于周边商家69.2%</p>
      </div>
      <div class="overview-right">
        <div class="score-wrapper">
          <!-- <Star :size="36" :score="4.5" /> -->
          <span class="title">服务态度</span>
          <span class="score">4.6</span>
        </div>
        <div class="score-wrapper">
          <!-- <Star :size="36" :score="4.5" /> -->
          <span class="title">商品评分</span>
          <span class="score">4.6</span>
        </div>
        <div class="delivery-wrapper">
          <span class="title">送达时间</span>
          <span class="delivery">30 分钟</span>
        </div>
      </div>
    </div>
    <div class="split"></div>
    <!-- 全部、满意、不满意 -->
    <div class="ratingsselect">
      <div class="rating-type">
        <p class="active">全部<span class="count">30</span></p>
        <p>满意<span class="count">10</span></p>
        <p>不满意<span class="count">3</span></p>
      </div>

      <div class="switch on">
        <i class="el-icon-success"></i>
        <span class="text">只看有内容的评价</span>
      </div>
    </div>
    <!-- 评论列表 -->
    <div class="rating-wrapper">
      <li class="rating-item">
        <div class="avatar">
          <!-- <img src="" alt="" /> -->
        </div>
        <div class="content">
          <p class="name"></p>
        </div>
      </li>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
// import Star from 'components/common/star/Star'

export default {
  name: 'DetailRatings',
  components: {
    Scroll
    // Star
  }
}
</script>

<style scoped lang="scss">
.detail-ratings {
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
    padding-left: 20px;
    .rating-type {
      display: flex;
      margin: 18px 0;
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
    .rating-item {
      .avatar {
        img {
          width: 28px;
          height: 28px;
        }
      }
      .content {
      }
    }
  }
}
</style>
