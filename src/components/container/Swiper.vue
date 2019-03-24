<template>
    <div class="wrapper"  id="top">
      <swiper>
        <swiper-slide>
          <router-link to="/huati">
            <div @click="gethuatiInfo" class="nav-title">热门话题</div>
          </router-link>
          <router-link to="/keji">
            <div @click="getkejiInfo" class="nav-title">科技话题</div>
          </router-link>
          <router-link to="/kaifa">
            <div @click="getkaifaInfo" class="nav-title">开发者咨询</div>
          </router-link>
          <router-link to="/qukuai">
            <div @click="getqukuaiInfo" class="nav-title">区块链快捷</div>
          </router-link>
        </swiper-slide>

        <swiper-slide>
          <router-link to="/jobs">
            <div @click="getjobsInfo" class="nav-title">招聘行情</div>
          </router-link>
        </swiper-slide>
      </swiper>
      <component v-bind:is="tab[index].name" :data="tab[index].data"></component>

      <el-table
        v-loading="this.$store.state.isShow"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        style="width: 100%">
      </el-table>

    </div>

</template>

<script>
  import huati from '../container/huati'
  import keji from '../container/keji'
  import kaifa from '../container/kaifa'
  import qukuai from '../container/qukuai'
  import jobs from '../container/jobs'
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
          index : 0,
          tab: [{
            name: huati,
            data: [],
          },{
            name: keji,
            data: [],
          }, {
            name: kaifa,
            data: [],
          }, {
            name: qukuai,
            data: [],
          }, {
            name: jobs,
            data: [],
          }],
          order:'', //huatiDate
          kejiDate:'',
          kaifaDate:'',
          qukuaiDate:'',
          jobsDate:'',
          tur:true, //解决滚动条滚动到底部，ajax请求事件多次执行的bug， 条件判断+延迟执行    在事件执行之初，复活变量，事件执行完毕后 杀死变量。

          loading: true
        }
      },
      methods: {
        // 滚动条到底部改变ajax请求的参数，加载更多。
        menu(){
          if(this.tur){
            setTimeout(()=>{
              if(Math.ceil(window.screen.height + document.documentElement.scrollTop)>=document.body.clientHeight)
              {
                console.log('滚动条已滚动到底部');
                if(this.index === 0){
                  //只有huatiData的长度不为零，才会继续发送带参数的ajax请求。
                  //解决其他页面滑动到底部也会加载huatidata的bug
                  this.gethuatiInfo();
                }
                if(this.index === 1){
                  this.getkejiInfo();
                }
                if(this.index === 2){
                  this.getkaifaInfo();
                }
                if(this.index === 3){
                  this.getqukuaiInfo();
                }
                if (this.index === 4){
                  this.getjobsInfo();
                }
              }
              this.tur=true;
            },500)

          }
          // console.log(window.screen.height + document.documentElement.scrollTop)
          // console.log('CH'+document.body.clientHeight)
                this.tur=false
        },

        gethuatiInfo() {
          this.index = 0;
          this.axios.get('topic?lastCursor='+this.order+'&pageSize=20').then(this.gethuatiSucc)
        //  请求中附带参数this.order，使滚动条滑动到底部就会再次发送请求，实现动态加载的功能
        },
        gethuatiSucc(res) {
          res = res.data
          if (res) {
            if(this.tab[this.index].data.length){
              //将获取到的新数组一个一个添加到huatiData数组中，方便子组件动态渲染。
              for (let i=0; i<res.data.length; i++){
                this.tab[this.index].data.push(res.data[i])
              }
            }else {
              this.tab[this.index].data = res.data
            }
            this.order = res.data[0].order;
          }
        },
        getkejiInfo() {
          this.index = 1;
          this.axios.get('news?lastCursor='+this.kejiDate+'&pageSize=10').then(this.getkejiSucc)
        },
        getkejiSucc(res) {
          res = res.data
          if (res.data) {
            if(this.tab[this.index].data.length){
              for(let i=0;i<res.data.length;i++){
                this.tab[this.index].data.push(res.data[i])
              }
            }else {
              this.tab[this.index].data = res.data;
            }
            //获取返回数据里的时间，将起转化为时间戳，作为ajax参数，继续请求。
            let strtime = res.data[res.data.length-1].publishDate;
            this.kejiDate = Date.parse(strtime);
          }
        },
        getkaifaInfo() {
          this.index = 2;
          this.axios.get('technews?lastCursor='+this.kaifaDate+'&pageSize=10').then(this.getkaifaSucc)
        },
        getkaifaSucc(res) {
          res = res.data
          if (res.data) {
            if(this.tab[this.index].data.length){
              for(let i=0;i<res.data.length;i++){
                this.tab[this.index].data.push(res.data[i])
              }
            }else {
              this.tab[this.index].data = res.data
            }
            let strtime = res.data[res.data.length-1].publishDate;
            this.kaifaDate = Date.parse(strtime);
          }
        },
        getqukuaiInfo() {
          this.index = 3;
          this.axios.get('blockchain?lastCursor='+this.qukuaiDate+'&pageSize=10').then(this.getqukuaiSucc)
        },
        getqukuaiSucc(res) {
          res = res.data
          if (res.data) {
            if(this.tab[this.index].data.length){
              for(let i=0;i<res.data.length;i++){
                this.tab[this.index].data.push(res.data[i])
              }
            }else {
              this.tab[this.index].data = res.data
            }
            let strtime = res.data[res.data.length-1].publishDate;
            this.qukuaiDate = Date.parse(strtime);
          }
        },
        getjobsInfo() {
          this.index = 4;
          this.axios.get('jobs?lastCursor='+this.jobsDate+'&pageSize=10').then(this.getjobsSucc)
        },
        getjobsSucc(res) {
          res = res.data
          if (res.data) {
            if(this.tab[this.index].data.length){
              for(let i=0;i<res.data.length;i++){
                this.tab[this.index].data.push(res.data[i])
              }
            }else {
              this.tab[this.index].data = res.data
            }
            let strtime = res.data[res.data.length-1].publishDate;
            this.jobsDate = Date.parse(strtime);
          }
        },

      },
      created() {
        this.gethuatiInfo();
      },
      mounted(){
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
    z-index: 999;
  }
  .more a{
    color:#8c8c8c;
  }

</style>
