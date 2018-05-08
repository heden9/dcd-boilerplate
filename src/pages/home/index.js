import React from 'react'
import PropTypes from 'prop-types'
import chunk from 'lodash/chunk'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import login from 'Util/login'
import { os, browser } from 'Util/ua'
import { initWechatShare, setWechatShare } from 'Util/wechat'
import HomeBanner from 'Component/HomeBanner'
import GameBox from 'Component/GameBox'
import Notice from 'Component/Notice'
import GhostBtn from 'Component/GhostBtn'
import Btn from 'Component/Btn'
import CardBox from 'Component/CardBox'
import ShareMask from 'Component/ShareMask'
import AwardMask from './components/AwardMask'
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
    isLogin: card.user_info && card.user_info.user_id,
    gatherOver: location.state && location.state.over,
    award: location.state && location.state.award
  }
}

@connect(mapStateToProps)
export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mask: false
    }
    this.shareData = {
      title: '标题',
      desc: '描述',
      image: 'http://s3.pstatp.com/motor/fe/m_web/image/icon_b20643c1e72d93179f6ff6e3e33e2ab0.png',
      url: 'http://m.zjurl.cn/motor/growthactivity/worldcup2018/home/'
    }
    this.onShareMaskClose = this.onShareMaskClose.bind(this)
    this.onStartClick = this.loginEnhance(this.onStartClick).bind(this)
    this.onShareClick = this.loginEnhance(this.onShareClick).bind(this)
    this.onInviteClick = this.loginEnhance(this.onInviteClick).bind(this)
  }
  componentDidMount () {
    if (!this.props.gatherOver) {
      this.props.dispatch({ type: 'card/fetch' })
    }
    if (browser.weixin) {
      initWechatShare(this.shareData)
    }
  }
  loginEnhance (func) {
    const that = this
    return function () {
      if (that.props.isLogin) {
        return func.apply(this, [].slice.call(arguments, 0))
      } else {
        login(() => {
          that.props.dispatch({ type: 'card/fetch' })
        })
      }
    }
  }
  onStartClick () {
    this.props.dispatch(routerRedux.push({
      pathname: '/lottery'
    }))
  }
  onShareClick () {
    this.triggerShare(this.shareData)
  }
  onInviteClick () {
    const {user_info = {}} = this.props.info
    if (user_info.user_id) {
      this.shareData.url += `http://m.zjurl.cn/motor/growthactivity/worldcup2018/invite/?from_user_id=${user_info.user_id}`
    }
    this.triggerShare(this.shareData)
  }
  triggerShare (shareData) {
    if (browser.weixin) {
      setWechatShare(shareData)
    }
    if (os.automobile) {
      window.ToutiaoJSBridge.call('share_board', {
        ...shareData
      }, (res) => {})
    } else {
      this.setState({ mask: true })
    }
  }
  onShareMaskClose () {
    this.setState({ mask: false })
  }
  render () {
    const { info, gatherOver, award } = this.props
    const { mask } = this.state
    return (
      <div>
        <ShareMask open={!!mask} onClose={this.onShareMaskClose} />
        <AwardMask open={!!award} award={award} />
        <HomeBanner />
        <GameBox>
          <div className="home-box">
            <Notice />
            <div className="card-container">
              {
                gatherOver
                  ? <CompositeCard />
                  : (
                    <React.Fragment>
                      <CardBox
                        isCarousel
                        card_list={info.card_list}
                      />
                      <Btn
                        onClick={this.onStartClick}
                      >
                        开始抽卡X{info.lottery_num}
                      </Btn>
                      <GhostBtn.group>
                        <GhostBtn onClick={this.onShareClick}>分享可多抽2张卡</GhostBtn>
                        <GhostBtn onClick={this.onInviteClick}>邀请好友可多抽3张卡</GhostBtn>
                      </GhostBtn.group>
                    </React.Fragment>
                  )
              }
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
