<template>
  <div class="detail-header">
    <!-- 背景图片 -->
    <div class="detail-bg" :style="`background: url('${shopInfo.bgImg}')`"></div>
    <div class="avatar">
      <img :src="shopInfo.avatar" alt="头像" @load="imgLoad" />
    </div>
    <p class="name">{{ shopInfo.name }}</p>
    <div class="shop-message">
      <p>评价{{ shopInfo.score }}</p>
      <p>月售{{ shopInfo.sellCount }}</p>
      <p>{{ shopInfo.description }}约{{ shopInfo.deliveryTime }}分钟</p>
    </div>

    <div class="downUp transition_dom" ref="box" @click="funAnimate">
      <div class="Up" v-if="!boxShow">
        <div class="up-discount">
          <p class="up-discount-title" v-if="shopInfo.supports">
            {{ shopInfo.supports[3].name }}
          </p>
          <p class="up-discount-list" v-if="shopInfo.supports">
            {{ shopInfo.supports[3].content }}
          </p>
          <p class="up-discount-count">
            {{ discountTotal }}个优惠
            <i class="el-icon-arrow-down"></i>
          </p>
        </div>
        <div class="up-bulletin">公告:{{ shopInfo.bulletin }}</div>
      </div>
      <div class="down" v-else>
        <div class="down-discount">
          <div class="down-discount-title">
            优惠
            <i class="el-icon-arrow-up"></i>
          </div>
          <div class="down-discount-list">
            <div class="down-discount-item" v-for="(item, index) in shopInfo.supports" :key="index">
              <p class="down-discount-name">
                <span :style="{ color: colorList[item.type] }">{{ item.name }}</span>
              </p>
              <p class="down-discount-text">
                {{ item.content }}
              </p>
            </div>
          </div>
        </div>
        <div class="down-discount">
          <div class="down-discount-title">
            服务
          </div>
          <div class="down-discount-list">
            <div class="down-discount-item">
              <p class="down-discount-name"><span>满减</span></p>
              <p class="down-discount-text">
                满26元减11元，满40元减20元，满60元减25元
              </p>
            </div>
          </div>
        </div>
        <div class="down-discount">
          <div class="down-discount-title">
            公告
          </div>
          <p class="down-bulletin">{{ shopInfo.bulletin }}</p>
        </div>
      </div>
    </div>

    <i class="el-icon-arrow-up UpRorrow" v-if="boxShow" @click="funAnimate"></i>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      boxShow: false,
      colorList: ['red', 'green']
    }
  },
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    // 优惠总个数(三级菜单的渲染bug)
    discountTotal() {
      return this.shopInfo.supports && this.shopInfo.supports.length
    }
  },
  methods: {
    // 1.商家详情的展开与显示
    funAnimate() {
      if (this.boxShow) {
        this.$refs.box.style.height = '36px'
      } else {
        this.$refs.box.style.height = '530px'
      }
      this.boxShow = !this.boxShow
    },
    // 2.图片是否加载完成,导航栏的吸顶效果
    imgLoad() {
      this.$emit('imgLoad')
    }
  }
}
</script>

<style scoped lang="scss">
.detail-header {
  position: relative;
  .detail-bg {
    height: 50px;
    width: 100%;
  }
  .avatar {
    border: 1px solid yellow;
    width: 50px;
    height: 50px;
    position: absolute;
    z-index: 10;
    top: 25px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .name {
    margin-top: 20px;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
  }
  .shop-message {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 0 70px;
    color: $gray;
  }

  .transition_dom {
    transition: all 0.2s linear 0s;
  }
  .downUp {
    width: 100%;
    font-size: 12px;
    height: 36px;
    position: relative;
    .Up {
      width: 78%;
      margin: 0 auto;
      color: $gray;
      margin-top: 10px;
      .up-discount {
        display: flex;
        justify-content: space-between;
        .up-discount-title {
          border: 1px solid $gray;
          color: red;
          white-space: nowrap;
        }
        .up-discount-list {
          width: 200px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .up-discount-count {
          display: flex;
          font-size: 10px;
          white-space: nowrap;
        }
      }
      .up-bulletin {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 8px;
      }
    }
    .down {
      // background: blue;
      padding: 0 20px;
      .down-discount {
        font-size: 12px;
        color: #999;
        margin-top: 10px;
        .down-discount-title {
          display: flex;
          align-content: center;
          justify-content: space-between;
          font-size: 14px;
          color: black;
          i {
            color: #999;
          }
        }
        .down-discount-list {
          .down-discount-item {
            display: flex;
            line-height: 30px;
            .down-discount-name {
              margin-right: 8px;
              span {
                color: red;
                border: 1px solid #999;
              }
            }
            .down-discount-text {
            }
          }
        }
        .down-bulletin {
          margin-top: 10px;
          line-height: 20px;
        }
      }
    }
  }

  .UpRorrow {
    font-size: 50px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    color: #999;
  }
}
</style>
