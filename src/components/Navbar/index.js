import React from 'react'
import PropTypes from 'prop-types'
import './style'

function NavBar ({ title }) {
  return (
    <div className="navbar-container" >
      <div className="navbar-content">
        {title}
      </div>
    </div>
  )
}
NavBar.propTypes = {
  title: PropTypes.string | PropTypes.element
}
export default NavBar
