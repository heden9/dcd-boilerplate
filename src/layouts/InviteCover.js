import React from 'react'
import PropTypes from 'prop-types'
import HomeBanner from 'Component/HomeBanner'

export default function Cover ({ children }) {
  return (
    <React.Fragment>
      <HomeBanner />
      {
        children
      }
    </React.Fragment>
  )
}

Cover.propTypes = {
  children: PropTypes.element
}
