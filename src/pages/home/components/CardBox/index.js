import React from 'react'
import Carousel from 'antd-mobile/lib/carousel'
import 'antd-mobile/lib/carousel/style/css'
import './style'

const array = [1, 2, 3, 4]
export default function CardBox () {
  return (
    <div className="card-box">
      <Carousel
        autoplay={false}
        infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => console.log('slide to', index)}
      >
        {array.map(val => (
          <div key={val} className="card-item">

          </div>
        ))}
      </Carousel>
    </div>
  )
}
