const Mock = require('mockjs')
module.exports = Mock.mock({
  "status": "success",
  "prompts": "",
  "data": {
    "bingo|1-2": false, // true award/card_list
    "award": {
      "expire_time|1-3599": 2000,
      "create_time": 1525573949,
      "status|0-2": 1,
      "type": "",
      "prize_no": "",
      "extra": "",
      "prize_info": {
        "name": "吉祥物扎比瓦卡",
        "detail": "",
        "bgimg_transparent": "//sf3-ttcdn-tos.pstatp.com/obj/ttfe/motor/fe/image/worldcup/jxw_t.png",
        "bgimg": "",
        "id": "",
        "desc": ""
      },
    },
    "card_list|8": [{
      "num": 1,
      "name": "@name",
      "score": "100",
      "bgimg": "//sf3-ttcdn-tos.pstatp.com/obj/ttfe/motor/fe/image/worldcup/03.png",
      "id|+1": 1,
      "type|0-5": 0,
      "desc": ""
    }]
  },
  "message": "success"
})
