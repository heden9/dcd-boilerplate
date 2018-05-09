import React from 'react'
import HomeBanner from 'Component/HomeBanner'

const navbar = {
  '奖品中心': {
    to: '/prizes/'
  }
}
// @connect(mapStateToProps)
export default class Cover extends React.Component {
  // constructor (props) {
  //   super(props)
  //   props.dispatch({
  //     type: 'invite/setFromUser',
  //     payload: {
  //       from_user_info: { from_user_id, from_user_name }
  //     }
  //   })
  //   // 用来判断是否已经登录
  //   props.dispatch({ type: 'invite/fetch', payload: {from_user_id} })
  // }
  render () {
    const { children } = this.props
    return (
      <React.Fragment>
        <HomeBanner navbar={navbar} />
        {
          children
        }
      </React.Fragment>
    )
  }
}
