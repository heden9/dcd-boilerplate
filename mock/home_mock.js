const Mock = require('mockjs')
module.exports = Mock.mock({
    "status": "success",
    "prompts": "",
    "data": {
        "user_info": {
            "user_id": '100000'
        },
        "has_expire_prize": 5,
        "score": 100,
        "card_list|32": [{
            "num|0-3": 0,
            "name": "@name",
            "score": "100",
            "bgimg": "",
            "id|+1": 1,
            "type|0-5": 0,
            "desc": ""
        }],
        "lottery_num": 5
    },
    "message": "success"
})
