import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Carousel from 'antd-mobile/lib/carousel'
import 'antd-mobile/lib/carousel/style/css'
import WingBlank from 'antd-mobile/lib/wing-blank'
import 'antd-mobile/lib/wing-blank/style/css'
import './style'

class PrizesCarousel extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    const { list = [], initIndex = 0, onChange } = this.props
    return (
      <div className="cpt-prizes-carousel">
        <WingBlank>
          <Carousel
            frameOverflow="visiable"
            selectedIndex={initIndex}
            dots={false}
            cellSpacing={60}
            slideWidth={0.38}
            afterChange={onChange}
          >
            {
              list.map((item, index) => (
                <div className="prizes-card" key={index}>
                  <img src={require('Assets/images/test_gift.png')} />
                </div>
              ))
            }
          </Carousel>
        </WingBlank>
      </div>
    )
  }
}

PrizesCarousel.propTypes = {
  list: PropTypes.array,
  initIndex: PropTypes.number,
  onChange: PropTypes.func
}

export default PrizesCarousel
