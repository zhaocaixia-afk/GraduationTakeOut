export const loginMixin = {
    data(){
        return{
            result: {}
        }
    },
    methods: {
        loginResult(){
            if(this.result.code === 0){
                const user = this.result.data
                // 4.5.1 将user保存到vuex中
                this.$store.dispatch('saveUserInfo',user)
                // 4.5.2 跳转到个人中心界面
                this.$router.replace('/profile')
            }else{
                // 4.5.3 提示错误信息
                this.showAlert(this.result.msg)
            }
        }
    }
}