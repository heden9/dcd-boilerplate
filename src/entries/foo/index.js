
import dva from 'dva'
import createLoading from 'dva-loading'
import createMemoryHistory from 'history/createMemoryHistory'
import '../common'
import './style.less'

const app = dva({
  onError () {

  },
  history: createMemoryHistory(),
  ...createLoading({
    effects: true
  })
})

app.router(require('./main').default)

app.start('#root')
