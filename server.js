const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const pathLib = require('path');
const fs =require('fs');

const objMulter = multer({
  dest:'./www/upload/'
});
const server = express();

server.use(objMulter.any());
server.post('/', function(req,res) {
  console.log(req.files)
  const newname = req.files[0].path + pathLib.parse(req.files[0].originalname).ext
  console.log(newname)
  // 用fs给上传的文件重新命名,这里重命名有些问题
  fs.rename = (req.files[0].path,newname,function(err){
    if(err) {
      res.send('上传失败')
    }else{
      res.send('上传成功')
    }
  })
})

server.listen(9000);