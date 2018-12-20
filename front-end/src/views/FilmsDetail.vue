<template>
  <div class="film-detail">

    <mt-header fixed>
      <router-link to="/" slot="left" tag="div" class="returnBack">
        <mt-button icon="back" class="iconback"></mt-button>
      </router-link>
    </mt-header>

    <div
    v-for="(item, index) in films"
    :key="index"
    >

    <div class="film-poster">
      <img :src="item.poster" alt="">
    </div>

    <div class="film-detailmore">
      <div class="col">
        <div class="film-name">
          <span class="name">{{ item.name }}</span>
          <!-- item.filmType && item.filmType.name 意思是存在item.filmType再去找.name -->
          <span class="item">{{item.filmType && item.filmType.name }}</span>
        </div>
        <div class="film-grade">
          <span class="grade">{{ item.grade }}</span>
          <span class="grade-text">分</span>
        </div>
      </div>

      <div class="film-category grey-text">{{item.category}}</div>
      <div class="film-premiere-time grey-text">
        {{premiereAt}}
      </div>
      <div class="film-nation-runtime grey-text">
        {{item. nation}} | {{item.runtime}}分钟
      </div>
      <div class="film-synopsis grey-text">
        {{item.synopsis}}
      </div>
      <div class="toggle">
        <i class="iconfont icon-xiala"></i>
      </div>
    </div>

    <div class="film-actor">
      <div> <span class="actors">职演人员</span></div>
     <div class="actorlist">
       <ul class="actorul">
         <li v-for="(itemmsg,i) in item.actors" :key="i">
           <div><img :src="itemmsg.avatarAddress" alt=""></div>
           <div class="iname"><span>{{itemmsg.name}}</span></div>
           <div class="role"><span>{{itemmsg.role}}</span></div>
         </li>
       </ul>
     </div>
    </div>
    <div class="movieZhao">
      <div><span>剧照</span></div>
    </div>
  </div>
    <router-link :to="'/film/'+filmId+'/cinemas'" tag="div" class="tobuy">购票</router-link>
  </div>
</template>

<script>
import axios from 'axios';
import { Header, Button } from 'mint-ui';

export default {
  name: 'FilmDetail',

  components: {
    'mt-header': Header,
    'mt-button': Button
  },

  data () {
    return {
      films: [],
      premiereAt: '',
      filmId: ''
    }
  },

  methods: {
    getFilmDetail () {
      let filmId = this.$route.params.filmId;
      this.filmId = filmId;
      axios.get('api/film/filmsDetail', {
        params: {
          filmId: filmId
        }
      }).then((response) => {
        let result = response.data;
        if (result.code === 1) {
          // this.films = result.data;
          // console.log(typeof result.data);
          var a = result.data.map(function (item, index) {
            return item
          });
          this.films.push(a[0]);
          let da = new Date();
          let year = da.getFullYear();
          let month = da.getMonth();
          let date = da.getDate();
          this.premiereAt = (result.data.premiereAt = [year, month, date].join('-'));
        } else {
          alert(result.msg);
        }
      });
    }
  },

  created () {
    this.getFilmDetail();
  },

  beforeRouteEnter (to, from, next) {
    next();
  },

  beforeRouteUpdate (to, from, next) {
    next();
  },

  beforeRouteLeave (to, from, next) {
    next();
  }
}
</script>

<style lang='scss' scoped>
@import '../styles/common/px2rem.scss';

.film-detail {
  flex: 1;
  overflow-y: auto;

  // 海报
  .film-poster {
    width: 100%;
    height: px2rem(210);

    img {
      width: 100%;
      height: 100%;
    }
  }

  // 影片详细
  .film-detailmore {
    padding: px2rem(15);
    padding-top: px2rem(12);
    background-color: #fff;

    .col {
      display: flex;
      align-items: center;
    }

    .film-name {
      flex: 1;
      display: flex;
      align-items: center;

      .name {
        color: #191a1b;
        font-size: px2rem(18);
        height: px2rem(24);
        line-height: px2rem(24);
        margin-right: px2rem(8);
      }

      .item {
        font-size: px2rem(12);
        color: #fff;
        background-color: #d2d6dc;
        height: px2rem(14);
        line-height: px2rem(14);
        padding: 0 px2rem(2);
        border-radius: px2rem(2);
        display: inline-block;
      }
    }

    .film-grade {
      flex-shrink: 0;
      width: px2rem(100);
      text-align: right;
      color: #ffb232;
      font-size: px2rem(12);

      .grade {
        font-size: px2rem(18);
        font-style: italic;
      }
    }

    .grey-text {
      font-size: px2rem(13);
      line-height: px2rem(20);
      color: #797d82;
      margin-top: px2rem(4);
    }

    .film-synopsis {
      margin-top: px2rem(8);
      overflow: hidden;
      font-size: px2rem(13);

      .hide {
        height: px2rem(40);
      }
    }

    .toggle {
      text-align: center;
      &.hide {
        i {
          transform: translate(180deg);
        }
      }
    }
  }

  // 职演人员
  .film-actor{
    border-top: px2rem(10) solid #f4f4f4;
    width: 100%;

    .actors{
    font-size: px2rem(16);
    text-align: left;
    color: #191a1b;
    padding: px2rem(15);
    line-height:  px2rem(50);
    }

    .iname{
      margin-top: px2rem(10);
      font-size: px2rem(12);
      color: #191a1b;
    }

    .role{
      font-size: px2rem(10);
      color: #797d82;
      line-height:  px2rem(10);
    }

    .actorlist{
      overflow-x: hidden;
       padding: px2rem(5) px2rem(15) px2rem(15) px2rem(15);

      .actorul{
       display: flex;
       width: 100%;
       overflow: auto;

       li{
         width: 85%;
         margin-left: px2rem(10);
         text-align: center;

        img{
          width: px2rem(85);
          height: px2rem(85);
        }
      }
      li:first-child{
        margin-left: 0;
      }
    }
    }
  }

  // 购票
  .tobuy{
    background-color:  #ff5f16;
    position: fixed;
    bottom: 0;
    left: 0;
    height: px2rem(49);
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: px2rem(16);
    line-height: px2rem(49);
  }

  // 剧照
  .movieZhao{
    border-top: px2rem(10) solid #f4f4f4;
    div{
      span{
        font-size: px2rem(16);
        text-align: left;
        color: #191a1b;
        padding: px2rem(15);
        line-height:  px2rem(50);
      }
    }
  }
}

.mint-header{
  background: #ccc;
  height: px2rem(50);
  width: px2rem(50);
  border-radius: 50%;
  opacity: 0.5;

  .returnBack {
    width: 100%;
    height: 100%;
    // font-size: px2rem(20);
  }
}

.iconback {
  width: 100%;
  height: 100%;
  // font-size: px2rem(20);
}

.mintui {
  font-family:"mintui";
  font-size: px2rem(20);
}

.mintui-back {
   font-size: px2rem(20);
}
</style>
