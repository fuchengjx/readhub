<template>
    <div class="itemList">
       <div class="table" v-for="(item, index) of data" v-bind:key="index">
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
import mixin from '../mixins/list';
    export default {
      name: "huati",
      mixins: [mixin]
    }
</script>

<style scoped>
  @import url('./common.css');
</style>
