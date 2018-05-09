import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './style'

const noop = () => {}

export default class Mask extends Component {
  static defaultProps = {
    closeHandle: () => {}
  }
  constructor () {
    super(...arguments)

    const doc = window.document
    this.node = doc.createElement('div')
    doc.body.appendChild(this.node)
  }
  componentWillUnmount () {
    this.node.parentNode && this.node.parentNode.removeChild(this.node)
  }
  closeHandle = () => {
    this.props.closeHandle()
    this.node.parentNode && this.node.parentNode.removeChild(this.node)
  }
  render () {
    const { children, closeBtn, maskClosable = false } = this.props
    return ReactDOM.createPortal(
      <React.Fragment>
        <div className="cpt-mask"
          onClick={maskClosable ? this.closeHandle : noop}
        >
          {
            closeBtn && <a href="javascript:;" onClick={this.closeHandle} className="mask-close-btn"/>
          }
        </div>
        <div className="cpt-dialog">{children}</div>
      </React.Fragment>,
      this.node
    )
  }
}
Mask.propTypes = {
  maskClosable: PropTypes.bool,
  closeBtn: PropTypes.bool
}
