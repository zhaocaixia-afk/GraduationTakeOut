<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    // 1.初始化scroll
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    // 2.监听滚动位置
    // if(this.probeType === 2 || this.probeType === 3){
    //     this.scroll.on('scroll',position => {
    //         this.$emit('scroll',position)
    //     })
    // };
    // 3.监听滚动到底部 上拉加载更多
    // if(this.pullUpLoad){
    //     this.scroll.on('pullingUp',() => {
    //         this.$emit('pullingUp')
    //     })
    // };
  },
  methods: {
    // 1.滚动到指定位置
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    // 2.更新操作
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    // 3.获取scrollY
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    },
    // 4.加载更多
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    }
  }
}
</script>

<style lang="scss" scoped></style>
