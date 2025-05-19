const mongoose = require('../models/mongoose');

function postData(config) {
  const uuid = crypto.randomUUID({ disableEntropyCache: true })//用于写入数据时生成唯一uuid
  config.uuid = uuid
  config.created_at = Date.now()
  mongoose.dataList.create(config)


}

module.exports = {
  postData
}