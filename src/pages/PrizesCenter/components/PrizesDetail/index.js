import React from 'react'
import './style'

const PrizesDetail = ({ detail: {prize = {}, num = 0, activity_time} }) => (
  <div className="cpt-prizes-detail">
    <div className="prize-info">
      <h1>{prize.desc}</h1>
      <p>{num}人已兑换 | 活动时间:{activity_time}</p>
    </div>
    <div className="prize-intro">
      <div className="intro-title">商品介绍</div>
      <div className="intro-content">
        {prize.detail}
      </div>
    </div>
  </div>
)

export default PrizesDetail
