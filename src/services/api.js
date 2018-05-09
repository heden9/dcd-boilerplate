import axios from 'axios'
import Toast from 'antd-mobile/lib/toast'
import event from '../utils/event'
import 'antd-mobile/lib/toast/style/css'
axios.defaults.withCredentials = true
axios.interceptors.response.use(function ({ data }) {
  if (data.status === 0) {
    return data
  }
  console.log(data)
  if (+data.status === 10014) {
    event.dispatch('login')
    return Promise.reject(new Error('need login!'))
  }
  return Promise.reject(new Error('bad response'))
}, function (error) {
  Toast.fail('服务繁忙，请稍后再试')
  return Promise.reject(error)
})
function imgPromisify (src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      resolve(src)
    }
    img.onerror = () => {
      resolve()
    }
  })
}
const noop = (...arg) => arg
export function ImgLoader (imgList = [], cb = noop) {
  const img = imgList.map((...arg) => imgPromisify(cb(...arg))) // eslint-disable-line
  return Promise.all(img)
}
export const fetchIndexData = () => {
  return axios.get('/motor/pleasure/worldcup/index')
}
export const fetchLotteryRes = () => {
  return axios.post('/motor/pleasure/worldcup/lottery')
}
export const fetchCompositeRes = () => {
  return axios.post('/motor/pleasure/worldcup/call')
}

export const fetchAwardList = () => {
  return axios.get('/motor/pleasure/worldcup/award')
}

export const fetchAwardDetail = (prize_no) => {
  return axios.get(`/motor/pleasure/worldcup/award/${prize_no}`)
}

export const fetchPrizeList = () => {
  return axios.get('/motor/pleasure/worldcup/prize')
}

export const fetchPrizeDetail = (id) => {
  return axios.get(`/motor/pleasure/worldcup/prize/${id}`)
}

export const fetchInviteRes = (from_user_id) => {
  return axios.post(`/motor/pleasure/worldcup/invite/${from_user_id}`)
}

export const fetchWinnerList = () => {
  return axios.get('/motor/pleasure/worldcup/winners')
}

export const updateShare = () => {
  return axios.post('/motor/pleasure/worldcup/share')
}
