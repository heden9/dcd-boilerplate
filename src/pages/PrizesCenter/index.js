import React, {Component} from 'react'
import PrizesHeader from './components/PrizesHeader'
import PrizesDetail from './components/PrizesDetail'
import './style'

class PrizesCenter extends Component {
  render () {
    return (
      <div className="page-prizes-center">
        <PrizesHeader />
        <PrizesDetail />
      </div>
    )
  }
}

export default PrizesCenter
