<template>
  <div class="cinemas-search">
    <!-- 搜索框 -->
    <div class="search-input">
      <div class="input-content">
        <img src="../images/8.png" alt="">
        <input type="text" placeholder="请输入影院名称" v-model="keywords">
      </div>
      <div class="exitSearch" @click="reRouter">取消</div>
    </div>

    <!-- 展示面板 -->
    <section class="all-cinemas">
        <ul>
          <li v-for="(item,index) in searchList(keywords)" :key="index">
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
          </li>
        </ul>
    </section>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: '',

  data () {
    return {
      cinemasList: [],
      keywords: '' // 搜索关键字
    }
  },

  methods: {
    getCinemas () {
      //  限制条件没写  城市！
      axios.get('api/film/cinemas').then((response) => {
        let result = response.data;
        if (result.code === 1) {
          this.cinemasList = result.data;
        } else {
          alert(result.msg);
        }
      });
    },

    searchList (keywords) {
      return this.cinemasList.filter((cinemas) => {
        if (cinemas.name.includes(keywords)) {
          return cinemas;
        }
      });
    },

    reRouter () {
      this.$router.go(-1);
    }
  },

  created () {
    this.getCinemas();
  }

}
</script>

<style lang='scss' scoped>
@import '../styles/common/px2rem.scss';

.cinemas-search {
  flex: 1;
  overflow-y: auto;

  .search-input {
    z-index: 999;
    height: px2rem(49);
    width: 100%;
    box-sizing: border-box;
    padding: px2rem(10) px2rem(15);
    background-color: #fff;
    position: fixed;

    .input-content {
      background-color: #f4f4f4;
      position: relative;
      display: inline-block;
      border-radius: px2rem(3);
      width: 90%;
      height: px2rem(30);

      img {
        position: absolute;
        left: px2rem(10);
        top: px2rem(9);
        width: px2rem(12);
        height: px2rem(12);
        color: #797d82
      }

      input {
        font-size: px2rem(12);
        position: absolute;
        left: px2rem(30);
        top: 0;
        height: px2rem(30);
        width: 80%;
        border: 0;
        background: #f4f4f4;
        color: #2c3e50;
        outline: none;
      }
    }

    .exitSearch {
      width: px2rem(43);
      position: absolute;
      display: inline-block;
      text-align: center;
      font-size: px2rem(14);
      line-height: px2rem(30);
    }
  }

  .all-cinemas {
    padding-top: px2rem(49);
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
