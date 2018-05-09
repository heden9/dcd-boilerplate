import React, { Component } from 'react'
import { connect } from 'dva'

@connect()
export default class Home extends Component {
  componentDidMount () {
    this.props.dispatch({ type: 'home/fetch' })
  }
  render () {
    return (
      <div>page: Home</div>
    )
  }
}
