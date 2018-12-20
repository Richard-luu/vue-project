<template>
  <div class="center-view">
    <header class="header">
      <div class="tou">
        <i class="iconfont"></i>
      </div>
      <h2>
        <router-link to="/login" class="loginUser" tag="div">{{userName}}</router-link>
      </h2>
    </header>

    <main class="main">

      <div class="dingdan">
        <h3>
          <i class="iconfont1" style="color: orange;"></i>
          <span>电影订单</span>
        </h3>
        <h3>
          <i class="iconfont2" style="color: greenyellow;;"></i>
          <span>拼团订单</span>
        </h3>
      </div>

      <div class="ul">

        <router-link tag="div" class="card" to="/login/maizuo">
          <div class="list">
            <i style="color: rgb(245, 89, 89);" class="iconfont3 icon-qia"></i>
            <span>卖座卡</span>
          </div>
          <div class="list1">
            <i class="iconfont"></i>
          </div>
        </router-link>

        <router-link class="balace"  to="/login/money" tag="div">
          <div class="list">
            <i style="color: red;" class="iconfont4 icon-yue"></i>
            <span>余额</span>
          </div>
          <div class="list1">
            <p>￥0</p>
            <i class="iconfont"></i>
          </div>
        </router-link>

        <router-link class="set" to="/login/setting" tag="div">
          <div class="list">
            <i style="color: rgb(15, 235, 52);" class="iconfont5 icon-shezhi"></i>
            <span>设置</span>
          </div>
          <div class="list1">
            <i class="iconfont"></i>
          </div>
        </router-link>

      </div>

    </main>
  </div>
</template>

<script>
export default {
  name: 'Center',

  data () {
    return {
      userName: ''
    }
  },

  methods: {
    getUsername () {
      let str = localStorage.getItem('userName');
      if (str) {
        this.userName = str;
      } else {
        this.userName = '立即登录';
      }
    }
  },

  created () {
    this.getUsername();
  }
}
</script>

<style lang="scss">
@import '../styles/common/px2rem.scss';

.center-view {
  flex: 1;
}

.header {
  height: px2rem(200);
  background: url('../images/bg.043a928.png') no-repeat;
  background-size: 100%;
  display: flex;

  .tou {
    height: px2rem(67);
    width: px2rem(67);
    border: px2rem(2) solid white;
    background:url('../images/log.png') no-repeat;
    border-radius: 50%;
    align-self: center;
    margin-left: px2rem(20);

    .iconfont {
      font-size: px2rem(30);
      color: white;
    }
  }

  h2 {
    font-size: px2rem(16);
    align-self: center;
    margin-left: px2rem(20);

    div {
      color: white;
      text-decoration: none;
    }
  }
}

.main {
  flex: 1;
  display: flex;
  background: #f4f4f4;
  flex-direction: column;

  .dingdan {
    display: flex;
    height: px2rem(80);

    h3 {
      background: white;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      i {
        font-size: px2rem(26);
        margin: px2rem(8) 0;
      }

      .iconfont1 {

        display: block;
        width: px2rem(22);
        height: px2rem(22);
        background-size: 100%;
        background: url('../images/4.png') no-repeat;
      }

      .iconfont2 {
        display: block;
        width: px2rem(22);
        height: px2rem(22);
        background-size: 100%;
        background: url('../images/5.png') no-repeat;
      }

      span {
        font-size: px2rem(13);
        color: #797d82;
      }

    }

  }
  .ul {
    display: flex;
    flex: 1;
    border-top: px2rem(10) solid #f4f4f4;
    flex-direction: column;

    .card,
    .balace,
    .set {
      padding: 0 px2rem(15);
      background: white;
      height: px2rem(50);
      border-bottom: px2rem(1) solid #f4f4f4;
      display: flex;

      .list {
        flex: 1;
        display: flex;
        align-items: center;

        i {
          font-size: px2rem(20);
        }

       .iconfont3 {
          display: block;
          width: px2rem(22);
          height: px2rem(22);
          background-size: 100%;
          background: url('../images/1.png') no-repeat;
       }

        .iconfont4 {
          display: block;
          width: px2rem(22);
          height: px2rem(22);
          background-size: 100%;
          background: url('../images/2.png') no-repeat;
        }

        .iconfont5 {
          display: block;
          width: px2rem(22);
          height: px2rem(22);
          background-size: 100%;
          background: url('../images/3.png') no-repeat;
        }

        span {
         font-size: px2rem(16);
         margin-left: px2rem(10);
        }

      }

      .list1 {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        i {
          font-size: px2rem(14);
        }

        p {
          font-size: px2rem(14);
          color: #444;
        }

      }
    }
  }
}
</style>
