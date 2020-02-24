<template>
  <el-form ref="MessageLoginRef" :model="messageModel" class="message-login">
    <el-form-item class="phone">
      <el-input
        type="tel"
        maxlength="11"
        placeholder="手机号"
        v-model="messageModel.phone"
      >
        <el-button slot="append">获取验证码</el-button>
      </el-input>
    </el-form-item>
    <el-form-item class="code">
      <el-input
        type="tel"
        maxlength="8"
        placeholder="验证码"
        v-model="messageModel.code"
      ></el-input>
    </el-form-item>
    <section class="login-hint">
      温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
      <a href="javascript:;">《用户服务协议》</a>
    </section>
    <el-form-item class="btn">
      <el-button>登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "MessageLogin",
  data() {
    return {
      messageModel: {
        phone: '',
        code: ''
      }
    };
  }
};
</script>
<style scoped lang="scss">
.el-form{
    padding: 0 30px;
    .login-hint{
        font-size: 14px;
        color: $gray;
    }
    .btn{
        text-align: center;
        .el-button{
            background: $green;
            color: white;
            padding: 13px 100px;
            margin-top: 20px;
            font-size: 16px;
        }
    }
}
</style>
