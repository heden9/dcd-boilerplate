import dva from 'dva'
import createLoading from 'dva-loading'
import '../common'
const app = dva({
  onError () {

  },
  ...createLoading({
    effects: true
  })
})

app.router(require('./main'))

app.start('#root')