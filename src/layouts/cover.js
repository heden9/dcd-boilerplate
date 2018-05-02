import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'dva/router'
export default function Cover ({ children }) {
  return (
    <React.Fragment>
      <Link to="/home" >home</Link>
      <Link to="/book" >book</Link>
      {
        children
      }
    </React.Fragment>
  )
}

Cover.propTypes = {
  children: PropTypes.element
}
