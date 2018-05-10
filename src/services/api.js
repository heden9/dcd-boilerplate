import axios from 'axios'
import Toast from 'antd-mobile/lib/toast'
import 'antd-mobile/lib/toast/style/css'
axios.defaults.withCredentials = true

axios.interceptors.response.use(function ({ data }) {
  if (data.status === 0) {
    return data
  }
  console.log(data)
  if (+data.status === 10014) {
    return Promise.reject(new Error('need login!'))
  }
  return Promise.reject(new Error('bad response'))
}, function (error) {
  Toast.fail('服务繁忙，请稍后再试')
  return Promise.reject(error)
})

export const fetchTest = () => {
  return axios.get('/motor/pleasure/worldcup/awards/list')
}
