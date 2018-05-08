import React from 'react'
import PropTypes from 'prop-types'
import Mask from 'Component/Mask'
import Card from 'Component/Card'
import Btn from 'Component/Btn'
import ScrollView from 'Component/ScrollView'
import classnames from 'classnames'
import './style'
const arr = [2, 3, 5, 7, 8, 10]
const CardGroup = ({children, num}) => { // eslint-disable-line
  let type = `card-group-type-${num}`
  if (arr.indexOf(num) === -1) {
    type = `card-group-type-10`
  }
  return (
    <div
      className={classnames({
        [type]: true
      })}
    >{children}</div>
  )
}
// const arr = new Array(3).fill(0).map((a, b) => b)
const CardMask = ({ open, hasGold, closeHandle, card_list = [] }) => {
  const banner = hasGold ? `url(${require('./images/Gro.png')})` : 'none'
  return (
    open
      ? <Mask closeHandle={closeHandle}>
        <React.Fragment>
          <div className="adv-banner card-mask-banner" style={{backgroundImage: banner}} />
          <ScrollView className="card-scroll-container">
            <CardGroup num={card_list.length}>
              {
                card_list.map((i, index) => <Card.special key={index} {...i} />)
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
  hasGold: PropTypes.bool,
  closeHandle: PropTypes.func
}
export default CardMask
