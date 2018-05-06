import React from 'react'
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

export default BackCardGroup
