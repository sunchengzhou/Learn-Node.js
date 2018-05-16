const express = require('express');
const expressStatic = require('express-static');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
// post请求解析中间件
app.use(bodyParser.urlencoded({
  extended: false,
  limit: 2*1024*1024
}))
// cookie解析中间件
app.use(cookieParser('abcdef'))
app.use('/',(req, res) => {
  //区分不同的cookie
  console.log(req.cookies);
  console.log(req.signedCookies)
  // 设置cookie
  const secrets = 'abcdef';
  res.cookie('user', 'blue',{signed:true})
  res.cookie('name','zhangsan');
  res.send('success')
  res.end();
})
app.use(express.static('./www'))
app.listen(9000);