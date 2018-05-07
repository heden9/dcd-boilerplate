import { fetchInviteRes } from '../services/api'

export default {

  namespace: 'invite',

  state: {
    card_list: []
  },

  subscriptions: {
    setup ({ dispatch, history }) {
    }
  },

  effects: {
    * fetch ({ payload }, { call, put }) {
      const { data } = yield call(fetchInviteRes)
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
