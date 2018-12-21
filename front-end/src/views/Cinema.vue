<template>
  <div class="cinemas-list">
    <header class="city-header">
        <!-- 当前定位 -->
        <router-link class="nowCity" tag="div" to="/city">
          <div class="nowCity-one">
            <span>
              深圳
            </span>
            <img src="../images/7.png" alt="">
          </div>
        </router-link>

        <div class="cinemaAll">
          <div>影院</div>
        </div>
        <!-- 搜索 -->
        <router-link class="search-cinema" tag="div" to="/cinemas/search">
          <div>
            <img src="../images/8.png" alt="">
          </div>
        </router-link>
    </header>

    <!-- 历史  -->
    <section class="historyCity">
        <div class="history-list">
          <div>全称<img src="../images/10.png" alt=""></div>
          <div>最近去过<img src="../images/10.png" alt=""></div>
        </div>
    </section>

    <!-- 影院 -->
    <section class="all-cinemas">
        <ul>
          <router-link tag="li" v-for="(item,index) in list" :key="index" :to="'/buy/'+filmId+'/'+item.cinemaId+item.lowPrice">
            <a href="#">
              <div class="addressOne">
                <span class="cinema-name">{{item.name}}</span>
                <span class="cinema-address">{{item.address}}</span>
              </div>
              <div class="addressTwo">
                <div>
                  <span class="cinema-lowPrice">
                    <i>￥</i>
                    <span>{{item.lowPrice/100}}</span>
                    <!-- <span>.</span>
                    <span></span> -->
                  </span>
                  <span class="upon">起</span>
                </div>
                <span class="cinema-gpsAddress">距离未知</span>
              </div>
            </a>
          </router-link>
        </ul>
    </section>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Cinema',

  data () {
    return {
      list: [],
      filmId: ''
    }
  },

  methods: {
    getCinemas () {
      //  限制条件没写  城市！
      axios.get('api/film/cinemas').then((response) => {
        let result = response.data;
        if (result.code === 1) {
          this.list = result.data;
        } else {
          alert(result.msg);
        }
      });
    },

    getFilmsId () {
      if (this.$route.params.filmId) {
        let fId = this.$route.params.filmId;
        this.filmId = fId;
      }
    }
  },

  created () {
    this.getCinemas();
    this.getFilmsId();
  }
}
</script>

<style lang="scss">
@import '../styles/common/px2rem.scss';

.cinemas-list {
  flex: 1;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  .city-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: px2rem(44);
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: 999;
    background-color: #fff;
    display: flex;
    // justify-content: space-between;
    .nowCity {
      min-width: 15%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-left: 15px;

      .nowCity-one {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        span {
          display: inline-block;
          font-size: px2rem(13);
          max-width: px2rem(58);
          height: px2rem(16);
          line-height: px2rem(16);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-right: px2rem(5);
          color: #191a1b;
        }
        img {
          width: px2rem(6);
          height: px2rem(3);
        }
      }
    }

    .cinemaAll {
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: px2rem(17);
      color: #191a1b;
      flex: 1;
      display: flex;
      align-items: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      div {
        width: 100%;
        height: 100%;
        flex: 1;
        line-height: px2rem(44);
      }
    }

    .search-cinema {
      width: 15%;
      height: 100%;
      display: flex;
      align-items: center;
      div {
        width: 100%;
        height: 100%;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: px2rem(18);
          height: px2rem(18);
        }
      }
    }

  }

  .historyCity {
    position: fixed;
    height: px2rem(50);
    width: 100%;
    top: px2rem(44);
    right: 0;
    text-align: center;
    background-color: #fff;
    z-index: 2000;
    .history-list {
      display: flex;
      justify-content: space-between;
      div {
        width: 50%;
        line-height: px2rem(49);
        font-size: px2rem(14);
        color: #191a1b;
        letter-spacing: px2rem(2);
        img {
          width: px2rem(6);
          height: px2rem(3);
          vertical-align: middle;
        }
      }
    }
  }

  .all-cinemas {
    padding-top: px2rem(94);
    flex: 1;
    z-index: 100;
    ul {
      width: 100%;
      li {
        width: 100%;
        background-color: #fff;
        box-sizing: border-box;
        padding: px2rem(15);
        a {
          display: flex;
          // ???
          display: -webkit-box;
          width: 100%;
          height: px2rem(45);
          justify-content: space-between;
          text-decoration: none;
          // flex-wrap: wrap;
          .addressOne {
            height: 100%;
            flex: 1;
            text-align: left;
            box-sizing: border-box;
            padding-right: px2rem(15);
            .cinema-name {
              color: #191a1b;
              font-size: px2rem(15);
            }
            .cinema-address {
              color: #797d82;
              font-size: px2rem(12);
              margin-top: px2rem(7);
              display: block;
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          .addressTwo {
            height: 100%;
            width: px2rem(65);
            text-align: right;
            div {
              .cinema-lowPrice {
                font-size: px2rem(15);
                color: #ff5f16;
                i {
                  font-size: px2rem(11);
                }
              }
              .upon {
                color: #ff5f16;
                font-size: px2rem(10);
              }
            }
            .cinema-gpsAddress {
              display: block;
              font-size: px2rem(11);
              color: #797d82;
              margin-top: px2rem(7);
            }
          }
        }
      }
    }
  }

}
</style>
