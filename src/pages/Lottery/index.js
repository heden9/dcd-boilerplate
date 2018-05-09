import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import chunk from 'lodash/chunk'
import GameBox from 'Component/GameBox'
import Btn from 'Component/Btn'
import GhostBtn from 'Component/GhostBtn'
import CardBox from 'Component/CardBox'
import BackCardGroup from 'Component/BackCardGroup'
import CardMask from './components/CardMask'
import Notice from 'Component/Notice'
import ShareHOC from 'Component/ShareHOC'

import './style'
function mapStateToProps ({ card, loading }) {
  return {
    card_list: chunk(card.card_list, 8),
    lottery_num: card.lottery_num,
    lottery_info: {
      hasGold: card.lottery_list.some(i => +i.type === 1),
      list: card.lottery_list
    },
    user_info: card.user_info,
    open: !!card.lottery_list.length,
    isLogin: card.user_info && card.user_info.user_id,
    loading: loading.effects['card/lottery']
  }
}
@connect(mapStateToProps)
@ShareHOC
export default class Lottery extends Component {
  openMask = () => {
    this.props.dispatch({ type: 'card/lottery' })
    // .then((e) => {
    //   this.setState({
    //     open: true
    //   })
    // })
  }
  closeMask = () => {
    this.props.dispatch({ type: 'card/mixin' })
      // .then(() => {
      //   this.setState({
      //     open: false
      //   })
      // })
      .then(() => {
        this.props.dispatch({type: 'card/checkGatherOver'})
      })
  }
  componentDidMount () {
    this.props.dispatch({ type: 'card/fetch' })
  }
  render () {
    const { card_list, lottery_info, lottery_num, loading, open, onShareClick, onInviteClick } = this.props
    // const { open } = this.state
    return (
      <div className="pg-lottery">
        <CardMask
          hasGold={lottery_info.hasGold}
          card_list={lottery_info.list}
          closeHandle={this.closeMask}
          open={open}
        />
        <Notice />
        <div className="lottery-banner">
          <div className="adv-banner">
          </div>
        </div>
        <GameBox showBanner={false}>
          {
            +lottery_num !== 0
              ? <React.Fragment>
                <BackCardGroup />
                <Btn onClick={this.openMask} disable={loading}>{ loading ? '抽卡中...' : `全部翻开X${lottery_num}` }</Btn>
              </React.Fragment>
              : <React.Fragment>
                <div className="empty-logo"/>
                <GhostBtn inline={false} onClick={onShareClick}>分享可多抽2张卡</GhostBtn>
                <GhostBtn inline={false} onClick={onInviteClick}>邀请好友可多抽3张卡</GhostBtn>
              </React.Fragment>
          }
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
