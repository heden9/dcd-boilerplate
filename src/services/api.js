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
    .then(res => console.log(res))
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
  return axios.get('/motor/pleasure/worldcup/awards/list')
}

export const fetchPrizeList = () => {
  return axios.get('/motor/pleasure/worldcup/prize/list')
}

export const fetchPrizeDetail = () => {
  return axios.get('/motor/pleasure/worldcup/prize/list')
}
