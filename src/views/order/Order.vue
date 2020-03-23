<template>
  <div class="order">
    <nav-bar bgColor="red">
      <div slot="left">
        <i class="el-icon-back"></i>
      </div>
      <div slot="center">购物车</div>
      <div slot="right">清空</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'Order',
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped></style>
