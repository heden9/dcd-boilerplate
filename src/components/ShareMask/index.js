import React from 'react'
import Mask from 'Component/Mask'
import PropTypes from 'prop-types'
import './style'
const ShareMask = ({ open, onClose }) => {
  return (
    open
      ? <Mask maskClosable={true} closeHandle={onClose}>
        <div className="cpt-share-mask"></div>
      </Mask>
      : null
  )
}

ShareMask.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
}

export default ShareMask
