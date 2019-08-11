import Vue from 'vue'
import Vuex from 'vuex'

import article from '@/store/modules/article'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        article
    },
    state: {
        isLogin: false,
        userCode: null,
        headPortraitUrl: null,
        token: null
    },
    getters: {
        isLogin: state => state.isLogin,
        token: state => state.token,
        userCode: state => state.userCode
    },
    mutations: {
        //保存登录状态
        userStatus(state, loginInfo) {
            state.isLogin = loginInfo.isLogin
            state.userCode = loginInfo.userCode
            state.headPortraitUrl = loginInfo.headPortraitUrl
            state.token = loginInfo.token
        }
    },
    actions: {
        userLogin({ commit }, loginInfo) {
            commit("userStatus", loginInfo)
        }
    }
})

export default store