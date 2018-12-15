// 路由相关的代码
import Vue from 'vue';
import VueRouter from 'vue-router';
// 进度条效果，nprogress 第三方包。npm install --save nprogress
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';

// 引入路由组件
import Films from './views/Films.vue';
import Cinema from './views/Cinema.vue';
import Center from './views/Center.vue';
import NowPaly from '../src/components/NowPlay/index.vue';
import SoonPlay from '../src/components/SoonPlay/index.vue';

// 插件安装
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/films/nowPlaying'
    },
    {
      // 首页
      path: '/films',
      name: 'films',
      component: Films,
      children: [
        {
          path: 'nowPlaying',
          name: 'nowPlaying',
          component: NowPaly
        },
        {
          path: 'comingSoon',
          name: 'comingSoon',
          component: SoonPlay
        }
      ]
    },
    {
      // 影院页
      path: '/cinemas',
      name: 'cinemas',
      component: Cinema
    },
    {
      // 个人中心页
      path: '/center',
      name: 'center',
      component: Center
    },
    {
      path: '*',
      redirect: '/films/nowPlaying'
    }
  ]
});

// 需要暴露
export default router;
