const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession =require('cookie-session')
const app = express();

let arr = [];
for(let i=0;i<1000;i++) {
  arr.push('ios'+ Math.random()*100);
}
app.use(cookieParser());
app.use(cookieSession({
  name:'sess',
  keys: arr,
  maxAge:24*3600*1000
}))

app.use('/',function(req,res) {
  req.session.count = 99;
  res.send('ok')
})
app.listen(9000)