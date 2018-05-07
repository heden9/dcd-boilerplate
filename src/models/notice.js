import { fetchWinnerList } from '../services/api'

export default {

  namespace: 'notice',

  state: {
    winners: []
  },

  subscriptions: {
    setup ({ dispatch, history }) {
    }
  },

  effects: {
    * fetch ({ payload }, { call, put }) {
      const { data } = yield call(fetchWinnerList)
      console.log(data)
      yield put({ type: 'save', payload: data })
    }
  },

  reducers: {
    save (state, action) {
      return { ...state, ...action.payload }
    }
  }
}
