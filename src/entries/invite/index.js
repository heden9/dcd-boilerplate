import React from 'react'
import {
  Route,
  Switch,
  Redirect,
  routerRedux
} from 'dva/router'
import PropTypes from 'prop-types'
import dynamic from '../../utils/dynamic'
import { AppRegistry } from '../common'
import InvideCover from '../../layouts/InviteCover'
import './style'

const { ConnectedRouter } = routerRedux

const routes = [
  {
    path: '/reward',
    models: () => [import(/* webpackChunkName: "chunk-home" */ '../../models/home')],
    component: () => import(/* webpackChunkName: "chunk-home" */ '../../pages/InvideReward')
  },
  {
    path: '/receive',
    models: () => [],
    component: () => import(/* webpackChunkName: "chunk-book" */ '../../pages/InvideReceive')
  }
]

function Main ({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <InvideCover>
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
          <Redirect to="/reward" />
        </Switch>
      </InvideCover>
    </ConnectedRouter>
  )
}

Main.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
}

AppRegistry({
  gModels: [require('../../models/app')],
  main: Main
}, __dirname)
