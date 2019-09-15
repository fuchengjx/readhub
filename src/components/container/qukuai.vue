<template>
  <div class="itemList">
    <!--区块链内容渲染-->
    <div class="table" v-for="(item, index) of data" :key="index">
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
import mixin from '../mixins/list';
    export default {
        name: "qukuai",
        mixins: [mixin]
    }
</script>

<style scoped>
@import url('./common.css');
</style>
