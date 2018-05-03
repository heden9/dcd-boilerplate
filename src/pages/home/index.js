import React from 'react'
import HomeBanner from 'Component/HomeBanner'
import GameBox from 'Component/GameBox'
import NoticeBar from 'antd-mobile/lib/notice-bar'
import GhostBtn from 'Component/GhostBtn'
import Btn from 'Component/Btn'
import CardBox from './components/CardBox'
import './style'
export default class Home extends React.Component {
  state = {
    modal1: true
  };
  componentDidMount () {
  }

  render () {
    return (
      <div>
        <HomeBanner />
        <GameBox>
          <div className="home-box">
            <NoticeBar icon="" marqueeProps={{ loop: true }}>
              瑶***3 集卡得到世界杯纪念足球
            </NoticeBar>
            <div className="card-container">
              <CardBox/>
              <Btn>开始抽卡X5</Btn>
              <GhostBtn.group>
                <GhostBtn>分享可多抽2张卡</GhostBtn>
                <GhostBtn>邀请好友可多抽3张卡</GhostBtn>
              </GhostBtn.group>
            </div>
          </div>
        </GameBox>
      </div>
    )
  }
}
