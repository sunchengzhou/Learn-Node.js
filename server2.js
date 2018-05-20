const jade = require('jade');
const str = jade.renderFile('./www/2.jade',{
  pretty:true,
  arr:['zhangsan','lisi','wangwu']
})

console.log(str)