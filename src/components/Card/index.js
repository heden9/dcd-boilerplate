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
      {
        +num === 0
          ? <img className="active" src={require('./images/01.png')} />
          : <img className="active" src={require('./images/02.png')} />
      }
    </div>
  )
}
const Container = ({ children }) => {
  return <div className="cpt-card-container">{ children }</div>
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string
  ])
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
export default Card
