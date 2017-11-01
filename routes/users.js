var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const User = require('../core/models/User')

mongoose.connect('mongodb://172.16.106.110/user',{useMongoClient:true})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(){

})

/* GET users listing. */
router.post('/', function (req, res, next) {
  console.log('接收到了请求');
  console.log(req.body);
  User.on('error', console.error.bind(console, 'connection error:'))
  User.findByNameAndPwd(req.body.name, req.body.passwd, function (err, user) {
    if(err){
      console.log(err)
    }
    const data = {
      code: "000000",
      msg: "success",
      data: ""
    }
    res.header("Content-Type", "application/json;charset=UTF-8")
    res.send(JSON.stringify(data));
  })
});

module.exports = router;
