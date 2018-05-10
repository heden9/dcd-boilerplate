import React, { Component } from 'react'
import { connect } from 'dva'
import './style'
@connect()
export default class Home extends Component {
  componentDidMount () {
    this.props.dispatch({ type: 'home/fetch' })
  }
  render () {
    return (
      <div className="home">page: Home</div>
    )
  }
}
