<template>
  <div class="good" v-if="isShow">
    <div class="good-cover" @click="toggleShow"></div>
    <div class="good-content">
      <div class="image-header">
        <img :src="good.image" alt="" />
        <p class="goodpanel-desc">{{ good.info }}</p>
        <div class="back" @click="toggleShow">
          <i class="el-icon-arrow-left"></i>
        </div>
      </div>
      <div class="content">
        <h2 class="title">{{ good.name }}</h2>
        <div class="detail">
          <span class="sell-count">月售{{ good.sellCount }}</span>
          <span class="rating">{{ good.rating === 0 ? '暂无评价' : '好评率' + good.rating + '%' }}</span>
        </div>
        <div class="price">
          <p class="now-old">
            <span class="now">¥{{ good.price }}</span>
            <span class="old" v-show="good.oldPrice">¥{{ good.oldPrice }}</span>
          </p>
          <cart-control :good="good" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartControl from '../../../components/common/cartControl/CartControl'

export default {
  name: 'Good',
  data() {
    return {
      isShow: false
    }
  },
  props: {
    good: Object
  },
  methods: {
    toggleShow() {
      this.isShow = !this.isShow
    }
  },
  components: {
    CartControl
  }
}
</script>

<style scoped lang="scss">
.good {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  height: 100%;
  width: 100%;
  .good-cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 55;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .good-content {
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 66%;
    background: #fff;
    z-index: 66;
    .image-header {
      position: relative;
      width: 100%;
      height: 70%;
      img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
      .goodpanel-desc {
        font-size: 10px;
        color: #ddd;
        letter-spacing: 0;
        position: absolute;
        bottom: 10px;
        left: 10px;
      }
      .back {
        position: absolute;
        top: 10px;
        left: 0;
        i {
          font-size: 26px;
          color: $white;
        }
      }
    }
    .content {
      padding: 15px;
      .title {
        font-size: 16px;
        font-weight: 700;
        color: rgb(7, 17, 27);
      }
      .detail {
        margin: 15px 0;
        font-size: 13px;
        color: $gray;
      }
      .price {
        display: flex;
        justify-content: space-between;
        .now-old {
          font-weight: 700;
          .now {
            font-size: 14px;
            margin-right: 12px;
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
</style>
