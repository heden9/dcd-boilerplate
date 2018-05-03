import axios from 'axios'

export const fetch = () => {
  return axios.get('/home')
}

export const getData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(123)
    }, 1000)
  })
}
