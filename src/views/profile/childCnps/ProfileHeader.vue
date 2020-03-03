<template>
  <div class="profile-header">
    <div class="avatar">
      <icon-svg icon-class="iconrenyuan" class="avatar-svg"></icon-svg>
    </div>
    <div class="login-info">
      <div class="login" v-if="!userInfo.phone">
        {{ userInfo.name ? userInfo.name : '登录/注册' }}
      </div>
      <div class="phone">
        <img src="~assets/img/profile/phone.svg" />
        {{ userInfo.phone ? userInfo.phone : '暂无绑定手机号' }}
      </div>
    </div>
    <div class="arrow">
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Profile',
  data() {
    return {}
  },
  props: {
    userInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scoped lang="scss">
.profile-header {
  display: flex;
  align-items: center;
  background: #ff5777;
  color: #fff;
  height: 85px;
  padding-left: 15px;
  .avatar {
    .avatar-svg {
      width: 70px;
      height: 70px;
      border-radius: 35px;
      background: #f2f2f2;
      vertical-align: middle;
    }
  }
  .login-info {
    margin-left: 15px;
    .login {
      font-size: 18px;
    }
    .phone {
      font-size: 14px;
      margin-top: 9px;
      display: flex;
      align-items: center;
      img {
        width: 18px;
        height: 18px;
      }
    }
  }
  .arrow {
    position: absolute;
    right: 30px;
    font-size: 26px;
  }
}
</style>
