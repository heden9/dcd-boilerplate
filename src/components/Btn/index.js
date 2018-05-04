import React from 'react'
import {Link} from 'dva/router'
import PropTypes from 'prop-types'
import './style'

const noop = () => {}

const Btn = ({children, onClick = noop, to, ...props}) => (
  to
    ? <Link className="cpt-btn" to={to} {...props}>{children}</Link>
    : <a className="cpt-btn" href="javascript:;" onClick={onClick} {...props}>{children}</a>
)

Btn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  onClick: PropTypes.func,
  to: PropTypes.string
}

export default Btn
