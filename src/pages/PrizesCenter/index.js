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
    this.state = {
      initIndex: 0,
      slideIndex: 0,
      prize_list: []
    }
    this.onCarouselChange = this.onCarouselChange.bind(this)
  }
  componentDidMount () {
    this.props.dispatch({ type: 'prizes/fetchList' })
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    if (prevState.prize_list.length !== nextProps.prize_list.length) {
      const {prize_list} = nextProps
      const initIndex = Math.floor(prize_list.length / 2)
      nextProps.dispatch({
        type: 'prizes/fetchDetail',
        payload: {
          id: initIndex,
          ...prize_list[initIndex]
        }
      })
      return {
        initIndex,
        slideIndex: initIndex,
        prize_list
      }
    }
    return { ...prevState }
  }

  onCarouselChange (index) {
    const {details, prize_list} = this.props
    if (!details[index]) {
      console.log(index)
      this.props.dispatch({
        type: 'prizes/fetchDetail',
        payload: {
          id: index,
          ...prize_list[index]
        }
      })
    }
    this.setState({ slideIndex: index })
  }
  render () {
    const {details} = this.props
    const {prize_list, slideIndex, initIndex} = this.state
    return (
      <div className="page-prizes-center">
        <PrizesHeader />
        <PrizesCarousel
          list={prize_list}
          initIndex={initIndex}
          afterChange={this.onCarouselChange}
        />
        <PrizesDetail detail={details[slideIndex] || {}} />
      </div>
    )
  }
}
