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
    ture=false;
}
// 在事件执行之初，复活变量，事件执行完毕后 杀死变量。
```

2.增加了一个back-top，当滚动条滑动到顶部时，“回到顶部”隐藏，当滚动条滑动到下方时，“回到顶部显示”。点击“回到顶部”页面将从新 定锚到顶部，实现快速回到顶部功能。

3.更多功能以后期待

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
