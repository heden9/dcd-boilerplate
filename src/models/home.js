import { fetchTest } from 'Service/api'
export default {

  namespace: 'home',

  state: {
  },

  subscriptions: {
    setup ({ dispatch, history }) {

    }
  },

  effects: {
    * fetch ({ payload }, { call, put }) {
      const data = yield call(fetchTest)
      console.log(data)
      yield put({ type: 'save' })
    }
  },

  reducers: {
    save (state, action) {
      return { ...state, ...action.payload }
    }
  }

}
