import { fetchMyPrizes } from '../services/api'

export default {

  namespace: 'myprizes',

  state: {
    award_list: []
  },

  subscriptions: {
    setup ({ dispatch, history }) {
    }
  },

  effects: {
    * fetch ({ payload }, { call, put }) {
      const { data } = yield call(fetchMyPrizes)
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
