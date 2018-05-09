import { routerRedux } from 'dva/router'
import { fetchInviteRes } from '../services/api'
import event from '../utils/event'

export default {

  namespace: 'invite',

  state: {
    card_list: [],
    isLogin: false
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      event.subscribe('login', () => {
        dispatch(routerRedux.replace('/'))
        dispatch({ type: 'save', payload: {isLogin: false} })
      })
    }
  },

  effects: {
    * fetch ({ payload }, { call, put }) {
      const { data } = yield call(fetchInviteRes, payload.from_user_id)
      console.log(data)
      yield put({ type: 'save', payload: {...data, isLogin: true} })
    },
    * setFromUser ({ payload }, { call, put }) {
      yield put({ type: 'save', payload: {...payload} })
    }
  },

  reducers: {
    save (state, action) {
      return { ...state, ...action.payload }
    }
  }
}
