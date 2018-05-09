import React from 'react'
// import PropTypes from 'prop-types'
import HomeBanner from 'Component/HomeBanner'

export default function Cover ({ children }) {
  const navbar = {
    '奖品中心': {
      to: '/prizes/'
    }
  }
  return (
    <React.Fragment>
      <HomeBanner navbar={navbar} />
      {
        children
      }
    </React.Fragment>
  )
}

Cover.propTypes = {
  // children: PropTypes.object
}
