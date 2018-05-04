import axios from 'axios'
axios.interceptors.response.use(function (res) {
  if (res.data.status === 'success') {
    return res.data
  }
  return Promise.reject(new Error('bad response'))
}, function (error) {
  return Promise.reject(error)
})

export const fetchIndexData = () => {
  return axios.get('/motor/pleasure/worldcup/index')
}
