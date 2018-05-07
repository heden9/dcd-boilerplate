import React, {Component} from 'react'
import Notice from 'Component/Notice'
import Btn from 'Component/Btn'
import BackCardGroup from 'Component/BackCardGroup'
import './style'

class InvideReward extends Component {
  render () {
    return (
      <div className="page-invide-reward">
        <div className="content">
          <h3 className="reward-msg-title shadow">集齐32张球队卡赢世界杯套票</h3>
          <h3 className="reward-msg-title shadow">更有多重奖品等你拿</h3>
          <Notice />
          <h3 className="reward-msg-desc">xxx送你5张卡</h3>
          <BackCardGroup>
            <Btn to="/receive">全部翻开</Btn>
          </BackCardGroup>
        </div>
      </div>
    )
  }
}

export default InvideReward
