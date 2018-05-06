import axios from 'axios'
import Toast from 'antd-mobile/lib/toast'
import 'antd-mobile/lib/toast/style/css'
axios.interceptors.response.use(function (res) {
  if (res.data.status === 'success') {
    return res.data
  }
  return Promise.reject(new Error('bad response'))
}, function (error) {
  Toast.fail('接口异常....')
  return Promise.reject(error)
})

export const fetchIndexData = () => {
  return axios.get('/motor/pleasure/worldcup/index')
}
export const fetchLotteryRes = () => {
  return axios.post('/motor/pleasure/worldcup/lottery')
}

export const fetchMyPrizes = () => {
  return axios.get('/motor/pleasure/worldcup/awards/list')
}
