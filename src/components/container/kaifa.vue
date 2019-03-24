<template>
  <!--开发者内容渲染-->
  <div class="itemList">
    <div class="table" v-for="item of data">
      <a class="item-a" :href="item.url">
        <p class="item-title">{{item.title}}</p>
        <p class="item-summary">{{item.summaryAuto}}</p>
        <span class="item-name">{{item.autherName}}</span>
        <span class="item-name">{{item.siteName}}</span>
      </a>
    </div>

  </div>
</template>

<script>
    export default {
        name: "kaifa",
        props:{
         data: Array
        }
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
