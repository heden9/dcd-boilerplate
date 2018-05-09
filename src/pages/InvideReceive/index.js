import React, {Component} from 'react'
import {connect} from 'dva'
import ReceiveCard from './components/ReceiveCard'
import ReceiveRules from './components/ReceiveRules'
import Btn from 'Component/Btn'
import openApp from 'Util/openapp'
import './style'

function mapStateToProps ({ invite }) {
  return {
    ...invite
  }
}
@connect(mapStateToProps)
class InvideReceive extends Component {
  render () {
    const {card_list} = this.props
    return (
      <div className="page_invide_receive">
        <div className="content">
          <h3 className="receive-title">集齐32张球队卡赢世界杯套票</h3>
          <h3 className="receive-title">更有多重奖品等你拿</h3>
          <div className="receive-wrap">
            {
              card_list && <div className="receive-banner"></div>
            }
            <div className="receive-content">
              {
                card_list
                  ? <ReceiveCard list={card_list} />
                  : <div className="empty">您已领过别人送的球队卡啦</div>
              }
              <Btn onClick={openApp}>{card_list ? '立即领取' : '进入活动'}</Btn>
              <ReceiveRules />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default InvideReceive
