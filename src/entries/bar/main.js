/**
 * 动态路由方式
 */
import React from 'react'
import {
  Route,
  Switch,
  Redirect,
  routerRedux
} from 'dva/router'
import PropTypes from 'prop-types'
import dynamic from 'dva/dynamic'
import Cover from '../../layouts/Cover'

require('./style.less')

const { ConnectedRouter } = routerRedux

const routes = [
  {
    path: '/home',
    exact: true,
    models: () => [import(/* webpackChunkName: "chunk-home" */ '../../models/home')],
    component: () => import(/* webpackChunkName: "chunk-home" */ '../../pages/Home')
  },
  {
    path: '/news',
    exact: true,
    component: () => import(/* webpackChunkName: "chunk-news" */ '../../pages/News')
  }
]
function Main ({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <Cover>
        <Switch>
          {
            routes.map(({ path, exact = true, ...dynamics }) => (
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
          <Redirect to="/home" />
        </Switch>
      </Cover>
    </ConnectedRouter>
  )
}

Main.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
}

export default Main
