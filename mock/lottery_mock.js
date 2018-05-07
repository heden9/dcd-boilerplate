const Mock = require('mockjs')
const arr = [2, 3, 5, 7, 8, 10]
module.exports = Mock.mock({
  "status": "success",
  "prompts": "",
  "data": {
    "ad_owner": "",
    "card_list|7": [{
      "num": 1,
      "name": "@name",
      "score": "100",
      "bgimg": "//sf3-ttcdn-tos.pstatp.com/obj/ttfe/motor/fe/image/worldcup/11.png",
      "id|+1": 1,
      "type|0-5": 0,
      "desc": ""
    }]
  },
  "message": "success"
})
