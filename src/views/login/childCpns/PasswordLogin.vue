<template>
  <el-form ref="passwordRef" :model="passwordModel" :rules="passwordRules" class="password-login">
    <el-form-item prop="name">
      <el-input
        v-model="passwordModel.name"
        type="text"
        maxlength="11"
        placeholder="手机/邮箱/用户名"
      ></el-input>
    </el-form-item>
    <el-form-item prop="pwd">
      <!-- element-ui中input的密码框 -->
      <el-input
        placeholder="请输入密码"
        v-model="passwordModel.pwd"
        show-password
      ></el-input>
    </el-form-item>
    <el-form-item class="captcha" prop="captcha">
      <el-input v-model="passwordModel.captcha" placeholder="验证码"></el-input>
      <img src="http://localhost:4000/captcha" alt="captcha" />
    </el-form-item>
    <el-form-item class="btn">
      <el-button>登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "PasswordLogin",
  data() {
    return {
      passwordModel: {
        name: "",
        pwd: "",
        captcha: ""
      },
      passwordRules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 6, message: '长度为3到6之间', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    };
  }
};
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
      background: $green;
      color: white;
      padding: 13px 100px;
      margin-top: 20px;
      font-size: 16px;
    }
  }
}
// office
// 知网:
// 国内外分析
// 论文提纲
</style>
