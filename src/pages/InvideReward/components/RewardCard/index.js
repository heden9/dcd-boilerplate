import React, {Component} from 'react'
import Btn from 'Component/Btn'
import './style.less'

class RewardCard extends Component {
  render () {
    return (
      <div className="cpt-reward-card">
        <ul className="card-list">
          <li className="card"></li>
          <li className="card"></li>
          <li className="card"></li>
          <li className="card"></li>
          <li className="card"></li>
        </ul>
        <Btn to="/receive">全部翻开</Btn>
      </div>
    )
  }
}

export default RewardCard
