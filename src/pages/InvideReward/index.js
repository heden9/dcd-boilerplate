import React, {Component} from 'react'
import {connect} from 'dva'
import { routerRedux } from 'dva/router'
import Notice from 'Component/Notice'
import Btn from 'Component/Btn'
import BackCardGroup from 'Component/BackCardGroup'
import login from 'Util/login'
import {getRequestParams, sessionStorageProxy} from 'Util/tools'
import './style'

// 关联邀请人, 解决中文名字问题
let { from_user_id, from_user_name = '' } = getRequestParams()
from_user_name = decodeURIComponent(from_user_name) || ''
from_user_name = sessionStorageProxy.getItem('from_user_name') || from_user_name
sessionStorageProxy.setItem('from_user_name', from_user_name || '')

function mapStateToProps ({ invite }) {
  return {
    ...invite
  }
}
@connect(mapStateToProps)
class InvideReward extends Component {
  constructor (props) {
    super(props)
    this.onStartClick = this.loginEnhance(this.onStartClick).bind(this)
  }
  componentDidMount () {
    this.props.dispatch({ type: 'invite/fetch', payload: { from_user_id } })
  }
  onStartClick = () => {
    this.props.dispatch(routerRedux.push({
      pathname: '/receive'
    }))
  }
  loginEnhance (func) {
    const that = this
    return function () {
      if (that.props.isLogin) {
        return func.apply(this, [].slice.call(arguments, 0))
      } else {
        login(() => {
          that.props.dispatch({
            type: 'invite/fetch',
            payload: {from_user_id: from_user_id}
          })
        })
      }
    }
  }
  render () {
    console.log(from_user_name)
    return (
      <div className="page-invide-reward">
        <div className="content">
          <h3 className="reward-msg-title shadow">集齐32张球队卡赢世界杯套票</h3>
          <h3 className="reward-msg-title shadow">更有多重奖品等你拿</h3>
          <Notice />
          <h3 className="reward-msg-desc">
            {from_user_name || '懂车帝'}送你5张卡
          </h3>
          <BackCardGroup>
            <Btn
              onClick={this.onStartClick}
              style={{marginTop: '20px'}}
            >
              全部翻开
            </Btn>
          </BackCardGroup>
        </div>
      </div>
    )
  }
}

export default InvideReward
