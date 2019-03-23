# Readhub

## 简介

一个基于vue.js的项目

一个仿readhub的webapp。适用于移动端。

## 页面



![首页](http://github.com/fuchengjx/readhub/raw/master/images/index.png)

当你向下滚动时，滚动到底部时，将重新发送ajax（从上一次获取到的数组中获取到一个order值，这是axios请求中lastCursor的参数，如此循环，将能不断加载内容，）

------

![热门话题滚动时](http://github.com/fuchengjx/readhub/raw/master/images/topic-ajax.png)

当滚动到页面底部时，将再次发送带参数的请求，返回的数组将被添加到huatiData中，然后将数据动态渲染到热门话题页面。

------

![科技话题滚动时](http://github.com/fuchengjx/readhub/raw/master/images/news-ajax.png)

注意news的参数，是获取上一个数组的publishDate值，然后再转换成时间戳的形式。



## 外部引用

![外部引用](http://github.com/fuchengjx/readhub/raw/master/images/main.png)

安装了better-scroll插件，实现了nav栏可以动态滑动。

引用了字体图标（回到顶部）。

---------

## 更新

1.修复了滚动条滚动到底部同时触发多个ajax事件的bug（原来一旦将滚动条滚动到页面底部会一次性执行多个ajax请求，这些请求形成事件队列，会造成页面渲染出许多重复的元素），解决思路，采用了条件判断+延迟执行。

```
var tur=true;
window.onsroll=function(){
    if(tur){
        setTimeout(()=>{
        if(window.screen.height + document.documentElement.scrollTop>=document.body.clientHeight){
              ajax(发送ajax请求);
        }
          tur=ture
        },500)
    },
    tur=false;
}
// 在事件执行之初，复活变量，事件执行完毕后 杀死变量。
```

2.增加了一个back-top，当滚动条滑动到顶部时，“回到顶部”隐藏，当滚动条滑动到下方时，“回到顶部显示”。点击“回到顶部”页面将从新 定锚到顶部，实现快速回到顶部功能。

3.修复了jobs.vue组件点击后 显示所有招聘工作详情的bug。运用js排他算法，在渲染的时候，将数据数组的(index)索引传入showList函数，当每次点击后，将所有的jobs-list disply设置为none，循环结束后，再把当前的jobs-list索引设置为block。就能做到点击后只显示当前点击的详情数据，其它的隐藏。这种思想比较常见于tab栏之类的应用。

```js

 <!--详细工作内容栏-->
      <div class="table" v-for="(item,index) of jobs"  @click="showList(index)">
     ...渲染模块...
      <!--点击后出现工作详情-->
        <div class="jobs-list" ref="jobsList">
     
showList:function (index) {
  let lists = this.$refs.jobsList
  for(let i = 0; i<lists.length ;i++){
    lists[i].style.display = 'none'
  }
  lists[index].style.display = 'block'
}
注意vue的dom操作 ref标注的钩子不能使用短横线命名法，ref属性统一用驼峰命名法
```

`我们知道HTML中是不区分大小写的，因此在JS中使用的驼峰命名法，在HTML中应该改为短横线命名法。比如
 boxAlpha=>box-alpha
 但是，使用`ref`标注的钩子不能使用短横线命名法，boxAlpha不等于box-alpha，在JS中用box-alpha也会报非法。所以，
 ref属性统一使用驼峰命名法

4.引入了loading组件， 运用了vuex，axios拦截器实现loading效果。 每次发送ajax之前，loading显现， 数据返回后，loading隐藏。 ps：注意全局import store.js文件，vue引入文件的话 没有’./‘类似的相对路径标识符，node就会去node_modules中去找，但是Vue源码很明显是在本地文件夹找的。 所以引入当前文件夹的文件 import Vue from './web-runtime' .    ps: 注意store.js里 new Vuex.Stotre时 ，store这里的一定要大写,就相当于我们在使用构造函数(类)的时候首字母要大写。

```
axios.interceptors.request.use(function (config) {
  store.state.isShow = true//在请求发出之前进行一些操作 loading载入
  return config
})
axios.interceptors.response.use(function(config){
  store.state.isShow = false //在这里对返回的数据进行处理 loading关闭
  return config
})
```

![](http://github.com/fuchengjx/readhub/raw/master/images/loading.png)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
