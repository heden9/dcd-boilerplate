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
      const prize_list = data.prize_list.filter(item => item.id !== 'no')
      yield put({ type: 'save', payload: {prize_list} })
    },
    * fetchDetail ({ payload }, { call, put }) {
      const { id } = payload
      const { data } = yield call(fetchPrizeDetail, id)
      yield put({
        type: 'saveDetails',
        payload: {
          [id]: data
        }
      })
    }
  },

  reducers: {
    save (state, action) {
      return { ...state, ...action.payload }
    },
    saveDetails (state, action) {
      return {
        ...state,
        details: {
          ...state.details,
          ...action.payload
        }
      }
    }
  }
}
