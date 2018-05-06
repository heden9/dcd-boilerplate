import React from 'react'
// import PropTypes from 'prop-types'

export default function Cover ({ children }) {
  return (
    <React.Fragment>
      {
        children
      }
    </React.Fragment>
  )
}

Cover.propTypes = {
  // children: PropTypes.object
}
