// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'  //引入fastClick，解决移动端300ms点击延迟问题
import './assets/styles/iconfont.css'   //引入字体图标
import VueAwesomeSwiper from 'vue-awesome-swiper'      //全局使用better-scroll插件
import 'swiper/dist/css/swiper.css'               //引入swiper.css

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)                       //使用swiper这个插件
fastClick.attach(document.body)   //将fastClicl绑定到body身上。

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
