import React from 'react'
import {
  Switch,
  Route,
  // Redirect,
  routerRedux
} from 'dva/router'
import PropTypes from 'prop-types'
import dynamic from 'dva/dynamic'
import PrivateRoute from 'Component/PrivateRoute'
import { AppRegistry } from '../common'
import Cover from '../../layouts/HomeCover'

require('./style.less')

const { ConnectedRouter } = routerRedux

const routes = [
  {
    path: '/lottery',
    component: () => import(/* webpackChunkName: "chunk-lottery" */ '../../pages/Lottery')
  },
  {
    path: '/awards',
    models: () => [import(/* webpackChunkName: "chunk-award" */ '../../models/awards')],
    component: () => import(/* webpackChunkName: "chunk-awards" */ '../../pages/Awards')
  }
]
const home = [
  {
    path: '/home',
    exact: false,
    models: () => [import(/* webpackChunkName: "chunk-home" */ '../../models/home')],
    component: () => import(/* webpackChunkName: "chunk-home" */ '../../pages/Home')
  }
]
// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     fakeAuth.isAuthenticated ? (
//       <Component {...props}/>
//     ) : (
//       <Redirect to={{
//         pathname: '/login',
//         state: { from: props.location }
//       }}/>
//     )
//   )}/>
// )
function Main ({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <Cover>
        <Switch>
          {
            home.map(({ path, exact = true, ...dynamics }) => (
              <Route
                exact={exact}
                key={path}
                path={path}
                component={dynamic({
                  app,
                  ...dynamics
                })}
              />
            ))
          }
          {
            routes.map(({ path, exact = true, ...dynamics }) => (
              <PrivateRoute
                exact={exact}
                key={path}
                path={path}
                component={dynamic({
                  app,
                  ...dynamics
                })}
              />
            ))
          }
          {/* <Redirect to="/home" /> */}
        </Switch>
      </Cover>
    </ConnectedRouter>
  )
}

Main.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
}

AppRegistry({
  initialState: {
  },
  gModels: [require('../../models/card')],
  main: Main
}, __filename)
