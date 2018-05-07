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
      const { id, type, sub_type } = payload
      const { data } = yield call(fetchPrizeDetail, type, sub_type)
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
