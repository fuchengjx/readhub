import Vue from 'vue'
import Router from 'vue-router'

// 分块路由懒加载
const huati = () => import('../components/container/huati')
const Swiper = () => import('../components/container/Swiper')
const keji = () => import('../components/container/keji')
const qukuai = () => import('../components/container/qukuai')
const kaifa = () => import('../components/container/kaifa')
const jobs = () => import('../components/container/jobs')
// import huati from '../components/container/huati'
// import Swiper from '../components/container/Swiper'
// import keji from '../components/container/keji'
// import qukuai from '../components/container/qukuai'
// import kaifa from '../components/container/kaifa'
// import jobs from '../components/container/jobs'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/huati',  //当开始进入时根路由时， 重新定向到/huati 路径
      name: 'huati',
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
