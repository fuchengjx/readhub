<template>

    <div class="wrapper">
      <swiper>
        <swiper-slide>
          <router-link to="/container/huati">
            <div @click="gethuatiInfo" class="nav-title">热门话题</div>
          </router-link>
          <router-link to="/container/keji">
            <div @click="getkejiInfo" class="nav-title">科技话题</div>
          </router-link>
          <router-link to="/container/kaifa">
            <div @click="getkaifaInfo" class="nav-title">开发者咨询</div>
          </router-link>
          <router-link to="/container/qukuai">
            <div @click="getqukuaiInfo" class="nav-title">区块链快捷</div>
          </router-link>
        </swiper-slide>

        <swiper-slide>
          <router-link to="/container/jobs">
            <div @click="getjobsInfo" class="nav-title">招聘行情</div>
          </router-link>
        </swiper-slide>
      </swiper>

      <huati :huati="huatiData"></huati>
      <keji :keji="kejiData"></keji>
      <kaifa :kaifa="kaifaData"></kaifa>
      <qukuai :qukuai="qukuaiData"></qukuai>
      <jobs :jobs="jobsData"></jobs>

      <div class="more">
        <a href="#">加载更多</a>
      </div>
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
          order:'',
          kejiDate:'',
          kaifaDate:'',
          qukuaiDate:'',
          jobsDate:'',
        }
      },
      methods: {
        // 滚动条到底部改变ajax请求的参数，加载更多。
        menu(){
          // console.log(window.screen.height + document.documentElement.scrollTop)
          // console.log('CH'+document.body.clientHeight)
          if(window.screen.height + document.documentElement.scrollTop>=document.body.clientHeight-1)
          {
             console.log('滚动条已滚动到底部');
            if(this.huatiData.length!==0){
              //只有huatiData的长度不为零，才会继续发送带参数的ajax请求。
              //解决其他页面滑动到底部也会加载huatidata的bug
              this.gethuatiInfo();
            }
            if(this.kejiData.length!==0){
              this.getkejiInfo();
            }
            if(this.kaifaData.length!==0){
              this.getkaifaInfo();
            }
            if(this.qukuaiData.length!==0){
              this.getqukuaiInfo();
            }
            if (this.jobsData.length!==0){
              this.getjobsInfo();
            }

          }

        },

        gethuatiInfo() {
          axios.get('https://api.readhub.cn/topic?lastCursor='+this.order+'&pageSize=20').then(this.gethuatiSucc)
        //  请求中附带参数this.order，使滚动条滑动到底部就会再次发送请求，实现动态加载的功能
        },
        gethuatiSucc(res) {
          res = res.data
          if (res) {
            if(this.huatiData.length){
              //将获取到的新数组一个一个添加到huatiData数组中，方便子组件动态渲染。
              for(let i=0;i<res.data.length;i++){
                this.huatiData.push(res.data[i])
              }
            }else {
              this.huatiData = res.data
            }
            this.order=res.data[0].order;
            this.kejiData=[];
            this.kaifaData=[];
            this.qukuaiData=[];
            this.jobsData=[];
          }
        },
        getkejiInfo() {
          axios.get('https://api.readhub.cn/news?lastCursor='+this.kejiDate+'&pageSize=10').then(this.getkejiSucc)
        },
        getkejiSucc(res) {
          res = res.data
          let j=0;
          if (res.data) {
            if(this.kejiData.length){
              for(let i=0;i<res.data.length;i++){
                this.kejiData.push(res.data[i])
              }
              //没遍历一次数组j++,找返回数组里的最后一个时间，更为准确。
              j=j+1;
            }else {
              this.kejiData=res.data;
            }
            //获取返回数据里的时间，将起转化为时间戳，作为ajax参数，继续请求。
            let strtime=res.data[j*10+9].publishDate;
            this.kejiDate=Date.parse(strtime);
            // console.log(this.kejidata)
            this.huatiData=[];
            this.kaifaData=[];
            this.qukuaiData=[];
            this.jobsData=[];

          }
        },
        getkaifaInfo() {
          axios.get('https://api.readhub.cn/technews?lastCursor='+this.kaifaDate+'&pageSize=10').then(this.getkaifaSucc)
        },
        getkaifaSucc(res) {
          res = res.data
          let j=0;
          if (res.data) {
            if(this.kaifaData.length){
              for(let i=0;i<res.data.length;i++){
                this.kaifaData.push(res.data[i])
              }
              j=j+1;
            }else {
              this.kaifaData=res.data
            }
            let strtime=res.data[j*10+9].publishDate;
            this.kaifaDate=Date.parse(strtime);

            this.huatiData=[];
            this.kejiData=[];
            this.qukuaiData=[];
            this.jobsData=[];
          }
        },
        getqukuaiInfo() {
          axios.get('https://api.readhub.cn/blockchain?lastCursor='+this.qukuaiDate+'&pageSize=10').then(this.getkaifaSucc)
        },
        getqukuaiSucc(res) {
          res = res.data
          let j=0;
          if (res.data) {
            if(this.qukuaiData.length){
              for(let i=0;i<res.data.length;i++){
                this.qukuaiData.push(res.data[i])
              }
              j=j+1;
            }else {
              this.qukuaiData=res.data
            }
            let strtime=res.data[j*10+9].publishDate;
            this.qukuaiDate=Date.parse(strtime);

            this.huatiData=[];
            this.kaifaData=[];
            this.kejiData=[];
            this.jobsData=[];
          }
        },
        getjobsInfo() {
          axios.get('https://api.readhub.cn/jobs?lastCursor='+this.jobsDate+'&pageSize=10').then(this.getjobsSucc)
        },
        getjobsSucc(res) {
          res = res.data
          let j=0;
          if (res.data) {
            if(this.jobsData.length){
              for(let i=0;i<res.data.length;i++){
                this.jobsData.push(res.data[i])
              }
              j=j+1;
            }else {
              this.jobsData=res.data
            }
            let strtime=res.data[j*10+9].publishDate;
            this.jobsDate=Date.parse(strtime);

            this.huatiData=[];
            this.kaifaData=[];
            this.qukuaiData=[];
            this.kejiData=[];
          }
        },


      },
      mounted(){
        this.gethuatiInfo();
        //全局绑定scroll事件，只要有滚动，就执行men函数
        window.addEventListener('scroll', this.menu);
      }

  }
</script>

<!--父组件省略了 scoped属性，它的样式将全局可以使用-->
<!--scoped使当前样式只能在作用于当前组件-->
<style>
  .wrapper{
    max-width:420px ;
    overflow: hidden;
  }
  .nav-title{
    display: inline-block;
    height: 60px;
    width: 23%;
    line-height: 60px;
    font-size: 15px;
    text-align: center;
    color: #737373;
  }
  .nav-title:hover{
    color:#246394;
  }
  /*全局加载更多css*/
  .more{
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .more a{
    color:#8c8c8c;
  }

</style>
