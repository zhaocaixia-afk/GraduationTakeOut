<template>
  <div class="shops-item" @click="showDetail(shop.id)">
    <img :src="`${basicURL}${shop.image_path}`" alt="" class="avator" @load="imageLoad" />
    <div class="text b-b">
      <div class="title">{{ shop.name }}</div>
      <div class="first-line">
        <p class="rating-count">
          <Star :size="24" :score="shop.rating" />
          {{ shop.rating }}
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
    </div>
  </div>
</template>

<script>
import Star from 'components/common/star/Star'
import { BASIC_IMG } from 'common/const'

export default {
  name: 'ShopsListItem',
  data() {
    return {
      basicURL: BASIC_IMG
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
    },
    showDetail(id) {
      // $router.push('/detail/' + shop.id)
      this.$router.push({
        path: '/detail',
        query: { id }
      })
    }
  },
  components: {
    Star
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
    // border-bottom: 1px solid #eee;
    font-size: 15px;
    .title {
      width: 200px;
      color: #333;
      font-size: 16px;
      font-weight: bold;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-top: 5px;
      &::before {
        content: '品牌';
        display: inline-block;
        font-size: 11px;
        line-height: 11px;
        color: #333;
        background-color: #ffd930;
        padding: 3px;
        border-radius: 2px;
        margin-right: 5px;
      }
    }
    .first-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 10px;
      margin: 15px 0;
      .rating-count {
        display: flex;
        color: $orgin;
        .count {
          margin-left: 5px;
          color: $text-color;
        }
      }
      .delivery_mode {
        background: rgb(3, 166, 255);
        color: $white;
        font-size: 12px;
        height: 12px;
      }
    }
    .second-line {
      font-size: 12px;
      // margin: 10px 0;
      display: flex;
      justify-content: space-between;
      color: $text-color;
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
  }
}
</style>
