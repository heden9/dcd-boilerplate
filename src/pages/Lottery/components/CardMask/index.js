import React from 'react'
import PropTypes from 'prop-types'
import Mask from 'Component/Mask'
import Btn from 'Component/Btn'
import './style'
const CardMask = ({ open, closeHandle }) => {
  return (
    open
      ? <Mask closeHandle={closeHandle}>
        <React.Fragment>
          <img className="card-mask-banner" src={require('./images/Gro.png')} />
          <div className="card-scroll-container">
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
          </div>
          <Btn onClick={closeHandle}>收入囊中</Btn>
        </React.Fragment>
      </Mask>
      : null
  )
}
CardMask.propTypes = {
  open: PropTypes.bool,
  closeHandle: PropTypes.func
}
export default CardMask
