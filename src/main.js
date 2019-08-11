// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'



// 引用自定义接口
import api from '@/api/apiList'
// 将API方法绑定到全局
Vue.prototype.$api = api

import * as filters from '@/filters/filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

import GL_Component from '@/components/globalComponents'
Vue.use(GL_Component)

document.write


// 按需引入全局化
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
// 完整引入全局化
// Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
