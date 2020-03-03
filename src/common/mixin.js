import AlertTip from '../components/common/alertTip/AlertTip.vue'

export const loginMixin = {
  data() {
    return {
      result: {},
      alertShow: false,
      showText: ''
    }
  },
  methods: {
    // 1.登录结果的处理
    loginResult() {
      if (this.result.code === 0) {
        const user = this.result.data
        // 4.5.1 将user保存到vuex中
        this.$store.dispatch('saveUserInfo', user)
        // 4.5.2 跳转到个人中心界面
        this.$router.replace('/profile')
      } else {
        // 4.5.3 提示错误信息
        this.showAlert(this.result.msg)
      }
    },
    // 2.提示框抽离成一个函数
    showAlert(showText) {
      this.alertShow = true
      this.showText = showText
    },
    // 3.提示框组件回调的关闭提示框函数
    closeTip() {
      this.alertShow = false
      this.showText = ''
    }
  },
  components: {
    AlertTip
  }
}
