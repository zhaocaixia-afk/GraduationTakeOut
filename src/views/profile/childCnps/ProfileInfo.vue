<template>
  <div class="profile-info">
    <div class="info-item">
      <div>
        <span class="count money">0.00</span>
        <span>元</span>
      </div>
      <div>我的余额</div>
    </div>
    <div class="info-item">
      <div>
        <span class="count discount">0</span>
        <span>个</span>
      </div>
      <div>我的优惠</div>
    </div>
    <div class="info-item">
      <div>
        <span class="count score">0</span>
        <span>分</span>
      </div>
      <div>我的积分</div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped lang="scss">
.profile-info {
  display: flex;
  font-size: 14px;
  text-align: center;
  justify-content: space-between;
  background: #f8f8f8;
  .info-item {
    width: 33%;
    background: #fff;
    padding: 25px 0;
    div {
      .count {
        color: #ff5f3e;
        font-size: 26px;
        font-weight: 700;
      }
      .money {
        color: rgb(255, 153, 0);
      }
      .discount {
        color: rgb(255, 101, 69);
      }
      .score {
        color: rgb(106, 194, 11);
      }
    }
  }
}
</style>
