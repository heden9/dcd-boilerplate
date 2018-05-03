import React, {Component} from 'react'
import ReceiveCard from './components/ReceiveCard'
import './style'

class InvideReceive extends Component {
  render () {
    return (
      <div className="page_invide_receive">
        <div className="content">
          <h3 className="receive-title">集齐32张球队卡赢世界杯套票</h3>
          <h3 className="receive-title">更有多重奖品等你拿</h3>
          <ReceiveCard />
        </div>
      </div>
    )
  }
}

export default InvideReceive
