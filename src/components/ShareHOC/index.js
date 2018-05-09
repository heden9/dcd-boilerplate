import React from 'react'
import ShareMask from 'Component/ShareMask'
import login from 'Util/login'
import { os, browser } from 'Util/ua'
import { initWechatShare, setWechatShare } from 'Util/wechat'
import { routerRedux } from 'dva/router'
export default function ShareHOC (WrapperComponent) {
  return class _ShareHOC extends React.Component {
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
      this.onStartClick = this.loginEnhance(this.onStartClick).bind(this)
      this.onShareClick = this.loginEnhance(this.onShareClick).bind(this)
      this.onInviteClick = this.loginEnhance(this.onInviteClick).bind(this)
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
    onShareClick () {
      this.triggerShare(this.shareData)
    }
    onInviteClick () {
      const {user_info = {}} = this.props
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
    onShareMaskClose = () => {
      this.setState({ mask: false })
    }
    onStartClick = () => {
      this.props.dispatch(routerRedux.push({
        pathname: '/lottery'
      }))
    }
    onEnterAwards = () => {
      this.props.dispatch(routerRedux.push({
        pathname: '/awards'
      }))
    }
    render () {
      const { mask } = this.state
      const props = {
        onShareClick: this.onShareClick,
        onInviteClick: this.onInviteClick,
        onStartClick: this.onStartClick,
        onEnterAwards: this.onEnterAwards,
        ...this.props
      }
      return (
        <React.Fragment>
          <ShareMask open={!!mask} onClose={this.onShareMaskClose} />
          <WrapperComponent {...props} />
        </React.Fragment>
      )
    }
  }
}
