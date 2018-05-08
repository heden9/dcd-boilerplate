import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './style'
const Card = ({ num, showNum, name, bgimg }) => {
  const empty = +num === 0
  return (
    <div className={classNames({
      'cpt-card-0': true,
      'showNum': showNum,
      empty: empty
    })}>
      {
        !!num && showNum && <span>{num}</span>
      }
      <div
        className={'active'}
        style={{backgroundImage: `url(${empty ? '' : bgimg})`}} >
        { empty && <span>{name}</span>}
      </div>
    </div>
  )
}
const Container = ({ children }) => {
  return <div className="cpt-card-container">{ children }</div>
}
const SpecialCard = ({ type, bgimg }) => {
  return (
    <div
      className={classNames({
        'card-special': true,
        'cpt-card': true,
        'gold': type === 1
      })}
    >
      <img
        className="front"
        src={bgimg}
      />
      <img
        className="back"
        src={require('Assets/images/card_back.png')}
      />
    </div>
  )
}
Container.propTypes = {
  // children: PropTypes.object
}
SpecialCard.propTypes = Card.propTypes = {
  showNum: PropTypes.bool,
  bgimg: PropTypes.string,
  desc: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  score: PropTypes.string,
  num: PropTypes.number,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}
Card.container = Container
Card.special = SpecialCard
export default Card
