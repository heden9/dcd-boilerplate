import React, { Component } from 'react'
import PrizesCarousel from '../PrizesCarousel'
import './style'

const arr = [1, 2, 3, 4, 5, 6]

class PrizesDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentIndex: Math.floor(arr.length / 2)
    }
  }
  onPrizeChange (index) {
    this.setState({
      currentIndex: index
    })
  }
  render () {
    return (
      <div className="cpt-prizes-detail">
        <PrizesCarousel
          onChange={this.onPrizeChange.bind(this)}
          list={arr}
          initIndex={this.state.currentIndex}
        />
        <div className="prize-info">
          <h1>2018年世界杯吉祥物扎比瓦卡{this.state.currentIndex}</h1>
          <p>2人已兑换 | 活动时间:2018.5.14-2018.7.15</p>
        </div>
        <div className="prize-intro">
          <div className="intro-title">商品介绍</div>
          <div className="intro-content">
            商品介绍商品介绍商品{this.state.currentIndex}介绍商品介绍商品介绍
            商品介绍商品介绍商品介绍商品介绍商品介绍
            商品介绍商品介绍商品介绍商品介绍商品介绍
            商品介绍商品介绍商品介绍商品介绍商品介绍
            商品介绍商品介绍商品介绍商品介绍商品介绍
            商品介绍商品介绍商品介绍商品介绍商品介绍
          </div>
        </div>
      </div>
    )
  }
}

export default PrizesDetail
