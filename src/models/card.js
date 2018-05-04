import { fetchIndexData } from '../services/api'

export default {

  namespace: 'card',

  state: {
    card_list: [],
    has_expire_prize: 0,
    lottery_num: 5,
    score: 0
  },

  subscriptions: {
    setup ({ dispatch, history }) {
    }
  },

  effects: {
    * fetch ({ payload }, { call, put }) {
      const { data } = yield call(fetchIndexData)
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
