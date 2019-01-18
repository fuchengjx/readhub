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
      component:huati,//根路由删除掉也没有影响

    },{
      path:'/huati',
      name:'huati',
      component:huati,
    },{
      path:'/keji',
      name:'keji',
      component:keji,
    },{
      path:'/kaifa',
      name:'kaifa',
      component:kaifa,
    },{
      path:'/qukuai',
      name:'qukuai',
      component:qukuai,
    },{
      path:'/jobs',
      name:'jobs',
      component:jobs,
    },

  ]
})
