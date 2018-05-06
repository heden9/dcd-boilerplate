import React from 'react'
import Button from 'antd-mobile/lib/button'
import 'antd-mobile/lib/button/style/css'
import PropTypes from 'prop-types'
import './style'
const noop = () => {}

function GhostBtn ({ children, onClick = noop, inline = true }) {
  return (
    <Button
      type="ghost"
      onClick={onClick}
      inline={inline}
      className="cpt-lottery"
    >{children}</Button>
  )
}

const Group = ({ children }) => <div className="cpt-lottery-group">{children}</div>
GhostBtn.group = Group

Group.propTypes = {
  // children: PropTypes.object
}
GhostBtn.propTypes = {
  // children: PropTypes.object,
  inline: PropTypes.bool,
  onClick: PropTypes.func
}

export default GhostBtn
