import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import chunk from 'lodash/chunk'
import NoticeBar from 'antd-mobile/lib/notice-bar'
import GameBox from 'Component/GameBox'
import Btn from 'Component/Btn'
import CardBox from 'Component/CardBox'
import './style'
// import PropTypes from 'prop-types'
function mapStateToProps ({ card }) {
  return {
    card_list: chunk(card.card_list, 8)
  }
}
@connect(mapStateToProps)
export default class Lottery extends Component {
  render () {
    const { card_list } = this.props
    return (
      <div className="pg-lottery">
        <NoticeBar icon="" marqueeProps={{ loop: true }}>
          瑶***3 集卡得到世界杯纪念足球
        </NoticeBar>
        <div className="lottery-banner">
          <img className="adv-banner" src={require('./images/Page.png')}></img>
        </div>
        <GameBox showBanner={false}>
          <Btn >全部翻开</Btn>
        </GameBox>
        <GameBox showBanner={false} className="lottery-card-box">
          <CardBox card_list={card_list}></CardBox>
        </GameBox>
      </div>
    )
  }
}
Lottery.propTypes = {
  card_list: PropTypes.array
}
