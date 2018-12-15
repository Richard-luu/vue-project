<template>
  <div id="app">
    <router-view></router-view>
    <NarBar></NarBar>
  </div>
</template>

<script>
//  引入组件
import NarBar from './components/NavBar/index';

export default {
  name: 'App',

  components: {
    NarBar
  }
}
</script>

<style lang="scss">
@import './styles/base.scss';
</style>
