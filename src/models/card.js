import { routerRedux } from 'dva/router'
import { delay } from 'dva/saga'
import { fetchIndexData, fetchLotteryRes, fetchCompositeRes } from '../services/api'
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
    * lottery ({ payload }, { call, put, select }) {
      const { data } = yield call(fetchLotteryRes)
      const { lottery_num } = yield select(_ => _.card)
      const res = {
        ad_owner: data.ad_owner,
        lottery_list: data.card_list,
        lottery_num: lottery_num > 0 ? lottery_num - 1 : 0
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
    },
    * checkGatherOver ({ payload }, { call, put, select }) {
      const { card_list } = yield select(_ => _.card)
      const isOver = !card_list.some(i => +i.num === 0)
      if (!isOver) {
        // yield delay(1000)
        yield put(routerRedux.push('/home/over'))
        const { data } = yield call(fetchCompositeRes)
        console.log(data)
        yield delay(1000)
        if (data.bingo) {
          yield put(routerRedux.push('/home'))
        }
      }
    }
  },

  reducers: {
    save (state, action) {
      return { ...state, ...action.payload }
    }
  }

}
