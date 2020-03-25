<template>
  <div class="cart-list-item">
    <div class="shop-name">
      <p class="name">{{ shop.name }}<i class="el-icon-arrow-right"></i></p>
      <i class="el-icon-delete" @click="clear(shop.shopId)"></i>
    </div>

    <div class="good-item" v-for="(item, index) in shop.list" :key="index">
      <img class="avatar" :src="item.icon" alt="" />
      <div class="name-count">
        <p class="name">{{ item.name }}</p>
        <p class="count">×{{ item.count }}</p>
      </div>
      <div class="price-container">
        <p class="price old" v-if="item.oldPrice">
          <span class="icon">¥</span>
          <span>{{ item.oldPrice }}</span>
        </p>
        <p class="price now c-r">
          <span class="icon">¥</span>
          <span>{{ item.price }}</span>
        </p>
      </div>
    </div>

    <div class="lunchbox">
      <p>餐盒</p>
      <p class="c-r"><span class="icon">¥</span>{{ lunchPrice }}</p>
    </div>

    <div class="statistics-container">
      <div class="dicount" v-if="originalPrice">
        已享受满减,优惠<span class="c-r">{{ originalPrice }}</span
        >元
      </div>
      <div class="total-money">
        <p>
          合计<span class="c-r">¥{{ totalPrice }}</span>
        </p>
        <p class="btn" @click="goplay(shop.shopId)">去结算</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartListItem',
  props: {
    shop: Object
  },
  computed: {
    lunchPrice() {
      return this.shop.list.reduce((total, item) => total + item.count, 0)
    },
    totalPrice() {
      let tem = this.shop.list.reduce((total, item) => total + item.count * item.price, 0)
      tem = tem + this.lunchPrice
      return tem
    },
    originalPrice() {
      var num = 0
      for (let i = 0; i < this.shop.list.length; i++) {
        if (this.shop.list[i].oldPrice) {
          num = num + this.shop.list[i].oldPrice * this.shop.list[i].count
        } else {
          num = num + this.shop.list[i].price * this.shop.list[i].count
        }
      }
      num = num + this.lunchPrice - this.totalPrice
      return num
    }
  },
  methods: {
    clear(id) {
      this.$confirm('此操作将清空购物车, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
        .then(() => {
          // 传递给父亲
          this.$emit('update', id)
        })
        .catch(() => {
          // console.log('取消')
        })
    },
    goplay(id) {
      this.$router.push('/confirmOrder/' + id)
    }
  }
}
</script>

<style scoped lang="scss">
.cart-list-item {
  border-bottom: 10px solid #eee;
  .shop-name {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 15px;
    i {
      color: $text-color;
    }
  }
  .good-item {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    align-items: center;
    img {
      display: inline-block;
      width: 50px;
      height: 50px;
      background: red;
    }
    .name-count {
      flex: 1;
      padding-left: 15px;
    }
    .price-container {
      display: flex;
      .price {
        .icon {
          font-size: 10px;
        }
        &.old {
          font-size: 10px;
          color: $text-color;
          margin-top: 4px;
          text-decoration: line-through;
          margin-right: 10px;
        }
      }
    }
  }
  .lunchbox {
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    p {
      .icon {
        font-size: 10px;
      }
    }
  }
  .statistics-container {
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    .dicount {
      flex: 5;
      font-size: 14px;
      color: $text-color;
    }
    .total-money {
      color: $text-color;
      flex: 4;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .btn {
        background: $green;
        color: $white;
        font-size: 14px;
        padding: 10px 10px;
        border-radius: 3px;
      }
    }
  }
}
</style>
