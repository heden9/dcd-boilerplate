import React, {Component} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './style'

class CountDown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      time: Math.min(props.expireTime, 3599)
    }
  }
  componentDidMount () {
    const timer = setInterval(() => {
      const time = this.state.time - 1
      if (time <= 0) {
        clearInterval(timer)
        this.props.onEnd()
        return
      }
      this.setState({ time })
    }, 1000)
  }
  render () {
    const {time} = this.state
    return (
      <div className="cpt-count-down">
        <i className="icon"></i>
        <span className="time">{moment.unix(time).format('mm:ss')}</span>
      </div>
    )
  }
}

CountDown.propTypes = {
  expireTime: PropTypes.number,
  onEnd: PropTypes.func
}

export default CountDown
