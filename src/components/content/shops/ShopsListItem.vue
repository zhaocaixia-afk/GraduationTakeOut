<template>
  <div class="shops-item" @click="$router.push('/detail')">
    <img :src="`${basicURL}${shop.image_path}`" alt="" class="avator" @load="imageLoad" />
    <div class="text">
      <div class="title">{{ shop.name }}</div>
      <div class="first-line">
        <p class="rating-count">
          <span class="rating">{{ shop.rating }}</span>
          <span class="count">月售{{ shop.rating_count }}</span>
        </p>
        <p class="delivery_mode" v-if="shop.delivery_mode.text">{{ shop.delivery_mode.text }}</p>
      </div>
      <div class="second-line">
        <p class="min-free">
          <span class="minPrice">起送¥{{ shop.float_minimum_order_amount }}</span>
          <span class="delivery-free">{{ shop.float_delivery_fee ? `配送费${shop.float_delivery_fee}` : '免配送费' }}</span>
        </p>
        <p class="time-distance">
          <span class="time">{{ shop.order_lead_time }}分钟</span>
          <span class="distance">{{ shop.distance }}km</span>
        </p>
      </div>
      <div class="three-line">
        <p>55减20</p>
        <p>55减20</p>
        <p>55减20</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopsListItem',
  data() {
    return {
      basicURL: 'https://fuss10.elemecdn.com'
    }
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    // 1.图片加载完成
    imageLoad() {
      this.$bus.$emit('itemImageLoad')
    }
  }
}
</script>

<style lang="scss" scoped>
.shops-item {
  padding: 10px 10px 0 10px;
  display: flex;
  .avator {
    width: 90px;
    height: 90px;
    border: 1px solid #eee;
    border-radius: 5px;
    margin-right: 10px;
  }
  .text {
    flex: 1;
    border-bottom: 1px solid #eee;
    font-size: 15px;
    .title {
      width: 220px;
      font-size: 18px;
      font-weight: bold;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 10px;
    }
    .first-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 15px;
      .rating-count {
        .rating {
          color: rgb(243, 104, 9);
          margin-right: 10px;
        }
        .count {
          color: rgb(128, 128, 128);
        }
      }
      .delivery_mode {
        background: rgb(3, 166, 255);
        color: white;
        font-size: 12px;
        height: 12px;
      }
    }
    .second-line {
      font-size: 15px;
      margin: 6px 0;
      display: flex;
      justify-content: space-between;
      color: rgb(128, 128, 128);
      .min-free {
        .minPrice {
          margin-right: 5px;
        }
      }
      .time-distance {
        .time {
          margin-right: 5px;
        }
      }
    }
    .three-line {
      font-size: 15px;
      display: flex;
      margin: 10px 0;
      p {
        margin-right: 6px;
        border: 1px solid rgb(248, 182, 169);
        color: rgb(205, 73, 48);
      }
    }
  }
}
</style>
