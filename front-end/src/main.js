// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//  整个前端项目的入口js文件.
import Vue from 'vue';//  引入vue
import App from './App';//  引入App.vue
import router from './router';

//  引入mockjs，测试用的，上线时记得删
// import './mockData';

//  去除vue开发时的浏览器提示
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App: App
  },
  template: '<App/>'
});
