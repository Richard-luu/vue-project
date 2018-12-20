var express = require('express');
var app = express();

//  引入路由模块
var FilmRuter = require('./routes/film.js');
var UserRouter = require('./routes/user.js');
var CityRouter = require('./routes/city');

//  使用路由模块，中间件
app.use('/api/film/',FilmRuter);
app.use('/api/user/',UserRouter);
app.use('/api/city/',CityRouter);

app.listen(3000);
console.log('服务器启动成功');
