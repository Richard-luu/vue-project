<template>
  <div class="home">

    <!-- 是指切换子路由，films/   center/  cinemas -->
    <transition
      mode="out-in"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutDown"
      >
      <router-view></router-view>
    </transition>

    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from '../components/NavBar/index';

export default {
  name: 'Home',

  components: {
    NavBar
  }
}
</script>

<style lang='scss' scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
