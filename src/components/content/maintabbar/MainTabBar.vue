<template>
  <tab-bar>
    <tab-bar-item path="/msite">
      <span slot="item-icon">
        <i class="el-icon-eleme"></i>
      </span>
      <p slot="item-text">外卖</p>
    </tab-bar-item>
    <tab-bar-item path="/search">
      <span slot="item-icon">
        <i class="el-icon-search"></i>
      </span>
      <p slot="item-text">搜索</p>
    </tab-bar-item>
    <tab-bar-item path="/order">
      <span slot="item-icon">
        <i class="el-icon-tickets"></i>
      </span>
      <p slot="item-text">订单</p>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <span slot="item-icon">
        <i class="el-icon-user"></i>
      </span>
      <p slot="item-text">我的</p>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style lang="scss" scoped></style>
