<template>
  <div class="buy-view">
    <header class="buy-header">
      <div>订单提交</div>
    </header>

    <div class="decorate"><img src="../images/14.png" alt=""></div>
    <!-- 商品信息 -->
    <section class="product" v-for="(item, i) in filmsInfo" :key="i">

        <div class="product-phone">
          <img :src="item.poster" alt="">
        </div>

        <div class="product-info">
          <div class="product-name">{{item.filmsName}}(3D订座票)</div>
          <div class="film-time">{{item.premiereAt}} 10:10</div>
          <div class="film-cinema">{{item.cinemaName}}</div>
          <div class="film-seat">
            <span>2号激光厅</span>
                    3排5座
          </div>
          <div class="product-price">
            <small class="icon-yen">
              ¥
            </small>
              {{item.lowPrice}}
            <span class="film-tip">
              （含服务费4.00元/人）
            </span>
          </div>
        </div>

        <!-- 总数总金额 -->
        <div class="products-price">
          <div class="price-item">
            商品数量 :
            <button type="button" @click="lessFilms(i,item.filmsNum)">-</button>
            <!-- @input="inputNum($event)" -->
            <!-- :value="item.filmsNum"  -->
            <input type="text" class="products-num" :value="item.filmsNum">
            <button type="button" @click="addFilms(i,item.filmsNum)">+</button>
          </div>

          <div class="price-red-font">
            <span class="all-price">商品总额 :</span>
            <span class="price-fmt">
              <i>￥</i>
              <span class="interge">{{(item.lowPrice*item.filmsNum).toFixed(2)}}</span>
              <span class="min-price">.</span>
              <span class="decimal"></span>
            </span>
          </div>
        </div>

    </section>

    <!-- 提交订单 -->
    <section class="pay">
      <div class="show-detail">
        <span>抵扣明细</span>
        <i>¥</i>
        <span class="promotion-price">0</span>
      </div>
      <span>实付总额</span>
      <div class="need-pay">
        <span>
          <small class="icon-yen">¥</small>
          {{totalPrice}}
        </span>
      </div>
      <router-link class="to-pay" tag="div" to="/films" @click.native="pay">支付订单</router-link>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Tuan',

  data () {
    return {
      filmsInfo: [], // 购买的电影票信息
      totalPrice: '' // 总价格
    }
  },

  methods: {
    // 取出localStorage的数据
    gteMyCard () {
      let myCard = localStorage.getItem('filmsCard');
      let myCardArr = JSON.parse(myCard);
      if (myCardArr) {
        // 计算总价格
        let price = 0;
        myCardArr.forEach(item => {
          price += Number(item.lowPrice) * item.filmsNum;
        });
        this.totalPrice = price.toFixed(2);
        this.filmsInfo = myCardArr;
      } else {
        this.filmsInfo = '';
      }
    },

    // 加
    addFilms (i, filmsNum) {
      let myCard = localStorage.getItem('filmsCard');
      let myCardArr = JSON.parse(myCard);
      myCardArr[i].filmsNum++;
      localStorage.setItem('filmsCard', JSON.stringify(myCardArr));
      this.gteMyCard();
    },

    // 减
    lessFilms (i, filmsNum) {
      let myCard = localStorage.getItem('filmsCard');
      let myCardArr = JSON.parse(myCard);
      if (filmsNum > 1) {
        myCardArr[i].filmsNum--;
        localStorage.setItem('filmsCard', JSON.stringify(myCardArr));
        this.gteMyCard();
      }
    },

    // 输入的数量
    // inputNum (event) {
    //   this.event.data;
    // },

    // 提交订单
    pay () {
      // // 加到localStorage里面
      // let payCard = localStorage.getItem('payCard');
      // let payCardArr = JSON.parse(payCard);
      // let strArr = [{filmId: this.filmId, films: this.films, premiereAt: this.premiereAt, lowPrice: this.lowPrice, cinemaName: this.cinemaName, filmsNum: this.filmsNum}];
      // if (payCardArr) {
      //   payCardArr.push(strArr);
      //   localStorage.setItem('payCard', JSON.stringify(payCardArr));
      // } else {
      //   localStorage.setItem('payCard', JSON.stringify(strArr));
      // }
      alert('转我支付宝');
    }
  },

  created () {
    this.gteMyCard();
  }
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

  // 商品详细信息
  .product {
    margin-top: px2rem(40);
    border-top: px2rem(10) solid #f4f4f4;
    padding: px2rem(15) 0 px2rem(15) px2rem(15);
    display: flex;
    position: relative;

    .product-phone {
      margin-right: px2rem(15);
      background-color: #f8f8f8;
      height: px2rem(117);
      width: px2rem(85);
      img {
        width: 100%;
        height: 100%;
      }
    }

    .product-info {
      height: px2rem(117);
      flex: 1;
      position: relative;
      .product-name {
        font-size: px2rem(15);
        line-height: px2rem(20);
      }
      .film-time {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: px2rem(13);
        color: #797d82;
        line-height: px2rem(20);
      }
      .film-cinema {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: px2rem(13);
        color: #797d82;
        line-height: px2rem(20);
      }
      .film-seat {
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: px2rem(13);
        color: #797d82;
        line-height: px2rem(20);
      }
      .product-price {
        font-size: px2rem(15);
        color: #ff5f16;
        line-height: px2rem(20);
        position: absolute;
        bottom: 0;
        .icon-yen {
          font-size: px2rem(10);
          margin-right: px2rem(2);
        }
        .film-tip {
          font-size: px2rem(11);
          color: #bdc0c5;
        }
      }
    }

    // 商品总价
    .products-price {
      position: absolute;
      left: 0;
      top: px2rem(130);
      display: flex;
      padding: px2rem(12) px2rem(15);
      .price-item {
        line-height: px2rem(25);
        color: #797d82;
        text-align: left;
        font-size: px2rem(16);
        flex: 0.5;
        input {
          width: 15%;
          height: 90%;
          outline: none;
          font-size: px2rem(20);
          border: 1px solid #ccc;
          text-align: center;
        }
        button {
          width: 15%;
          height: 90%;
          font-size: px2rem(20);
          outline: none;
          border: 1px solid #ccc;
          text-align: center;
        }
      }
      .price-red-font {
        line-height: px2rem(30);
        color: #ff5f16;
        text-align: right;
        font-size: px2rem(15);
        flex: 0.5;
        .all-price {
          color: #797d82;
        }
        i {
          font-size: px2rem(11);
        }
        .min-price {
          display: none;
        }
      }
    }
  }

  // 提交订单
  .pay {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    line-height: px2rem(50);
    z-index: 3000;
    display: flex;
    text-align: center;
    justify-content: space-between;
    background-color: #f4f4f4;
    span {
      color: #191a1b;
      font-size: px2rem(15);
    }
    .show-detail {
      i {
        color: #ff5f16;
        font-size: px2rem(11);
      }
      .promotion-price {
        color: #ff5f16;
        font-size: px2rem(15);
      }
    }
    .need-pay {
      span {
        color: #ff5f16;
      }
    }
    .to-pay {
      width: px2rem(95);
      background-color: #ff5f16;
      font-size: px2rem(15);
      color: #fff;
      text-align: center;
    }
  }
}
</style>
