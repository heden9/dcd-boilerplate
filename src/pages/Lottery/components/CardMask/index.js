import React from 'react'
import PropTypes from 'prop-types'
import Mask from 'Component/Mask'
import Card from 'Component/Card'
import Btn from 'Component/Btn'
import ScrollView from 'Component/ScrollView'
import classnames from 'classnames'
import './style'
const CardGroup = ({children, num}) => { // eslint-disable-line
  const type = `card-group-type-${num}`
  return (
    <div
      className={classnames({
        [type]: true
      })}
    >{children}</div>
  )
}
const arr = new Array(10).fill(0).map((a, b) => b)
const CardMask = ({ open, closeHandle }) => {
  return (
    open
      ? <Mask closeHandle={closeHandle}>
        <React.Fragment>
          <div className="adv-banner card-mask-banner" style={{backgroundImage: `url(${require('./images/Gro.png')})`}} />
          <ScrollView className="card-scroll-container">
            <CardGroup num={arr.length}>
              {
                arr.map(i => <Card.special key={i} />)
              }
            </CardGroup>
          </ScrollView>
          <Btn onClick={closeHandle}>收入囊中</Btn>
        </React.Fragment>
      </Mask>
      : null
  )
}
CardMask.propTypes = {
  open: PropTypes.bool,
  closeHandle: PropTypes.func
}
export default CardMask
