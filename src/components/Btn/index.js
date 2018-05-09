import React from 'react'
import {Link} from 'dva/router'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './style'

const noop = () => {}
(new Image()).src = require('./images/btn_active.png')
const Btn = ({children, disable, onClick = noop, to, ...props}) => {
  const classes = classNames({ 'cpt-btn': true, disable: disable })
  return (
    to
      ? <Link className={classes} to={to} {...props}>{children}</Link>
      : <a className={classes} href="javascript:;" onClick={onClick} {...props}>{children}</a>
  )
}

Btn.propTypes = {
  onClick: PropTypes.func,
  to: PropTypes.string
}

export default Btn
