import React, {Component} from 'react'
import RewardMsg from './components/RewardMsg'
import RewardCard from './components/RewardCard'
import './style'

class InvideReward extends Component {
  render () {
    return (
      <div className="page-invide-reward">
        <div className="content">
          <RewardMsg />
          <RewardCard />
        </div>
      </div>
    )
  }
}

export default InvideReward
