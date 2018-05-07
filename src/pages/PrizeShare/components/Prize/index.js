import React from 'react'
import './style'

const Prize = ({rank = 'XX', award = {}, share = false}) => (
  <div className="cpt-prize-card">
    <div className="prize-rank">
      <p>
        {share ? '我' : '你'}
        是在懂车帝中第
        <span>{rank}</span>
        个集齐32张
      </p>
      <p>球队卡的世界杯球迷</p>
    </div>
    <div className="prize-name">
      <p>
        {share ? '我得到奖品' : '恭喜你获得了'}
      </p>
      <h3>{award.name}</h3>
    </div>
    <div className="prize-img">
      <div className="bg-light"></div>
      <img src={award.bgimg} />
    </div>
  </div>
)

export default Prize
