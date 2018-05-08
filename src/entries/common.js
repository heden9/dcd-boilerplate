import dva from 'dva'
import React from 'react'
import ReactDOM from 'react-dom'
import createLoading from 'dva-loading'
import { AppContainer } from 'react-hot-loader'
import '../utils/normalize'
import '../utils/fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    window.FastClick.attach(document.body)
  }, false)
}
if (__DEV__) {
  const setCookie = function (c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + '=' + escape(value) +
    ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
  }
  setCookie('sessionid', '7bb9f4a9f4733867157063d00af450fa')
}
/**
 * @param {Element} params.main
 * @param {Array} params.gModels
 * @param {string} hotPath
 */
export function AppRegistry (params, hotPath) {
  function init () {
    const { gModels: models, main, ...args } = params
    const app = dva({
      ...args,
      ...createLoading({
        effects: true
      })
    })
    const router = main.default || main
    models.forEach(m => {
      app.model(m.default || m)
    })
    app.router(router)

    return app.start()
  }
  const MOUNT_NODE = document.getElementById('root')

  function render () {
    const App = init()
    ReactDOM.render(
      <AppContainer>
        <App/>
      </AppContainer>
      , MOUNT_NODE
    )
  }
  render()
  if (module.hot) {
    console.log(module)
    module.hot.accept(hotPath, () => {
      render()
    })
  }
}
