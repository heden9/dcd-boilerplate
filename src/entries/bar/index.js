import dva from 'dva'
import createLoading from 'dva-loading'
import '../common'
const app = dva({
  onError (error, dispatch) {
    error.preventDefault()
    console.log(error.message)
  },
  ...createLoading({
    effects: true
  })
})

app.router(require('./main'))

app.start('#root')
