var express = require('express');
var router = express.Router();
const getData = require('../services/get-data');
const postData = require('../services/post-data');

/* GET home page. */
router.get('/', function (req, res, next) {
  if (!(/[a-l]/.test(req.query.c))) {
    res.json({
      "code": 400,          // 自定义业务码，0表示成功
      "msg": "参数错误",     // 错误时返回描述
    })
    return
  }
  (async () => {
    let data = await getData.getData(req.query)
    res.json({
      "code": 200,          // 自定义业务码，0表示成功
      "msg": "success",     // 错误时返回描述
      "data": data
    })
  })()

});

router.post('/', function (req, res, next) {
  postData.postData(req.body)

  res.json('ok')
})

module.exports = router;
