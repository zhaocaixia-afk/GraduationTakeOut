<template>
  <div class="tab-control">
    <div class="tab-item" :class="currentIndex === index ? 'active' : ''" v-for="(item, index) in tabList" :key="index" @click="changeTab({ path: item.path })">
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
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
    currentPath: String,
    id: Number
  },
  watch: {
    // 监听传过来的path值
    currentPath(val) {
      // console.log(val)
      this.currentIndex = this.pathList.findIndex(item => item === val)
    }
  },
  methods: {
    changeTab(obj) {
      this.$router.push({
        path: obj.path,
        query: { id: this.id }
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
