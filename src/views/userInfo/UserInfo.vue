<template>
  <div class="user-info">
    <nav-bar>
      <div slot="left">
        <i class="el-icon-arrow-left" @click="$router.back()"></i>
      </div>
      <div slot="center">个人资料</div>
    </nav-bar>

    <scroll class="scroll">
      <p class="small-title">基础信息</p>

      <div class="basicmessage-item b-b">
        <span>头像</span>
        <p class="right">
          <span class="avatar">
            <i class="el-icon-eleme"></i>
          </span>
          <i class="el-icon-arrow-right"></i>
        </p>
      </div>
      <div class="basicmessage-item b-b">
        <span>用户名</span>
        <p class="right">
          <span>{{ userInfoName }}</span>
          <i class="el-icon-arrow-right"></i>
        </p>
      </div>
      <div class="basicmessage-item b-b">
        <span>收货地址</span>
        <p class="right">
          <i class="el-icon-arrow-right"></i>
        </p>
      </div>

      <p class="small-title">账号绑定</p>

      <div class="basicmessage-item b-b">
        <p class="left">
          <icon-svg :icon-class="'iconshoujizhifu'"></icon-svg>
          <span>手机</span>
        </p>
        <p class="right">
          <i class="el-icon-arrow-right"></i>
        </p>
      </div>
      <div class="basicmessage-item b-b">
        <p class="left">
          <icon-svg :icon-class="'icontaobao'"></icon-svg>
          <span>淘宝</span>
        </p>
        <p class="right">
          <i class="el-icon-arrow-right"></i>
        </p>
      </div>
      <div class="basicmessage-item b-b">
        <p class="left">
          <icon-svg :icon-class="'iconzhifubao'"></icon-svg>
          <span>支付宝</span>
        </p>
        <p class="right">
          <i class="el-icon-arrow-right"></i>
        </p>
      </div>
      <div class="basicmessage-item b-b">
        <p class="left">
          <icon-svg :icon-class="'iconweibo'"></icon-svg>
          <span>微博</span>
        </p>
        <p class="right">
          <i class="el-icon-arrow-right"></i>
        </p>
      </div>
      <div class="basicmessage-item b-b">
        <p class="left">
          <icon-svg :icon-class="'iconweixin'"></icon-svg>
          <span>微信</span>
        </p>
        <p class="right">
          <i class="el-icon-arrow-right"></i>
        </p>
      </div>
      <div class="basicmessage-item b-b">
        <p class="left">
          <icon-svg :icon-class="'iconqq'"></icon-svg>
          <span>QQ</span>
        </p>
        <p class="right">
          <i class="el-icon-arrow-right"></i>
        </p>
      </div>
    </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import IconSvg from 'components/common/iconSvg/IconSvg'

import { getSession } from 'common/util'
import { USER_INFO } from 'common/const'
export default {
  name: 'UserInfo',
  data() {
    return {
      userInfoName: ''
    }
  },
  created() {
    this.userInfoName = getSession(USER_INFO).name || getSession(USER_INFO).phone
  },
  components: {
    NavBar,
    Scroll,
    IconSvg
  }
}
</script>

<style scoped lang="scss">
.user-info {
  .scroll {
    height: calc(100vh - 44px);
    padding: 0 10px;
    .small-title {
      font-size: 12px;
      color: $text-color;
      line-height: 60px;
    }
    .basicmessage-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 0;
      .left {
        display: flex;
        align-items: center;
        .svg-icon {
          font-size: 28px;
          margin-right: 6px;
        }
      }
      .right {
        color: $text-color;
        .avatar {
          display: inline-block;
          width: 40px;
          height: 40px;
          background: yellow;
          line-height: 40px;
          border-radius: 50%;
        }
        i {
          margin-left: 10px;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
