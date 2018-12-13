// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 整个前端项目的入口js文件。
import Vue from 'vue';
import App from './App';
import router from './router';

// 引入mockjs , !!!!! 上线时要删除
import './mockData';

// 去除vue开发时的浏览器提示。
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
