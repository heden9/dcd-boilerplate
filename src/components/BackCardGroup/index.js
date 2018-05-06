import React from 'react'
// import PropTypes from 'prop-types'
import './style.less'

const BackCardGroup = ({children}) => (
  <div className="cpt-back-card-group">
    <ul className="card-list">
      <li className="card"></li>
      <li className="card"></li>
      <li className="card"></li>
      <li className="card"></li>
      <li className="card"></li>
    </ul>
    {children}
  </div>
)

BackCardGroup.propTypes = {
  // children: PropTypes.object
}

export default BackCardGroup
