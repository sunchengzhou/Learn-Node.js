const fs= require('fs');
fs.rename('a','b.txt',function(err) {
  console.log(err)
})