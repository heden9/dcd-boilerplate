const Mock = require('mockjs')
module.exports = () => {
  return Mock.mock({
    "status": 0,
    "prompts": "",
    "data": {
      "award_list|6": [{
        "expire_time|1-3599": 2000,
        "create_time": 15255739420,
        "name": "@name",
        "status|0-2": 1,
        "type": "",
        "prize_no": "",
        "extra": ""
      }]
    },
    "message": "success"
  })
}
