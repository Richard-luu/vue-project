//  专门处理地址相关的接口
var express = require('express');
var router = express.Router();
// var async = require('async');
var MogoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017';


//获取城市信息
router.get('/allCities',function(req,res) {

  MogoClient.connect(url,{ useNewUrlParser:true },function(err,client) {
    if(err){
      res.json({
        code: 0,
        msg: '网络异常，请稍后重试'
      });
    } else {
      let db = client.db('film');

      db.collection('cities').find().toArray(function(err,data){
        if(err){
          res.json({
            code: 0,
            msg: '出错啦'
          });
        } else {
          res.json({
            code: 1,
            msg: '查询成功',
            data: data
          });
        }
        client.close();
      })
    }
  })
});

module.exports = router;