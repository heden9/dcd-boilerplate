import { routerRedux } from 'dva/router'
import { delay } from 'dva/saga'
import event from '../utils/event'

import { fetchIndexData, fetchLotteryRes, fetchCompositeRes, ImgLoader } from '../services/api'

export default {

  namespace: 'card',

  state: {
    card_list: require('../utils/tmp.json'),
    lottery_list: [],
    has_expire_prize: 0,
    lottery_num: 5,
    score: 0,
    ad_owner: ''
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      event.subscribe('login', () => {
        dispatch(routerRedux.replace('/home'))
      })
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
      // const { lottery_num } = yield select(_ => _.card)
      const res = {
        ad_owner: data.ad_owner,
        lottery_list: data.card_list.sort((a1, a2) => a1.type === 1 ? -1 : 1),
        lottery_num: 0
      }
      yield call(ImgLoader, res.lottery_list.concat(require('Assets/images/card_back.png')), (item) => item.bgimg || item)
      yield delay(1000)
      yield put({ type: 'save', payload: res })
    },
    * mixin ({ payload }, { call, put, select }) {
      const { lottery_list, card_list } = yield select(_ => _.card)
      const nextCardList = lottery_list.reduce((sum, i) => {
        sum[i.id - 1].num += 1
        return sum
      }, card_list.slice())
      yield put({ type: 'save', payload: { card_list: nextCardList, lottery_list: [] } })
    },
    * checkGatherOver ({ payload }, { call, put, select }) {
      const { card_list } = yield select(_ => _.card)
      const isOver = !card_list.some(i => +i.num === 0)
      if (isOver) {
        yield put(routerRedux.push({
          pathname: '/home',
          state: {
            over: true
          }
        }))
        const { data } = yield call(fetchCompositeRes)
        console.log(data)
        yield delay(1000)
        if (data.bingo) {
          yield put(routerRedux.replace({
            pathname: '/home',
            state: {
              award: data.award
            }
          }))
        } else {
          yield put(routerRedux.replace({
            pathname: '/sorry',
            state: {
              list: data.card_list
            }
          }))
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
