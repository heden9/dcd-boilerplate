import React, {Component} from 'react'
import {connect} from 'dva'
import PrizesHeader from './components/PrizesHeader'
import PrizesCarousel from './components/PrizesCarousel'
import PrizesDetail from './components/PrizesDetail'
import './style'

function mapStateToProps ({ prizes }) {
  return {
    ...prizes
  }
}

@connect(mapStateToProps)
export default class PrizesCenter extends Component {
  constructor (props) {
    super(props)
    this.onCarouselChange = this.onCarouselChange.bind(this)
  }
  componentWillMount () {
    this.props.dispatch({ type: 'prizes/fetchList' })
      .then(() => {})
  }
  onCarouselChange (index) {
    console.log(index)
  }
  render () {
    const {prize_list} = this.props
    return (
      <div className="page-prizes-center">
        <PrizesHeader />
        <PrizesCarousel
          list={prize_list}
          slideIndex={Math.floor(prize_list.length / 2)}
          afterChange={this.onCarouselChange}
        />
        <PrizesDetail />
      </div>
    )
  }
}
