<template>
  <div class="cart-control">
    <!-- 减少符号 -->
    <transition name="move">
      <i class="el-icon-remove" v-show="good.count" @click.stop="updateFoodCount(false)"></i>
    </transition>

    <!-- 中间数字 -->
    <div class="cart-count" v-show="good.count">{{ good.count }}</div>
    <!-- 增加符号 -->
    <i class="el-icon-circle-plus" @click.stop="updateFoodCount(true)"></i>
  </div>
</template>

<script>
export default {
  name: 'CartControl',
  data() {
    return {}
  },
  props: {
    good: {
      type: Object,
      default() {
        return {}
      }
    },
    topLevel: Number,
    shopName: String
  },
  methods: {
    updateFoodCount(isAdd) {
      this.$store.dispatch('updateFoodCount', { isAdd, good: this.good, topLevel: this.topLevel, shopName: this.shopName })
    }
  }
}
</script>

<style scoped lang="scss">
.cart-control {
  font-size: 0;
  display: flex;
  align-items: center;

  .el-icon-remove {
    font-size: 24px;
    color: green;
    cursor: pointer;
    &.move-enter-active,
    &.move-leave-active {
      transition: all 0.3s;
    }
    &.move-enter,
    &.move-leave-to {
      opacity: 0;
      transform: translateX(15px) rotate(180deg);
    }
  }

  .cart-count {
    margin: 0 6px;
    text-align: center;
    font-size: 10px;
    color: $gray;
  }

  .el-icon-circle-plus {
    font-size: 24px;
    color: green;
    cursor: pointer;
  }
}
</style>
