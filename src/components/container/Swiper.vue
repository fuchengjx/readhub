<template>

    <div class="wrapper">
      <swiper>
        <swiper-slide>
          <router-link to="/container/huati">
            <div @click="gethuatiInfo" class="nav-tittle">热门话题</div>
          </router-link>
          <router-link to="/container/keji">
            <div @click="getkejiInfo" class="nav-tittle">科技话题</div>
          </router-link>
          <router-link to="/container/kaifa">
            <div @click="getkaifaInfo" class="nav-tittle">开发者咨询</div>
          </router-link>
          <router-link to="/container/qukuai">
            <div @click="getqukuaiInfo" class="nav-tittle">区块链快捷</div>
          </router-link>
        </swiper-slide>

        <swiper-slide>
          <router-link to="/container/jobs">
            <div @click="getjobsInfo" class="nav-tittle">招聘行情</div>
          </router-link>
        </swiper-slide>
      </swiper>

      <huati :huati="huatiData"></huati>
      <keji :keji="kejiData"></keji>
      <kaifa :kaifa="kaifaData"></kaifa>
      <qukuai :qukuai="qukuaiData"></qukuai>
      <jobs :jobs="jobsData"></jobs>

    </div>



</template>

<script>
  import huati from '../container/huati'
  import keji from '../container/keji'
  import kaifa from '../container/kaifa'
  import qukuai from '../container/qukuai'
  import jobs from '../container/jobs'
  import  axios from 'axios'
    export default {
      name: "CSwiper",
      components: {
        huati,
        keji,
        kaifa,
        qukuai,
        jobs,
      },
      data() {
        return {
          huatiData: [],
          kejiData: [],
          kaifaData: [],
          qukuaiData: [],
          jobsData: [],

          scroll:'',
          pageHeight:20,
        }
      },
      methods: {
        //滚动条到底部改变ajax请求的参数，加载更多。
        // menu(){
        //   if(window.screen.height + document.documentElement.scrollTop>=document.body.clientHeight)
        //   {
        //       this.pageHeight=this.pageHeight+10;
        //       this.gethuatiInfo();
        //   }
        // },

        gethuatiInfo() {
          axios.get('https://api.readhub.cn/topic?lastCursor=&pageSize='+this.pageHeight).then(this.gethuatiSucc)
        },
        gethuatiSucc(res) {
          res = res.data
          if (res) {
            this.huatiData = res.data
            // console.log(this.huatiData)
            this.kejiData=[];
            this.kaifaData=[];
            this.qukuaiData=[];
            this.jobsData=[];
          }
        },
        getkejiInfo() {
          axios.get('https://api.readhub.cn/news?lastCursor=&pageSize=20').then(this.getkejiSucc)
        },
        getkejiSucc(res) {
          res = res.data
          if (res.data) {
            this.kejiData = res.data
            // console.log(this.kejidata)
            this.huatiData=[];
            this.kaifaData=[];
            this.qukuaiData=[];
            this.jobsData=[];
          }
        },
        getkaifaInfo() {
          axios.get('https://api.readhub.cn/technews?lastCursor=&pageSize=20').then(this.getkaifaSucc)
        },
        getkaifaSucc(res) {
          res = res.data
          if (res.data) {
            this.kaifaData=res.data

            this.huatiData=[];
            this.kejiData=[];
            this.qukuaiData=[];
            this.jobsData=[];
          }
        },
        getqukuaiInfo() {
          axios.get('https://api.readhub.cn/blockchain?lastCursor=&pageSize=20').then(this.getkaifaSucc)
        },
        getqukuaiSucc(res) {
          res = res.data
          if (res.data) {
            this.qukuaiData=res.data
            this.huatiData=[];
            this.kaifaData=[];
            this.kejiData=[];
            this.jobsData=[];
          }
        },
        getjobsInfo() {
          axios.get('https://api.readhub.cn/jobs?lastCursor=&pageSize=10').then(this.getjobsSucc)
        },
        getjobsSucc(res) {
          res = res.data
          if (res.data) {
            this.jobsData=res.data
            this.huatiData=[];
            this.kaifaData=[];
            this.qukuaiData=[];
            this.kejiData=[];
          }
        },


      },
      mounted(){
        this.gethuatiInfo();
        window.addEventListener('scroll', this.menu);
      }

  }
</script>

<style scoped>
  .wrapper{
    max-width:420px ;
    overflow: hidden;
  }
  .nav-tittle{
    display: inline-block;
    height: 60px;
    width: 23%;
    line-height: 60px;
    font-size: 15px;
    text-align: center;
    color: #737373;
  }


</style>
