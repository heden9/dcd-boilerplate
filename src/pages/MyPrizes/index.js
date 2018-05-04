import React, {Component} from 'react'
import PrizeCard from './components/PrizeCard'
import './style'

class MyPrizes extends Component {
  render () {
    return (
      <div className="page-my-prizes">
        <PrizeCard />
      </div>
    )
  }
}

export default MyPrizes
