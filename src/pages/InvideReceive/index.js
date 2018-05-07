import React, {Component} from 'react'
import {connect} from 'dva'
import ReceiveCard from './components/ReceiveCard'
import ReceiveRules from './components/ReceiveRules'
import Btn from 'Component/Btn'
import './style'

function mapStateToProps ({ invite }) {
  return {
    ...invite
  }
}

@connect(mapStateToProps)

class InvideReceive extends Component {
  componentWillMount () {
    this.props.dispatch({
      type: 'invite/fetch',
      payload: {from_user_id: 121}
    })
  }
  render () {
    const {card_list} = this.props
    console.log(card_list)
    return (
      <div className="page_invide_receive">
        <div className="content">
          <h3 className="receive-title">集齐32张球队卡赢世界杯套票</h3>
          <h3 className="receive-title">更有多重奖品等你拿</h3>
          <div className="receive-wrap">
            <div className="receive-banner"></div>
            <div className="receive-content">
              <ReceiveCard list={card_list} />
              <Btn>立即领取</Btn>
              <ReceiveRules />
            </div>
          </div>
          {/* <ReceiveCard list={card_list}>
            <Btn>立即领取</Btn>
            <ReceiveRules />
          </ReceiveCard> */}
        </div>
      </div>
    )
  }
}

export default InvideReceive
