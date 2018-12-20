<template>
  <div>
    <div class="logo">
      <img src="../images/6.png" alt="">
    </div>

    <div class="login-form">
      <div>
        <form action="#">
          <div class="phone">
            <input type="tel" maxlength="13" placeholder="手机号" class="input-control" v-model="phoneInput">
            <div class="getSmsCode">
                获取验证码
            </div>
          </div>

          <div class="form-group">
            <input placeholder="验证码" class="input-control" v-model="codeInput">
          </div>

          <div class="submit">
            <button :disabled="checkInput" @click="loginTo" @keyup.13="loginTo">
              <span :class="checkInput?'':'loginOp'">登录</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',

  data () {
    return {
      phoneInput: '',
      codeInput: ''
    }
  },

  computed: {
    checkInput () {
      if (this.phoneInput && this.codeInput) {
        return false;
      } else {
        return true;
      }
    }
  },

  methods: {
    loginTo () {
      axios.get('static/api/users.json', {
        params: {
          phone: this.phoneInput,
          code: this.codeInput
        }
      }).then(res => {
        let result = res.data;
        if (result.phone === this.phoneInput && result.code === this.codeInput) {
          localStorage.setItem('userName', '张三');
          // console.log(this.$route.query);

          // let redirect = this.$route.query.redirect;
          // this.$router.push(redirect);
          this.$router.go(-1);
          // this.$router.replace('/center');
          // this.$router.replace(this.$route.query.redirect);
        } else {
          // console.log(this.$router);
          alert('用户名或密码错误');
          // this.$router.push('/login');
          this.$router.go(0);
        }
      });
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../styles/common/px2rem.scss';

.logo {
  margin: px2rem(79) auto px2rem(40);
  text-align: center;
  height: px2rem(60);
  line-height: px2rem(60);

  img{
    height: 100%;
  }
}

.login-form {

  .phone{
    position: relative;
    border-bottom: px2rem(1) solid #ededed;
    line-height: px2rem(55);
    margin: 0 px2rem(25);

    .getSmsCode {
    position: absolute;
    right: 0px;
    top: px2rem(13);
    line-height: px2rem(30);
    width: px2rem(90);
    text-align: right;
    color: #bdc0c5;
    float: right;
    font-size: px2rem(13);
    border-radius: px2rem(3);
    cursor: pointer;
    }
  }

  .form-group {
    line-height: px2rem(55);
    margin: 0 px2rem(25);
    border-bottom: px2rem(1) solid #ededed;
  }

  .submit {
    line-height: px2rem(45);
    font-size: px2rem(16);
    margin: px2rem(70) px2rem(25) 0;
    border-radius: px2rem(3);
    height: px2rem(44);

    button {
      width: 100%;
      height: 100%;
      line-height: px2rem(45);
      font-size: px2rem(16);
      background-color: #ff5f16;
      text-align: center;
      color: #fff;
      border: none;

      span {
        opacity: 0.3;
      }
    }
  }

  .input-control {
    height: px2rem(15);
    line-height: px2rem(15);
    padding: px2rem(20) 0;
    width: 100%;
    font-size: px2rem(15);
    color: #191a1b;
    border: 0;
    outline-width: 0;
  }
}

.loginOp {
  opacity: 1 !important;
}

</style>
