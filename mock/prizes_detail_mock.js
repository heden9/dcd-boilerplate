const Mock = require('mockjs')
module.exports = Mock.mock({
    "status": "success",
    "prompts": "",
    "data": {
      "activity_time": '2018.5.14-2018.7.15',
      "num": 2,
      "prize": {
        "name": "@name",
        "desc": "@desc",
        "detail": "@detail",
        "bgimg": "",
        "type": 1,
        "sub_type": 'a',
        "extra": '商品介绍？'
      }
    },
    "message": "success"
})
