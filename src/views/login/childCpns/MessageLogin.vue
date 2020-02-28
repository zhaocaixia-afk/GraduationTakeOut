<template>
  <div class="message-login">
    <el-form ref="MessageLoginRef" :model="messageModel" :rules="messageRules">
      <el-form-item class="phone" prop="phone">
        <el-input type="tel" placeholder="手机号" v-model="messageModel.phone" clearable>
          <el-button
            slot="append"
            :disabled="!rightPhone"
            @click.prevent="getCode"
            >{{
              computTime > 0 ? `已发送(${computTime}s)` : "获取验证码"
            }}</el-button
          >
        </el-input>
      </el-form-item>
      <el-form-item class="code" prop="code">
        <el-input
          type="tel"
          placeholder="验证码"
          v-model="messageModel.code"
          clearable
        ></el-input>
      </el-form-item>
      <section class="login-hint">
        温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
        <a href="javascript:;">《用户服务协议》</a>
      </section>
      <el-form-item class="btn">
        <el-button @click="phoneLogin">登录</el-button>
      </el-form-item>
    </el-form>

    <alert-tip
      :alertText="showText"
      v-if="alertShow"
      @closeTip="closeTip"
    ></alert-tip>
  </div>
</template>
<script>
import { reqSendCode, phoneLogin } from "network/login"
import AlertTip from "components/common/alertTip/AlertTip"

import {loginMixin} from 'common/mixin'

export default {
  name: "MessageLogin",
  mixins: [loginMixin],
  data() {
    // 1.自定义校验规则(手机号he验证码)
    var checkPhone = (rule, value, cb) => {
      if (!value) {
        return cb(new Error("手机号不能为空"));
      }
      const regPhone = /^1(3|4|5|6|7|8|9)\d{9}$/;
      if (regPhone.test(value)) {
        return cb();
      }
      cb(new Error("请输入合法的手机号"));
    };
    var checkCode = (rule, value, cb) => {
      if (!value) {
        return cb(new Error("验证码不能为空"));
      }
      const regCode = /^\d{6}$/;
      if (regCode.test(value)) {
        return cb();
      }
      cb(new Error("请输入正确的验证码"));
    };
    return {
      messageModel: {
        phone: "17311688120",
        code: ""
      },
      messageRules: {
        phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          { validator: checkPhone, trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { validator: checkCode, trigger: "blur" }
        ]
      },
      computTime: 0,
      isClick: false   //是否点击获取验证码按钮
    };
  },
  computed: {
    rightPhone() {
      return /^1(3|4|5|6|7|8|9)\d{9}$/.test(this.messageModel.phone);
    }
  },
  methods: {
    // 1.获取短信验证码he倒计时
    async getCode() {
      // 1.1 开启倒计时
      if (!this.computTime) {
        this.computTime = 30;
        this.timeId = setInterval(() => {
          this.computTime--;
          if (this.computTime <= 0) {
            clearInterval(this.timeId);
          }
        }, 1000);
        // 1.2 获取短信验证码
        const result = await reqSendCode(this.messageModel.phone);
        // 1.3 展示错误信息he停止计时器
        if (result.code === 1) {
          this.showAlert(result.msg);
          this.stopTime();
        }
      }
      // 1.2 获取验证码按钮是否点击(未获取验证码,乱输入,登录)
      this.isClick = true
    },
    // 2和3: 提示框的显示和确认抽离到mixin
    // 4.手机号码和验证码登录
    phoneLogin() {
      this.$refs.MessageLoginRef.validate(async valid => {
        // 4.1 表单验证
        if(!valid) return;
        // 4.2 是否点击获取验证码按钮
        if(!this.isClick){
          this.showAlert('短信验证码错误')
          return;
        }
        // 4.3 登录请求
        this.result = await phoneLogin(this.messageModel);
        // 4.4 停止计时器(是否登录成功)
        this.stopTime();
        // 4.5 判断是否登录成功
        this.loginResult()  // mixin里面的函数
      });
    },
    // 5.停掉计时器的方法
    stopTime() {
      if (this.computTime) {
        this.computTime = 0;
        clearInterval(this.timeId);
        this.timeId = undefined;
      }
    }
  }
};
</script>
<style scoped lang="scss">
.message-login {
  .el-form {
    padding: 0 30px;
    .login-hint {
      font-size: 14px;
      color: $gray;
    }
    .btn {
      text-align: center;
      .el-button {
        background: $green;
        color: white;
        padding: 13px 100px;
        margin-top: 20px;
        font-size: 16px;
      }
    }
  }
}
</style>
