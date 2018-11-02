import Vue from 'vue'
import Router from 'vue-router'
// import Container from '../components/Container'
import huati from '../components/container/huati'
import Swiper from '../components/container/Swiper'
import keji from '../components/container/keji'
import qukuai from '../components/container/qukuai'
import kaifa from '../components/container/kaifa'
import jobs from '../components/container/jobs'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'huati',
      component:huati,

    },{
      path:'/container/huati',
      name:'huati',
      component:huati,
    },{
      path:'/container/keji',
      name:'keji',
      component:keji,
    },{
      path:'/container/kaifa',
      name:'kaifa',
      component:kaifa,
    },{
      path:'/container/qukuai',
      name:'qukuai',
      component:qukuai,
    },{
      path:'/contanier/jobs',
      name:'jobs',
      component:jobs,
    },

  ]
})
