const Mock = require('mockjs')
module.exports = Mock.mock({
  "status": "success",
  "prompts": "",
  "data": {
    "bingo|1-2": true, // true award/card_list
    "award": {
      "expire_time|1-3599": 2000,
      "create_time": 1525573949,
      "name": "@name",
      "status|0-2": 1,
      "type": "",
      "prize_no": "",
      "extra": ""
    },
    "card_list|8": [{
      "num": 1,
      "name": "@name",
      "score": "100",
      "bgimg": "",
      "id|+1": 1,
      "type|0-5": 0,
      "desc": ""
    }]
  },
  "message": "success"
})
