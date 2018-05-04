import React from 'react'
import NoticeBar from 'antd-mobile/lib/notice-bar'
import './style.less'

const RewardMsg = () => (
  <React.Fragment>
    <h3 className="reward-msg-title shadow">集齐32张球队卡赢世界杯套票</h3>
    <h3 className="reward-msg-title shadow">更有多重奖品等你拿</h3>
    <NoticeBar icon="" marqueeProps={{ loop: true }}>
      瑶***3 集卡得到世界杯纪念足球
    </NoticeBar>
    <h3 className="reward-msg-desc">xxx送你5张卡</h3>
  </React.Fragment>
)

export default RewardMsg
