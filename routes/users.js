var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  const data = {
    code: "000000",
    msg: "success",
    data: ""
  }
  res.header("Content-Type", "application/json;charset=UTF-8")
  res.send(JSON.stringify(data));
});

module.exports = router;
