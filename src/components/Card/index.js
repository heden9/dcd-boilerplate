import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './style'

const Card = ({ num, showNum }) => {
  return (
    <div className={classNames({
      'cpt-card-0': true,
      'showNum': showNum
    })}>
      {
        !!num && showNum && <span>{num}</span>
      }
      <div className="active" style={{backgroundImage: `url(${+num === 0 ? require('./images/01.png') : require('./images/02.png')})`}}></div>
    </div>
  )
}
const Container = ({ children }) => {
  return <div className="cpt-card-container">{ children }</div>
}
const SpecialCard = () => {
  return (
    <div
      className={classNames({
        'card-special': true,
        'cpt-card': true
      })}
    >
      <img
        className="front"
        src={require('./images/05.png')}
      />
      <img
        className="back"
        src={require('./images/01.png')}
      />
    </div>
  )
}
Container.propTypes = {
  children: PropTypes.object
}
Card.propTypes = {
  showNum: PropTypes.bool,
  bgimg: PropTypes.string,
  desc: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  score: PropTypes.string,
  num: PropTypes.number
}
Card.container = Container
Card.special = SpecialCard
export default Card
