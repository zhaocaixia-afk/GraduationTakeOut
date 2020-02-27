// const SAVE_USER_INFO = 'saveUserInfo'

const state = {
    userInfo: {}
}
const mutations = {
    SaveUserInfo(state,payload){
        state.userInfo = payload
    }
}
const actions = {
    saveUserInfo(context,payload){
        context.commit('SaveUserInfo',payload)
    }
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}
