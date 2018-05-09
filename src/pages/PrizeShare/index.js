import React from 'react'
import Btn from 'Component/Btn'
import Header from './components/Header'
import Prize from './components/Prize'
import { fetchAwardDetail } from 'Service/api'
import { request } from 'Util/tools'
import './style'

const is_share = request('is_share') || 0
const prize_no = request('prize_no')

class PrizeShare extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.shareData = {
      title: '标题',
      desc: '这是描述',
      image: 'http://s3.pstatp.com/motor/fe/m_web/image/icon_b20643c1e72d93179f6ff6e3e33e2ab0.png',
      url: `http://m.zjurl.cn/motor/growthactivity/worldcup2018/prizeshare/?is_share=1&prize_no=${prize_no}`
    }
    fetchAwardDetail(prize_no)
      .then((res) => {
        this.setState({
          ...res
        })
      })
  }
  onShareClick = () => {
    window.ToutiaoJSBridge.call('share_board', {
      ...this.shareData
    }, (res) => {})
  }
  render () {
    const { rank, award = {} } = this.state
    const { prize_info = {} } = award
    return (
      <div className="page-prize-share">
        <Header title="信息提交成功" />
        <div className="prize-wrap">
          <Prize share={is_share} rank={rank} award={prize_info} />
          {
            !is_share && <Btn onClick={this.onShareClick}>炫耀一下</Btn>
          }
        </div>
      </div>
    )
  }
}

export default PrizeShare
