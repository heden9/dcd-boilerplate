import React, {Component} from 'react'
import Btn from 'Component/Btn'
import BackCardGroup from 'Component/BackCardGroup'
import RewardMsg from './components/RewardMsg'
import './style'

class InvideReward extends Component {
  render () {
    return (
      <div className="page-invide-reward">
        <div className="content">
          <RewardMsg />
          <BackCardGroup>
            <Btn to="/receive">全部翻开</Btn>
          </BackCardGroup>
        </div>
      </div>
    )
  }
}

export default InvideReward
