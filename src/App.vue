<template>
  <div id="app">
    <div class="header">
      <img class="logo" src="https://cdn.readhub.cn/static/assets/png/readhub_logo_m@2x.78b35cd0.png" alt="logo">
      <div class="contact">
        <a href="https://mp.weixin.qq.com/s/kREAGXnuZVNw_DspMeDEwA">加入我们</a>
      </div>
    </div>
    <c-swiper></c-swiper>
  <!--<router-view/>-->
  </div>
</template>

<script>
  import CSwiper from './components/container/Swiper'
  export default {
    name: 'App',
    components:{
      CSwiper
    }
}
</script>

<style>
  #app{
    max-width: 420px;
    margin: 0 auto;
  }
  a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, main, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
       margin: 0;
       padding: 0;
       border: 0;
       font-size: 100%;
       font: inherit;
       vertical-align: baseline;
       letter-spacing: .02em;
       -webkit-tap-highlight-color: rgba(0,0,0,0);
     }
  a{
    text-decoration: none;
  }
  .header{
    max-width:420px ;
    overflow: hidden;
    border-bottom: 1px solid #ebebeb;
  }
  .logo{
    float: left;
    width: 109px;
    height: 28px;
    margin-top: 11px;
    margin-left: 10px;
  }
  .contact{
    height: 50px;
    float: right;
    line-height: 50px;
  }
  .contact a{
    font-size: 14px;
    color: #999;
    margin-left: 23px;
    margin-right: 10px;
    text-decoration: none;
    font-family: PingFangSC-Light,Microsoft YaHei UI Light,Noto Sans CJK SC Light,sans-serif;
  }
  .wrapper{
    max-width:420px ;
    overflow: hidden;
  }
  .nav-tittle{
    display: inline-block;
    height: 60px;
    width: 23%;
    line-height: 60px;
    font-size: 15px;
    text-align: center;
    color: #737373;
  }
</style>
