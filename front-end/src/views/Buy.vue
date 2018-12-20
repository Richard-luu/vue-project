<template>
  <div class="buy-view">
    <header class="buy-header">
      <div>确认订单</div>
    </header>

    <div class="decorate"><img src="../images/14.png" alt=""></div>

    <section class="product">
        <div class="product-phone">
          <img src="../images/film-1.jpg" alt="">
        </div>
        <div class="product-info"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
@import '../styles/common/px2rem.scss';
.buy-view {
  flex: 1;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  .buy-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: px2rem(44);
    z-index: 3000;
    background-color: #fff;

    div {
      width: 100%;
      text-align: center;
      font-size: px2rem(17);
      color: #191a1b;
      line-height: px2rem(44);
    }
  }

  .decorate {
    width: 100%;
    height: px2rem(10);
    margin-top: px2rem(30);
    img {
      width: 100%;
      height: 100%;
    }
  }

  .product {
    margin-top: px2rem(66);
    border-top: px2rem(10) solid #f4f4f4;
    padding: px2rem(15) 0 px2rem(15) px2rem(15);
    display: flex;

    .product-phone {
      margin-right: px2rem(15);
      background-color: #f8f8f8;
      height: px2rem(117);
      width: px2rem(85);
      img {
        width: 100%;
        height: 100%;
      }
      .product-info {

      }
    }
  }
}
</style>
