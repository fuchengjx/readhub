// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'  //引入fastClick，解决移动端300ms点击延迟问题
import './assets/styles/iconfont.css'   //引入字体图标
import VueAwesomeSwiper from 'vue-awesome-swiper'      //全局使用better-scroll插件
import 'swiper/dist/css/swiper.css'               //引入swiper.css
import ElementUI from 'element-ui'   //引入ElementUI
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

import store from './store/store'

import axios from 'axios' //全局引入axios
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)  //axios在Vue实例全局挂载

axios.defaults.baseURL = 'https://api.readhub.cn/api/'

axios.interceptors.request.use(function (config) {
  store.state.isShow = true//在请求发出之前进行一些操作 loading载入
  return config
})
axios.interceptors.response.use(function(config){
  store.state.isShow = false //在这里对返回的数据进行处理 loading关闭
  return config
})

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)          //使用swiper这个插件
fastClick.attach(document.body)   //将fastClicl绑定到body身上。

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //使用store
  components: { App },
  template: '<App/>'
})
