import React, {Component} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import CountDown from 'Component/CountDown'
import './style'

const styleMap = {0: 'overdue', 1: 'unreceived', 2: 'sending'}

class PrizeCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      status: props.status
    }
    this.onCountDownEnd = this.onCountDownEnd.bind(this)
  }
  onCountDownEnd () {
    this.setState({ status: 0 })
  }
  render () {
    const {name, create_time, expire_time} = this.props
    const {status} = this.state
    const cardStyle = styleMap[status] || ''
    return (
      <div className={`cpt-prize-card ${cardStyle}`}>
        <div className="info">
          <h3>{name}</h3>
          {
            status === 1
              ? <p>请尽快填写兑奖信息，逾期作废！</p>
              : <p>{moment.unix(create_time).format('YYYY-MM-DD')}</p>
          }
        </div>
        <div className="status">
          { status === 0 && '已过期' }
          { status === 2 && '发送中' }
          {
            status === 1 &&
            <CountDown expireTime={expire_time} onEnd={this.onCountDownEnd} />
          }
        </div>
      </div>
    )
  }
}

PrizeCard.propTypes = {
  status: PropTypes.number,
  name: PropTypes.string,
  create_time: PropTypes.number,
  expire_time: PropTypes.number
}

export default PrizeCard
