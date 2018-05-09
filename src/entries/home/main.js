import React from 'react'
import {
  Route,
  Switch,
  Redirect,
  routerRedux
} from 'dva/router'
import PropTypes from 'prop-types'
import dynamic from 'dva/dynamic'
import Cover from '../../layouts/HomeCover'

require('./style.less')

const { ConnectedRouter } = routerRedux

const routes = [
  {
    path: '/home',
    exact: false,
    models: () => [import(/* webpackChunkName: "chunk-home" */ '../../models/home')],
    component: () => import(/* webpackChunkName: "chunk-home" */ '../../pages/Home')
  },
  {
    path: '/lottery',
    needLogin: false,
    component: () => import(/* webpackChunkName: "chunk-lottery" */ '../../pages/Lottery')
  },
  {
    path: '/awards',
    needLogin: false,
    models: () => [import(/* webpackChunkName: "chunk-award" */ '../../models/awards')],
    component: () => import(/* webpackChunkName: "chunk-awards" */ '../../pages/Awards')
  },
  {
    path: '/sorry',
    component: () => import(/* webpackChunkName: "chunk-sorry" */ '../../pages/Sorry')
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