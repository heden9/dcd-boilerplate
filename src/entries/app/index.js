import React from 'react'
import {
  Route,
  Switch,
  routerRedux
} from 'dva/router'
import PropTypes from 'prop-types'
import dynamic from '../../utils/dynamic'
import { AppRegistry } from '../common'
import Cover from '../../layouts/cover'

require('./style.less')

const { ConnectedRouter } = routerRedux

const routes = [
  {
    path: '/home',
    models: () => [import(/* webpackChunkName: "chunk-home" */ '../../models/home')],
    component: () => import(/* webpackChunkName: "chunk-home" */ '../../pages/home')
  },
  {
    path: '/book',
    models: () => [import(/* webpackChunkName: "chunk-book" */ '../../models/book')],
    component: () => import(/* webpackChunkName: "chunk-book" */ '../../pages/book')
  }
]

function Main ({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <Cover>
        <Switch>
          {
            routes.map(({ path, ...dynamics }) => (
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
    app: {
      app_version: 320
    }
  },
  gModels: [require('../../models/app')],
  main: Main
}, __dirname)
