import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'antd-mobile/lib/carousel'
import 'antd-mobile/lib/carousel/style/css'
import './style'

const PrizesCarousel = ({ list = [], initIndex = 0, afterChange }) => {
  return (
    <div className="cpt-prizes-carousel">
      <Carousel
        frameOverflow="visiable"
        infinite={false}
        selectedIndex={initIndex}
        dots={false}
        cellSpacing={60}
        slideWidth={0.36}
        afterChange={afterChange}
        key={initIndex}
      >
        {
          list.map((item, index) => (
            <div className="prizes-card" key={index}>
              <img
                src={item.bgimg}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'))
                }}
              />
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}

PrizesCarousel.propTypes = {
  list: PropTypes.array,
  initIndex: PropTypes.number,
  afterChange: PropTypes.func
}

export default PrizesCarousel
