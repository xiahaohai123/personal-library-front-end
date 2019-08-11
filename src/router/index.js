import Vue from 'vue'
import Router from 'vue-router'
import api from '@/api/apiList'
import store from '@/store'

import LibraryLogin from '@/components/manage/LibraryLogin.vue'
import LibraryHome from '@/components/home/LibraryHome.vue'
import LibraryIndex from '@/components/index/LibraryIndex.vue'
import articleRead from '@/components/common/article/article-read.vue'

Vue.use(Router)

const vueRouter = new Router({
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'LibraryIndex',
      component: LibraryIndex,
      beforeEnter: (to, from, next) => {
        userCheck.checkLogin(to, from, next)
      }
    },
    {
      path: '/login',
      name: 'LibraryLogin',
      component: LibraryLogin
    },
    {
      path: '/home',
      name: 'LibraryHome',
      component: LibraryHome,
      beforeEnter: (to, from, next) => {
        userCheck.checkLogin(to, from, next)
      }
    },
    {
      path: '/:userCode/:tagId',
      component: articleRead
    }
  ]
})

const userCheck = {
  checkLogin: (to, from, next) => {
    if (localStorage.getItem('token') != null) {

      // 预先加载本地信息，防止在token过期请求过程中本地发出了其他请求导致请求失败
      store.state.userCode = localStorage.getItem('userCode')
      store.state.token = localStorage.getItem('token')
      store.state.headPortraitUrl = localStorage.getItem('headPortraitUrl')

      console.log('token:' + localStorage.getItem('token'))

      api.user.loginCheck(localStorage.getItem('token')).then(res => {
        let data = res.data
        if (data.code === 20000) {
          localStorage.setItem('isLogin', true)
          localStorage.setItem('userCode', data.userCode)
          localStorage.setItem('headPortraitUrl', data.headPortraitUrl)
          localStorage.setItem('token', data.token)
          store.dispatch('userLogin', {
            isLogin: true,
            userCode: data.userCode,
            headPortraitUrl: data.headPortraitUrl,
            token: data.token
          })
        } else {
          localStorage.setItem('isLogin', false)
          localStorage.removeItem('userCode')
          localStorage.removeItem('headPortraitUrl')
          localStorage.removeItem('token')
        }
      })
    }
    next()
  }
}

// vueRouter.beforeEach((to, from, next) => {
//   // 预先加载本地信息，防止在token过期请求过程中本地发出了其他请求导致请求失败
//   store.state.userCode = localStorage.getItem('userCode')
//   store.state.token = localStorage.getItem('token')
//   store.state.headPortraitUrl = localStorage.getItem('headPortraitUrl')

//   console.log('token:' + localStorage.getItem('token'))

//   api.user.loginCheck(localStorage.getItem('token')).then(res => {
//     let data = res.data
//     if (data.code === 20000) {
//       localStorage.setItem('isLogin', true)
//       localStorage.setItem('userCode', data.userCode)
//       localStorage.setItem('headPortraitUrl', data.headPortraitUrl)
//       localStorage.setItem('token', data.token)
//       store.dispatch('userLogin', {
//         isLogin: true,
//         userCode: data.userCode,
//         headPortraitUrl: data.headPortraitUrl,
//         token: data.token
//       })
//     } else {
//       localStorage.setItem('isLogin', false)
//       localStorage.removeItem('userCode')
//       localStorage.removeItem('headPortraitUrl')
//       localStorage.removeItem('token')
//     }
//   })
//   next()
// })

export default vueRouter