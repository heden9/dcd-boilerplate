import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar'
export default function Cover ({ children }) {
  return (
    <React.Fragment>
      <Navbar title="#集卡世界杯#" />
      {
        children
      }
    </React.Fragment>
  )
}

Cover.propTypes = {
  children: PropTypes.element
}
