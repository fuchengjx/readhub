<template>
    <div v-show="jobs.length" class="itemList">
      <div class="today">
        <span>今天</span>
      </div>
      <!--详细工作内容栏-->
      <div class="table" v-for="item of jobs"  @click="showList">
        <p class="item-title">{{item.jobTitle}}</p>
        <p class="jobsTitle">{{item.jobsArray[0].title}} · {{item.jobsArray[1].title}} · {{item.jobsArray[2].title}} · {{item.jobsArray[3].title}}</p>
        <p class="jobsContent">北京、上海等地更新了{{item.jobCount}}个职位，待遇集中在
          {{item.salaryLower}}-{{item.salaryUpper}}k,一般要求{{item.experienceLower}}
          -{{item.experienceUpper}}年经验</p>
      <!--点击后出现工作详情-->
        <div class="jobs-list" v-if="show">
          <a class="list-a" :href="item.jobsArray[0].url">
          <div class="list-title">
            <span>{{item.jobsArray[0].title}}</span> · <span>{{item.jobsArray[0].company}}</span>
          </div>
            <div class="list-content">
              <span class="list-salary">{{item.jobsArray[0].salaryLower}}-{{item.jobsArray[0].salaryUpper}}k</span>
              <span>{{item.jobsArray[0].experienceLower}}-{{item.jobsArray[0].experienceUpper}}年</span>
              <span>{{item.jobsArray[0].city}}</span>
              <span class="list-siteName">{{item.jobsArray[0].siteName}}</span>
            </div>
          </a>
          <a class="list-a" :href="item.jobsArray[1].url">
            <div class="list-title">
              <span>{{item.jobsArray[1].title}}</span> · <span>{{item.jobsArray[1].company}}</span>
            </div>
            <div class="list-content">
              <span class="list-salary">{{item.jobsArray[1].salaryLower}}-{{item.jobsArray[1].salaryUpper}}k</span>
              <span>{{item.jobsArray[1].experienceLower}}-{{item.jobsArray[1].experienceUpper}}年</span>
              <span>{{item.jobsArray[1].city}}</span>
              <span class="list-siteName">{{item.jobsArray[1].siteName}}</span>
            </div>
          </a>
          <a class="list-a" :href="item.jobsArray[2].url">
            <div class="list-title">
              <span>{{item.jobsArray[2].title}}</span> · <span>{{item.jobsArray[2].company}}</span>
            </div>
            <div class="list-content">
              <span class="list-salary">{{item.jobsArray[2].salaryLower}}-{{item.jobsArray[2].salaryUpper}}k</span>
              <span>{{item.jobsArray[2].experienceLower}}-{{item.jobsArray[2].experienceUpper}}年</span>
              <span>{{item.jobsArray[2].city}}</span>
              <span class="list-siteName">{{item.jobsArray[2].siteName}}</span>
            </div>
          </a>
          <a class="list-a" :href="item.jobsArray[3].url">
            <div class="list-title">
              <span>{{item.jobsArray[3].title}}</span> · <span>{{item.jobsArray[3].company}}</span>
            </div>
            <div class="list-content">
              <span class="list-salary">{{item.jobsArray[3].salaryLower}}-{{item.jobsArray[3].salaryUpper}}k</span>
              <span>{{item.jobsArray[3].experienceLower}}-{{item.jobsArray[3].experienceUpper}}年</span>
              <span>{{item.jobsArray[3].city}}</span>
              <span class="list-siteName">{{item.jobsArray[3].siteName}}</span>
            </div>
          </a>
        </div>

      </div>

    </div>
</template>

<script>
    export default {
        name: "jobs",
        props:{
          jobs:Array
        },
      data(){
          return{
              show:false,
          }
      },
      methods:{
          showList:function () {
            this.show=!this.show;
          },

      },
    }
</script>

<style scoped>
  .itemList{
    max-width: 420px;
    height: 100%;

  }
  .today{
      height: 60px;
      line-height: 60px;
      font-size: 25px;
      background:rgb(245,246,247);
      width: 420px;
      padding-left: 10px;
  }
  .today span{
    color: #333;
  }
   .table{
     background: white;
     padding: 28px 10px 34px;
     border-bottom: 15px solid #e2e3e4;
     box-shadow: 0 2px 6px -1px rgba(0,0,0,.06);
   }
  .item-title{
    font-size: 17px;
    color: #333;
    line-height: 1.2em;
    font-weight: 500;
  }
  .jobsTitle{
    margin-top: 16px;
    font-size: 15px;
    line-height: 1.2em;
    color: rgba(0,0,0,.5);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .jobsContent{
    margin-top: 16px;
    padding-bottom: 30px;
    line-height: 1.7em;
    font-size: 15px;
    font-weight: 500;
    color: rgba(0,0,0,.65);
    border-bottom: 1px solid #e2e3e4
  }

.list-a{
  display: block;
  padding-top:19px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e2e3e4
}
  .list-title{
    line-height: 27px;
    font-size: 16px;
    color:#000000cc;
  }
  .list-content{
    color: #aaaaaa;
  }
  .list-content span{
    margin-right: 20px;
  }
  .list-salary{
    color:#e18579;
  }
  .list-siteName{
    float: right;
  }

</style>
