<template>
  <div class="tab-control">
    <div class="tab-item" v-for="(item, index) in tabList" :key="index" @click="changeTab(item.path)" :class="{ active: item.name === activeName }">
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
import { getSession } from 'common/util'
import { NOW_SHOP } from 'common/const'

export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex: 0,
      pathList: ['/detail', '/ratings', '/info']
    }
  },
  props: {
    tabList: {
      type: Array,
      default() {
        return []
      }
    },
    activeName: String
    // currentPath: String,
    // id: Number
  },
  watch: {
    // // 监听传过来的path值
    // currentPath(val) {
    //   // console.log(val)
    //   this.currentIndex = this.pathList.findIndex(item => item === val)
    // }
  },
  methods: {
    changeTab(path) {
      this.$router.push({
        path: `${path}/${getSession(NOW_SHOP)}`
      })
    }
  }
}
</script>

<style scoped lang="scss">
.tab-control {
  width: 100%;
  display: flex;
  height: 44px;
  line-height: 44px;
  border-bottom: 1px solid $gray;
  .tab-item {
    flex: 1;
    text-align: center;
  }
  .active {
    span {
      color: green;
      padding-bottom: 10px;
      border-bottom: 2px solid green;
    }
  }
}
</style>
