import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import PrizeCard from './components/PrizeCard'
import './style'

function mapStateToProps ({ myprizes }) {
  return {
    ...myprizes
  }
}

@connect(mapStateToProps)
export default class MyPrizes extends Component {
  componentDidMount () {
    this.props.dispatch({ type: 'myprizes/fetch' })
  }
  render () {
    const { award_list } = this.props
    return (
      <div className="page-my-prizes">
        {
          award_list.map((item, index) => (
            <PrizeCard {...item} key={index} />
          ))
        }
        {
          award_list.length === 0
            ? <div className="empty">
              <img src={require('Assets/images/empty_prize.png')} />
              <p>啥都没有哦，努力集卡吧！</p>
            </div>
            : <div className="footer">
              <p>如有问题请私信新浪微博@懂车帝APP 官方微博</p>
              <p>最终解释权归懂车帝官方所有</p>
            </div>
        }
      </div>
    )
  }
}

MyPrizes.propTypes = {
  award_list: PropTypes.array,
  dispatch: PropTypes.func
}
