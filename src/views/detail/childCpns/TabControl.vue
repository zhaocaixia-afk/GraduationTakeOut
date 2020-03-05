<template>
  <div class="tab-control">
    <div class="tab-item" :class="currentIndex === index ? 'active' : ''" v-for="(item, index) in tabList" :key="index" @click="changeTab(index)">
      <router-link :to="item.path">{{ item.text }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    tabList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    changeTab(index) {
      this.currentIndex = index
      this.$emit('tabCurrent', index)
    }
  }
}
</script>

<style scoped lang="scss">
.tab-control {
  background: white;
  width: 100%;
  // margin: 0 auto;
  display: flex;
  height: 44px;
  line-height: 44px;
  border-bottom: 1px solid $gray;
  .tab-item {
    flex: 1;
    text-align: center;
  }
  .active {
    a {
      color: green;
      padding-bottom: 10px;
      border-bottom: 2px solid green;
    }
  }
}
</style>
