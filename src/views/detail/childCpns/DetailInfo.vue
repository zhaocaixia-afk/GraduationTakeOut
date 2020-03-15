<template>
  <scroll class="detail-info">
    <!-- {{ shopInfo }} -->
    <section>
      <h3 class="section-title">配送信息</h3>
      <p class="delivery">
        <span class="delivery-icon">{{ shopInfo.description }}</span>
        <span>由商家提供配送，约 {{ shopInfo.deliveryTime }} 分钟到达，距离 {{ shopInfo.distance }}</span>
      </p>
      <p class="delivery-money">配送费¥{{ shopInfo.deliveryPrice }}</p>
    </section>
    <div class="split"></div>
    <section>
      <h3 class="section-title">活动与服务</h3>
      <li class="active-item" v-for="(item, index) in shopInfo.supports" :key="index">
        <span class="active-title activity-green" :class="activeClassList[item.type]">{{ item.name }}</span>
        <span>{{ item.content }}</span>
      </li>
    </section>
    <div class="split"></div>
    <section>
      <h3 class="section-title">商家实景</h3>
      <div class="imgWrapper" ref="imgWrapper">
        <div class="content" ref="imgContent">
          <img :src="img" alt="" v-for="(img, index2) in shopInfo.pics" :key="index2" />
        </div>
      </div>
    </section>
    <div class="split"></div>
    <section>
      <h3 class="section-title">商家信息</h3>
      <p class="info-item">
        <span class="title">品类</span>
        <span class="text">{{ shopInfo.category }}</span>
      </p>
      <p class="info-item">
        <span class="title">商家电话</span>
        <span class="text">{{ shopInfo.phone }}</span>
      </p>
      <p class="info-item">
        <span class="title">地址</span>
        <span class="text">{{ shopInfo.address }}</span>
      </p>
      <p class="info-item">
        <span class="title">营业时间</span>
        <span class="text">{{ shopInfo.workTime }}</span>
      </p>
    </section>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import BScroll from 'better-scroll'

import { mapState } from 'vuex'

export default {
  name: 'DetailInfo',
  data() {
    return {
      scroll: null,
      activeClassList: ['activity-green', 'activity-red', 'activity-orange']
    }
  },
  mounted() {
    this._initScoreX()
  },
  computed: {
    ...mapState({
      shopInfo: state => state.detail.shopInfo
    })
  },
  methods: {
    _initScoreX() {
      if (this.shopInfo) {
        let itemWidth = 80
        let margin = 10
        let width = (itemWidth + margin) * this.shopInfo.pics.length
        this.$refs.imgContent.style.width = width + 'px'
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.imgWrapper, {
            scrollX: true
          })
        })
      }
    }
  },
  components: {
    Scroll
  }
}
</script>

<style scoped lang="scss">
.detail-info {
  height: calc(100% - 172px - 44px);
  section {
    padding: 16px 14px 14px;
    color: $text-color;
    font-size: 14px;
    .section-title {
      font-weight: 700;
      font-size: 16px;
      color: black;
    }
    .delivery {
      margin-top: 5px;
      line-height: 24px;
      .delivery-icon {
        font-size: 12px;
        background: #0097ff;
        color: $white;
        padding: 2px 8px;
        border-radius: 4px;
        margin-right: 5px;
      }
    }
    .active-item {
      line-height: 26px;
      .active-title {
        font-size: 12px;
        padding: 0 3px;
        color: $white;
        border-radius: 2px;
        margin-right: 8px;
        &.activity-green {
          background-color: rgb(112, 188, 70);
        }
        &.activity-red {
          background-color: rgb(240, 115, 115);
        }
        &.activity-orange {
          background-color: rgb(241, 136, 79);
        }
      }
    }
    .active-item:first-of-type {
      margin-top: 5px;
    }
    .imgWrapper {
      width: 100%;
      padding-top: 10px;
      .content {
        img {
          margin-right: 10px;
          width: 80px;
          height: 80px;
          display: inline-block;
          background: red;
        }
      }
    }
    .info-item {
      display: flex;
      justify-content: space-between;
      line-height: 30px;
      .title {
        color: black;
      }
      .text {
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
}
</style>
