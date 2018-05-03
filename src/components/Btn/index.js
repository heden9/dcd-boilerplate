import React from 'react'
import {Link} from 'dva/router'
import PropTypes from 'prop-types'
import './style'

const Btn = ({children, onClick, to}) => (
  to
    ? <Link className="cpt-btn" to={to}>{children}</Link>
    : <a className="cpt-btn">{children}</a>
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
