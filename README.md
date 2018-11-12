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

---------



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
