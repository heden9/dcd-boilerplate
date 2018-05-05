import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'antd-mobile/lib/carousel'
import 'antd-mobile/lib/carousel/style/css'
import Card from 'Component/Card'
import './style'

const Cover = ({ children, isCarousel, ...props }) => ( // eslint-disable-line
  isCarousel
    ? <Carousel
      {...props}
    >{children}</Carousel>
    : <React.Fragment>{ children }</React.Fragment>
)
const CardBox = function ({
  card_list = [],
  showNum,
  isCarousel
}) {
  return (
    <div className="card-box">
      <Cover
        isCarousel={isCarousel}
        autoplay={false}
        infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => console.log('slide to', index)}
      >
        {card_list.map((item, index) => (
          <div key={index} className="box-item">
            <Card.container>
              {
                item.map((item) => <Card key={item.id} {...item} showNum={showNum}/>)
              }
            </Card.container>
          </div>
        ))}
      </Cover>
    </div>
  )
}

CardBox.propTypes = {
  card_list: PropTypes.array,
  isCarousel: PropTypes.bool,
  showNum: PropTypes.bool
}
export default CardBox
