import React from 'react'
import { connect } from 'dva'
import { Route, Redirect } from 'dva/router'
const PrivateRoute = ({ isLogin, component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isLogin ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/home',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
function mapStateToProps ({ card: { user_info } }) {
  return {
    isLogin: user_info && user_info.user_id
  }
}

export default connect(mapStateToProps)(PrivateRoute)
