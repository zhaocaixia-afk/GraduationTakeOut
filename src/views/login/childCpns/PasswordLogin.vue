<template>
  <div>
    <el-form ref="passwordRef" :model="passwordModel" :rules="passwordRules" class="password-login">
      <el-form-item prop="name">
        <el-input v-model="passwordModel.name" type="text" maxlength="11" placeholder="手机/邮箱/用户名"></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <!-- element-ui中input的密码框 -->
        <el-input placeholder="请输入密码" v-model="passwordModel.pwd" show-password></el-input>
      </el-form-item>
      <el-form-item class="captcha" prop="captcha">
        <el-input v-model="passwordModel.captcha" placeholder="验证码"></el-input>
        <img src="http://localhost:4000/captcha" alt="captcha" ref="captcha" @click="getCaptcha" />
      </el-form-item>
      <el-form-item class="btn">
        <el-button @click="passwordLogin">登录</el-button>
      </el-form-item>
    </el-form>

    <alert-tip :alertText="showText" v-if="alertShow" @closeTip="closeTip"></alert-tip>
  </div>
</template>

<script>
import { passwordLogin } from 'network/login'
import { loginMixin } from 'common/mixin'

export default {
  name: 'PasswordLogin',
  mixins: [loginMixin],
  data() {
    return {
      passwordModel: {
        name: 'abc',
        pwd: '123',
        captcha: ''
      },
      passwordRules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 6, message: '长度为3到6之间', trigger: 'blur' }
        ],
        pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 1.登录按钮点击
    passwordLogin() {
      this.$refs.passwordRef.validate(async valid => {
        if (!valid) return
        this.result = await passwordLogin(this.passwordModel)
        this.loginResult()
        this.getCaptcha()
      })
    },
    // 2.得到图形验证码
    getCaptcha() {
      this.$refs.captcha.src = 'http://localhost:4000/captcha?time=' + Date.now()
    }
  }
}
</script>

<style scoped lang="scss">
.el-form {
  padding: 0 30px;
  .captcha {
    display: flex;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 5px;
    /deep/ .el-form-item__content {
      .el-input {
        .el-input__inner {
          border: none;
        }
      }
    }
    img {
      position: absolute;
      width: 110px;
      height: 40px;
    }
  }
  .btn {
    text-align: center;
    .el-button {
      background: $blue;
      color: white;
      padding: 13px 100px;
      margin-top: 20px;
      font-size: 16px;
    }
  }
}
</style>
