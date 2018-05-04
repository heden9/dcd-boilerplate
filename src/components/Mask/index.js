/*eslint-disable */
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './style'
var scrollTop = 0;
function to(scrollTop){
  document.body.scrollTop = document.documentElement.scrollTop = scrollTop;
}
function getScrollTop(){
  return document.body.scrollTop || document.documentElement.scrollTop;
}
function fixedBody(){
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  document.body.style.cssText += 'position:fixed;top:-'+scrollTop+'px;';
}

function looseBody() {
  var body = document.body;
  body.style.position = '';
  var top = body.style.top;
  document.body.scrollTop = document.documentElement.scrollTop = -parseInt(top);
  body.style.top = '';
}
export default class Mask extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  }
  constructor () {
    super(...arguments)

    const doc = window.document
    this.node = doc.createElement('div')
    doc.body.appendChild(this.node)
  }
  componentDidMount () {
    let isSBBrowser;

    let data = {
        posY: 0,
        maxscroll: 0
    }
    const touchMove = (event) => {
    }
    const touchStart = () => {
      // const events = event.touches[0] || event
      const elTarget = event.target
      if (!elTarget) {
        return;
      }
    }
    const touchEnd = () => {

    }
    this.node.addEventListener('touchstart', touchMove)
    this.node.addEventListener('touchmove', touchStart)
    this.node.addEventListener('touchend', touchEnd)
  }
  componentWillUnmount () {
    this.node.style.display = 'none';

  }
  render () {
    const { children } = this.props
    return ReactDOM.createPortal(
      <React.Fragment>
        <div className="mask"></div>
        <div className="dialog" >
          {children}
        </div>
      </React.Fragment>,
      this.node
    )
  }
}
