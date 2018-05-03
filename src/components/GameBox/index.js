import React from 'react'
import PropTypes from 'prop-types'
import './style'
export default class GameBox extends React.Component {
  static defaultProps = {
    showBanner: true
  }
  render () {
    const { showBanner, children } = this.props
    return (
      <div className="cpt-game-box">
        {
          showBanner && <img className="banner" src={require('./img/b1.png')}/>
        }
        <div>{ children }</div>
      </div>
    )
  }
}
GameBox.propTypes = {
  showBanner: PropTypes.bool,
  children: PropTypes.element
}
