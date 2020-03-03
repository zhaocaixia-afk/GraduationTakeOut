<template>
  <div class="alert-tip">
    <section>
      <div class="tip-icon">
        <i class="el-icon-warning-outline"></i>
      </div>
      <p class="tip-text">{{ alertText }}</p>
      <div class="confirm" @click="closeTip">确认</div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'AlertTip',
  props: {
    alertText: {
      type: String
    }
  },
  methods: {
    closeTip() {
      this.$emit('closeTip')
    }
  }
}
</script>
<style scoped lang="scss">
.alert-tip {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.5);
  section {
    width: 220px;
    height: 180px;
    background: $white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    border-radius: 10px;
    text-align: center;
    padding-top: 20px;
    .tip-icon {
      font-size: 60px;
    }
    .tip-text {
      margin: 17px 0;
    }
    .confirm {
      background: $green;
      color: $white;
      line-height: 40px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
}
</style>
