// 路由相关的代码
import Vue from 'vue';
import VueRouter from 'vue-router';
// 进度条效果，nprogress 第三方包。npm install --save nprogress
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';

// 也可以使用mint Ui
// import { Indicator } from 'mint-ui';

// 引入路由组件
// import Films from './views/Films.vue';
// import Cinema from './views/Cinema.vue';
// import Center from './views/Center.vue';
import NowPaly from '../src/components/NowPlay/index.vue';
import SoonPlay from '../src/components/SoonPlay/index.vue';
// import { Indicator } from 'mint-ui';

// 插件安装
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '',
          redirect: '/films/nowPlaying'
        },
        {
          // 首页
          path: '/films',
          component: () => import('./views/Films.vue'),
          children: [
            {
              path: '',
              redirect: '/films/nowPlaying'
            },
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
          component: () => import('./views/Cinema.vue')
        },
        {
          // 个人中心页
          path: '/center',
          name: 'center',
          component: () => import('./views/Center.vue')
        }
      ]
    },
    {
    // 详情页面
      path: '/film/:filmId',
      name: 'filmDetail',
      component: () => import('./views/FilmsDetail.vue'),
      beforeEnter (to, from, next) {
        next();
      },
      afterEnter (to, from) {
        // Indicator.close();
      }
    },
    {
      // 登录页
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '*',
      redirect: '/films/nowPlaying'
    }
  ]
});

/**
 * 全局前置守卫
 * @param {Object} to 要去哪里
 * @param {Object} from 从哪里来
 * @param {Function} next 结束当前的钩子函数，进入到下一个相应的钩子函数，如果没有的话，即最终来控制是否可以切换路由
 *  */
router.beforeEach((to, from, next) => {
  // NProgress.start();

  // 判断当前要去的路由是不是卖座卡或者余额或者设置  这样在全局里面是没有问题，只是要做判断
  // if (to.name === 'card' || to.name === 'yue' || to.name === 'set') {
  //   // 如果当前用户有登录，就可以去
  //   next();
  //   // 如果没有，就让去登陆页面
  //   next('/user/login')
  // }
  // Indicator.open();
  // 请一定记得要做 next
  next();
});

/**
 * 全局后置守卫
 * @param {Object} to 要去哪里
 * @param {Object} from 从哪里来
 */
router.afterEach((to, from) => {
  // 做一些额外处理，比如进度条的效果
  // NProgress.done();
  // Indicator.close();
});

// 需要暴露
export default router;
