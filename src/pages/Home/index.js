import React, { Component } from 'react'
import createFetcher from 'Util/createFetcher'
import './style'
const fetchSometingApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('加载完毕，这是你要的一段数据')
    }, 3000)
  })
}

@createFetcher({
  a: fetchSometingApi,
  b: fetchSometingApi
}, {
  fallback: function loading () {
    return <div>loading...</div>
  }
})
export default class Home extends Component {
  componentDidMount () {
  }
  render () {
    const { a, b } = this.props
    return (
      <React.Fragment>
        <div className="home">page: Home</div>
        <div>{a}</div>
        <div>{b}</div>
      </React.Fragment>
    )
  }
}
