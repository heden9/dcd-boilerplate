import React from 'react'
import PropTypes from 'prop-types'
import chunk from 'lodash/chunk'
import { Route, Switch } from 'dva/router'
import { connect } from 'dva'
import HomeBanner from 'Component/HomeBanner'
import GameBox from 'Component/GameBox'
import NoticeBar from 'antd-mobile/lib/notice-bar'
import GhostBtn from 'Component/GhostBtn'
import Btn from 'Component/Btn'
import CardBox from 'Component/CardBox'
import './style'

const CompositeCard = () => {
  return (
    <div className="composite-container">
      <div className="title">恭喜你 32张球队卡已集齐<br/>正在打开…</div>
      <div className="treasure-box">
        <div className="treasure swing" />
        <div className="bk-light" />
      </div>
    </div>
  )
}
function mapStateToProps ({ card }, { location }) {
  return {
    info: {
      ...card,
      card_list: chunk(card.card_list, 8)
    },
    gatherOver: location.state && location.state.over
  }
}

@connect(mapStateToProps)
export default class Home extends React.Component {
  state = {
    modal1: true
  };
  componentDidMount () {
    if (!this.props.gatherOver) {
      this.props.dispatch({ type: 'card/fetch' })
    }
  }

  render () {
    const { info } = this.props
    return (
      <div>
        <HomeBanner />
        <GameBox>
          <div className="home-box">
            <NoticeBar icon="" marqueeProps={{ loop: true }}>
              瑶***3 集卡得到世界杯纪念足球
            </NoticeBar>
            <div className="card-container">
              <Switch>
                <Route path="/home/over" exact component={CompositeCard}/>
                <Route render={() => (
                  <React.Fragment>
                    <CardBox
                      isCarousel
                      card_list={info.card_list}
                    />
                    <Btn to="/lottery">开始抽卡X{info.lottery_num}</Btn>
                    <GhostBtn.group>
                      <GhostBtn>分享可多抽2张卡</GhostBtn>
                      <GhostBtn>邀请好友可多抽3张卡</GhostBtn>
                    </GhostBtn.group>
                  </React.Fragment>
                )}/>
              </Switch>
            </div>
            <a className="more">活动规则</a>
          </div>
        </GameBox>
      </div>
    )
  }
}

Home.propTypes = {
  info: PropTypes.object,
  dispatch: PropTypes.func
}
