<template>
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../images/pic-1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../images/pic-2.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../images/pic-3.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../images/pic-4.jpg" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- /轮播图 -->
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang='scss' scoped>
.swiper-container {
  height: px2rem(210);

  .swiper-pagination-bullet {
    width: px2rem(10);
    height: px2rem(10);
  }
  .swiper-pagination-bullet-active {
    background: yellowgreen;
  }

  img {
    width: 100%;
  }
}

</style>
