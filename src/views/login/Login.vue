<template>
  <div class="login">
    <p class="go-back" @click="$router.back()">
      <i class="el-icon-arrow-left"></i>
    </p>
    <h2 class="logo">外卖</h2>
    <!-- 两种方式切换的地方 -->
    <div class="login-title">
      <a
        href="javascript:;"
        :class="{ active: loginWay }"
        @click="loginWay = true"
        >短信登录</a
      >
      <a
        href="javascript:;"
        :class="{ active: !loginWay }"
        @click="loginWay = false"
        >密码登录</a
      >
    </div>
    <!-- 两种表单 -->
    <message-login v-if="loginWay"/>
    <password-login v-else/>
    <p class="about">关于我们</p>
  </div>
</template>
<script>
import MessageLogin from "./childCpns/MessageLogin";
import PasswordLogin from "./childCpns/PasswordLogin";

export default {
  name: "Login",
  data() {
    return {
      loginWay: true //默认短信登录
    };
  },
  components: {
    MessageLogin,
    PasswordLogin
  }
};
</script>
<style lang="scss" scoped>
.login {
  .go-back {
    font-size: 26px;
    margin: 10px 0 0 10px;
  }
  .logo {
    margin-top: 50px;
    font-size: 40px;
    font-weight: bold;
    color: $green;
    text-align: center;
  }
  .login-title {
    display: flex;
    justify-content: space-between;
    padding: 0 100px;
    margin: 20px 0;
    font-size: 15px;
    font-weight: 700;
    .active {
      color: $green;
      border-bottom: 2px solid $green;
      padding-bottom: 5px;
    }
  }
  .about {
    text-align: center;
    font-size: 12px;
    margin-top: 20px;
    color: $gray;
  }
}
</style>
