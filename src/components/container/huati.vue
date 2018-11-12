<template>
    <div class="itemList">
       <div class="table" v-for="item of huati">
         <a class="item-a" :href="item.newsArray[0].url">
           <p class="item-title">{{item.title}}</p>
           <p class="item-summary">{{item.summary}}</p>
           <span class="item-name">{{item.newsArray[0].autherName}}</span>
           <span class="item-name">{{item.newsArray[0].siteName}}</span>
         </a>
       </div>
    </div>
</template>

<script>
    export default {
        name: "huati",
      props:{
          huati:Array,
      },
    }
</script>

<style scoped>
  .itemList{
    max-width: 400px;
    height: 100%;
    background:  #fafafa;
    padding: 0 10px;
  }
  .table{
    padding-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(242,242,242,1);
  }
  .item-title{
    font-size: 18px;
    line-height: 1.7em;
    margin-bottom: 8px;
    color:#000;
  }
  .item-summary{
    overflow: hidden;
    color: #737373;
    font-size: 16px;
    line-height: 1.85em;
    margin-bottom: 24px;
    /*height: 88px;*/
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    /*white-space: nowrap;*/
  }
  .item-name{
    color: #999;
    font-size: 12px;
    line-height: 1.2em;
    font-family: PingFangSC-Light,Microsoft YaHei UI Light,Noto Sans CJK SC Light,sans-serif
  }
</style>
