const mongoose = require('mongoose')

connectDatabase()//连接数据库
async function connectDatabase() {
  try {
    const connect = await mongoose.connect('mongodb://127.0.0.1:27017/ospeech', {
      user: 'ospeech',
      pass: '468569'
    })
    console.log('连接成功');

  } catch (error) {
    console.log('连接失败', error);

  }
}


const uuid = crypto.randomUUID({ disableEntropyCache: true })//用于写入数据时生成唯一uuid

const dataListSchema = new mongoose.Schema({
  // 预定义结构
  uuid: {
    type: String,
    required: true // 唯一uuid标识，必填
  },
  oneoSpeech: {
    type: String,
    required: true // 一言正文，必填
  },
  type: {
    type: String,
    required: true, enum: [
      "a", // 动画      ||**||
      "b", // 漫画      ||**||
      "c", // 游戏      ||**||
      "d", // 文学      ||**||
      "e", // 原创      ||**||
      "f", // 网络      ||**||一言的类型，必填
      "g", // 其他      ||**||
      "h", // 影视      ||**||
      "i", // 诗词      ||**||
      "j", // 网易云    ||**||
      "k", // 哲学      ||**||
      "l"  // 抖机灵    ||**||
    ]
  },
  from: {
    type: String,
    required: true
  },
  from_who: {
    type: String,
    default: null, // 一言的作者，非必填
  },
  created_at: {
    type: Number,
    required: true // 添加时间，必填
  }
});

const dataList = mongoose.model('dataList', dataListSchema)//创建模型用于数据的增删改查，类似于mysql里面的表

// 这里是用来写入第一次的数据的
// ==========================================================================================================
// for (let i = 0; i < devData.length; i++) {
//   const uuid = crypto.randomUUID({ disableEntropyCache: true })//用于写入数据时生成唯一uuid
//   dataList.create({//预定义结构
//     uuid: uuid,//唯一uuid标识
//     oneoSpeech: devData[i].hitokoto,//一言正文
//     type: devData[i].type,//类型
//     from: devData[i].from,//一言的出处
//     from_who: devData[i].from_who,//一言的作者
//     created_at: Date.now(),//添加时间
//   })

// console.log(devData[i].hitokoto);
// }
// ==========================================================================================================


module.exports = {
  dataList
}