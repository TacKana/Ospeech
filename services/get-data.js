const mongoose = require('../models/mongoose');




async function getData(config) {//这是个异步方法，在调用时候也需要异步调用，不然返回Promise { <pending> }，傻逼玩意让我卡了不少时间
  if (config.c) {
    try {
      // const listNum = await mongoose.dataList.countDocuments({})
      // const randomInt = Math.floor(Math.random() * listNum);
      // const data = await mongoose.dataList.findOne().skip(randomInt)
      let data = await mongoose.dataList.aggregate([{ $match: { type: config.c } }, { $sample: { size: 1 } }, { $project: { _id: 0 } }]);
      data[0].length = data[0].oneoSpeech.length
      // console.log(data);
      return data
    } catch (error) {
      return { "无内容": 400 }
    }
    return
  }
  try {
    let data = await mongoose.dataList.aggregate([{ $sample: { size: 1 } }, { $project: { _id: 0 } }]);
    data[0].length = data[0].oneoSpeech.length
    // console.log(data);
    return data
  } catch (error) {
    return '无数据'
  }

}

module.exports = {
  getData
}