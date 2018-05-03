import React, {Component} from 'react'
import Btn from 'Component/Btn'
import './style'

class ReceiveCard extends Component {
  render () {
    return (
      <div className="cpt-receive-card">
        <div className="receive-banner"></div>
        <div className="receive-content">
          <Btn>立即领取</Btn>
        </div>
      </div>
    )
  }
}

export default ReceiveCard
