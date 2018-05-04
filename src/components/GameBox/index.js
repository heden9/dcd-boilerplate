import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style'
export default class GameBox extends React.Component {
  static defaultProps = {
    showBanner: true
  }
  render () {
    const { showBanner, children, className } = this.props
    return (
      <div className={classNames({
        'cpt-game-box': true,
        [className]: true
      })}>
        {
          showBanner && <img className="banner" src={require('./images/b1.png')}/>
        }
        <div>{ children }</div>
      </div>
    )
  }
}
GameBox.propTypes = {
  showBanner: PropTypes.bool,
  children: PropTypes.element,
  className: PropTypes.string
}
