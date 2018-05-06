import { fetchPrizeList, fetchPrizeDetail } from '../services/api'

export default {

  namespace: 'prizes',

  state: {
    prize_list: [],
    details: {}
  },

  subscriptions: {
    setup ({ dispatch, history }) {
    }
  },

  effects: {
    * fetchList ({ payload }, { call, put }) {
      const { data } = yield call(fetchPrizeList)
      console.log(data)
      yield put({ type: 'save', payload: data })
    },
    * fetchDetail ({ payload }, { call, put }) {
      const { data } = yield call(fetchPrizeDetail)
      console.log(data)
    }
  },

  reducers: {
    save (state, action) {
      return { ...state, ...action.payload }
    }
  }
}
