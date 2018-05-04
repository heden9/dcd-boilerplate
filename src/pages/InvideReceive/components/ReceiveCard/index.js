import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Btn from 'Component/Btn'
import './style'

const Rules = () => (
  <ul className="rules">
    <li>下载懂车帝</li>
    <li className="arrow"></li>
    <li>手机号登录</li>
    <li className="arrow"></li>
    <li>进入世界杯活动页领取</li>
  </ul>
)
const list = [1, 2, 3, 4, 5, 6, 7]
const CardList = ({list}) => (
  <ul className="card-list">
    {
      list.map((item, index) => (
        <li className={`card ${index % 2 ? 'gold' : ''}`} key={index}>{item}</li>
      ))
    }
  </ul>
)

CardList.propTypes = {
  list: PropTypes.array
}

class ReceiveCard extends Component {
  render () {
    return (
      <div className="cpt-receive-card">
        <div className="receive-banner"></div>
        <div className="receive-content">
          <CardList list={list} />
          <Btn>立即领取</Btn>
          <Rules />
        </div>
      </div>
    )
  }
}

export default ReceiveCard
