import React from 'react'
import {
  Route,
  Switch,
  Redirect,
  routerRedux
} from 'dva/router'
import PropTypes from 'prop-types'
import dynamic from 'dva/dynamic'
import InvideCover from '../../layouts/InviteCover'
import './style'

const { ConnectedRouter } = routerRedux

const routes = [
  {
    path: '/',
    exact: true,
    component: () => import(/* webpackChunkName: "chunk-reward" */ '../../pages/InvideReward')
  },
  {
    path: '/receive',
    exact: true,
    component: () => import(/* webpackChunkName: "chunk-receive" */ '../../pages/InvideReceive')
  }
]

function Main ({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <InvideCover>
        <Switch>
          {
            routes.map(({ path, exact, ...dynamics }) => (
              <Route
                exact
                key={path}
                path={path}
                component={dynamic({
                  app,
                  ...dynamics
                })}
              />
            ))
          }
          <Redirect to="/" />
        </Switch>
      </InvideCover>
    </ConnectedRouter>
  )
}

Main.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
}
export default Main
