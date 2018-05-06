import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import chunk from 'lodash/chunk'
import NoticeBar from 'antd-mobile/lib/notice-bar'
import GameBox from 'Component/GameBox'
import Btn from 'Component/Btn'
import CardBox from 'Component/CardBox'
import BackCardGroup from 'Component/BackCardGroup'
import CardMask from './components/CardMask'
import './style'
// import PropTypes from 'prop-types'
function mapStateToProps ({ card }) {
  return {
    card_list: chunk(card.card_list, 8),
    lottery_info: {
      hasGold: card.lottery_list.some(i => +i.type === 1),
      list: card.lottery_list
    }
  }
}
// function mapDispatchToProps (dispatch) {
//   return {
//     fetchLotteryRes () {
//       dispatch({ type: 'card/lottery' })
//     }
//   }
// }
@connect(mapStateToProps)
export default class Lottery extends Component {
  state = {
    open: false
  }
  openMask = () => {
    this.props.dispatch({ type: 'card/lottery' })
      .then((e) => {
        this.setState({
          open: true
        })
      })
  }
  closeMask = () => {
    this.props.dispatch({ type: 'card/mixin' })
      .then(() => {
        this.setState({
          open: false
        })
      })
  }
  componentDidMount () {
    this.props.dispatch({ type: 'card/fetch' })
  }
  render () {
    const { card_list, lottery_info } = this.props
    const { open } = this.state
    return (
      <div className="pg-lottery">
        <CardMask
          hasGold={lottery_info.hasGold}
          card_list={lottery_info.list}
          closeHandle={this.closeMask}
          open={open}
        />
        <NoticeBar icon="" marqueeProps={{ loop: true }}>
          瑶***3 集卡得到世界杯纪念足球
        </NoticeBar>
        <div className="lottery-banner">
          <div className="adv-banner">
          </div>
        </div>
        <GameBox showBanner={false}>
          <BackCardGroup />
          <Btn onClick={this.openMask} >全部翻开</Btn>
        </GameBox>
        <GameBox showBanner={false} className="lottery-card-box">
          <CardBox
            showNum
            card_list={card_list}
          ></CardBox>
        </GameBox>
      </div>
    )
  }
}
Lottery.propTypes = {
  card_list: PropTypes.array
}
