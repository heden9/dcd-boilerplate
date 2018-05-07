import React from 'react'
import {connect} from 'dva'
import NoticeBar from 'antd-mobile/lib/notice-bar'

function mapStateToProps ({ notice }) {
  return {
    ...notice
  }
}

@connect(mapStateToProps)

class Notice extends React.Component {
  componentWillMount () {
    this.props.dispatch({ type: 'notice/fetch' })
  }
  render () {
    const {winners = []} = this.props
    return (
      <NoticeBar icon="" marqueeProps={{ loop: true, fps: 80 }}>
        {
          winners.map((item) => (
            item.name + item.prize_desc
          )).join(' ')
        }
      </NoticeBar>
    )
  }
}

export default Notice
