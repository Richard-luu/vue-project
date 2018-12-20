<template>
  <div>
        <section id="section">
      <div class="city-header">
        <div class="exit" @click="exit">
          <img src="../images/12.png" alt="">
        </div>
        <div class="nowCity">当前城市 -</div>
      </div>

      <div class="searchCity">
        <div class="searchCityInput">
          <img src="../images/8.png" alt="">
          <input type="text" placeholder="输入城市名称或拼音" />
        </div>
      </div>

      <div class="cityInfo">
        <div class="mainCity">
          <div class="recommed-city">
            <div class="gprsCity">
              <p>GPS定位你所在城市</p>
              <div>定位失败</div>
            </div>

            <div class="hostCity">
              <p>热门城市</p>
              <ul>
                <router-link tag="li" to="/films" v-for="(item, index) in hotcity" :key="index">{{item}}</router-link>
              </ul>
            </div>
            <ul class="moreCityInfo">
              <li class="moreInfoLi" v-for="(item, index) in citylist" :key="index">
                <p>{{item.py}}</p>
                <ul>
                  <router-link tag="li" to="/films" v-for="(value,i) in item.list" :key="i">{{value.name}}</router-link>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <!-- 这里来个空标签，不然display:flex,后全部占满了 -->
        <ul>
          <li>&nbsp;&nbsp;&nbsp;</li>
        </ul>

        <ul class="searchInfo">
          <li v-for="(item, index) in cityaz" :key="index">{{item}}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'City',

  data () {
    return {
      // 热门城市
      hotcity: [],
      // 根据首字母排列所有城市
      citylist: [],
      // 首字母
      cityaz: []
    }
  },

  methods: {
    getCity () {
      axios.get('api/city/allCities').then((respnse) => {
        let result = respnse.data;
        if (result.code === 1) {
          // this.citylist = result.data;
          let i = 0;
          let hash = {};
          let res = [];
          let zimu = [];
          let cityhot = [];
          result.data.forEach(item => {
            // 拿到所有城市和首字母
            let py = item.pinyin.substring(0, 1).toUpperCase();
            if (hash[py]) {
              res[hash[py] - 1].list.push(item);
            } else {
              zimu.push(py);
              hash[py] = ++i;
              res.push({
                py: py,
                list: [item]
              })
            }
            // 拿到热门城市
            let hot = item.isHot;
            if (hot === 1) {
              cityhot.push(item.name);
            }
          });

          // 根据首字母排列所有城市
          this.citylist = res.sort(function (a, b) {
            return (a.py).localeCompare((b.py));
          });
          // 首字母
          this.cityaz = zimu.sort();
          // 热门
          this.hotcity = cityhot;
          // console.log(this.citylist.sort(function (a, b) {
          //   // return a.py - b.py;
          //   // return b.num - a.num;
          //   return (a.py).localeCompare((b.py));
          // }));
          // console.log(this.hotcity);
        } else {
          alert(result.msg);
        }
      })
    },

    // 退出
    exit () {
      this.$router.go(-1);
    }
  },

  created () {
    this.getCity();
  }
}
</script>

<style lang='scss' scoped>
@import '../styles/common/px2rem.scss';

section {
  flex: 1;

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
    background-color: white;
    display: flex;
    justify-content: space-between;

    .exit {
      width: 10%;

      img {
        width: px2rem(30);
        height: px2rem(30);
        margin-top: px2rem(8);
      }
    }

    .nowCity {
      width: 90%;
      font-size: px2rem(17);
      line-height: px2rem(44);
      // text-indent: px2rem(44);
      text-align: center;
    }
  }

  .searchCity {
    z-index: 2000;
    height: px2rem(50);
    width: 100%;
    padding: px2rem(10) px2rem(15);
    background-color: #f4f4f4;
    position: fixed;
    top: px2rem(44);

    .searchCityInput {
      background-color: #fff;
      position: relative;
      display: inline-block;
      border-radius: px2rem(3);
      width: 90%;
      height: px2rem(30);
      color: #797d82;

      img {
        position: absolute;
        top: px2rem(8);
        left: px2rem(10);
        width: px2rem(15);
        height: px2rem(15);
      }

      input {
        line-height: px2rem(30);
        width: 80%;
        font-size: px2rem(13);
        position: absolute;
        left: px2rem(40);
        border: none;
        outline: none;
      }
    }
  }

  .cityInfo {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    padding-top: px2rem(110);

    .mainCity {
      width: 100%;
      height: 100%;

      .recommed-city {
        width: 100%;
        height: 100%;
        .gprsCity {
          width: 100%;
          height: 100%;
          p {
            color: #797d82;
            font-size: px2rem(13);
            text-indent: px2rem(15);
          }

          div {
            height: px2rem(30);
            width: 30%;
            background-color: #f4f4f4;
            line-height: px2rem(30);
            border-radius: px2rem(3);
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            margin: px2rem(15) px2rem(25);
            font-size: px2rem(15);
            color: #191a1b;
            text-align: center;
          }
        }
        .hostCity {
          width: 100%;
          height: 100%;
          color: #797d82;
          font-size: px2rem(13);
          p {
            text-indent: px2rem(15);
          }

          ul {
            display: flex;
            flex-wrap: wrap;
            margin-left: px2rem(20);

            li {
              height: px2rem(30);
              width: 30%;
              background-color: #f4f4f4;
              line-height: px2rem(30);
              border-radius: px2rem(3);
              box-sizing: border-box;
              margin: px2rem(8) px2rem(5);
              font-size: px2rem(15);
              color: #191a1b;
              text-align: center;
            }
          }
        }
        .moreCityInfo {
          .moreInfoLi {
            p {
              background-color: #f4f4f4;
              color: #797d82;
              padding: 0 0 0 px2rem(15);
              height: px2rem(30);
              line-height: px2rem(30);
              box-sizing: border-box;
              font-size: px2rem(13);
            }
            ul {
              display: flex;
              flex-wrap: wrap;
              padding: 0 0 0 px2rem(15);
              li {
                font-size: px2rem(15);
                width: 33%;
                color: #191a1b;
                box-sizing: border-box;
                line-height: px2rem(48);
                height: px2rem(48);
                text-align: center;
                border-bottom: 1px solid #ededed;
              }
            }
          }
        }
      }
    }

    .searchInfo {
      //   padding-top: px2rem(90);
      position: fixed;
      top: px2rem(205);
      right: 0;

      li {
        font-size: px2rem(11);
        padding: 0 px2rem(3);
        color: #191a1b;
        margin-top: px2rem(5);
      }
    }
  }
}
</style>
