import axios from 'axios'

export const fetch = () => {
  return axios.get('/home')
}
