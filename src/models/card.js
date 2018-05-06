import { fetchIndexData, fetchLotteryRes } from '../services/api'

export default {

  namespace: 'card',

  state: {
    card_list: [],
    lottery_list: [],
    has_expire_prize: 0,
    lottery_num: 5,
    score: 0,
    ad_owner: ''
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
    },
    * lottery ({ payload }, { call, put }) {
      const { data } = yield call(fetchLotteryRes)
      const res = {
        ad_owner: data.ad_owner,
        lottery_list: data.card_list
      }
      console.log(res)
      yield put({ type: 'save', payload: res })
    },
    * mixin ({ payload }, { call, put, select }) {
      const { lottery_list, card_list } = yield select(_ => _.card)
      const nextCardList = lottery_list.reduce((sum, i) => {
        sum[i.id - 1].num += i.num
        return sum
      }, card_list.slice())
      yield put({ type: 'save', payload: { card_list: nextCardList } })
    }
  },

  reducers: {
    save (state, action) {
      return { ...state, ...action.payload }
    }
  }

}
