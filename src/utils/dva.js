import * as core from 'dva-core'
import {
  routerMiddleware,
  routerReducer as routing
} from 'react-router-redux'
export default function (opts = {}) {
  const history = opts.history
  const createOpts = {
    initialReducer: {
      routing
    },
    setupMiddlewares (middlewares) {
      return [
        routerMiddleware(history),
        ...middlewares
      ]
    },
    setupApp (app) {
      app._history = patchHistory(history)
    }
  }

  const app = core.create(opts, createOpts)
  return app
}

function patchHistory (history) {
  const oldListen = history.listen
  history.listen = (callback) => {
    callback(history.location)
    return oldListen.call(history, callback)
  }
  return history
}
