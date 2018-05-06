/*eslint-disable */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./style";

// var ModalHelper = (function(bodyCls) {
//   var scrollTop;
//   return {
//     afterOpen: function() {
//       scrollTop = document.scrollingElement.scrollTop;
//       document.body.classList.add(bodyCls);
//       document.body.style.top = -scrollTop + 'px';
//     },
//     beforeClose: function() {
//       document.body.classList.remove(bodyCls);
//       // scrollTop lost after set position:fixed, restore it back.
//       document.scrollingElement.scrollTop = scrollTop;
//     }
//   };
// })('modal-open')
export default class Mask extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  };
  constructor() {
    super(...arguments);

    const doc = window.document;
    this.node = doc.createElement("div");
    doc.body.appendChild(this.node);
  }
  componentDidMount() {
    // ModalHelper.afterOpen()
  }
  componentWillUnmount() {
    // ModalHelper.beforeClose()
    this.node.parentNode.removeChild(this.node)
  }
  render() {
    const { children, closeHandle } = this.props;
    return ReactDOM.createPortal(
      <React.Fragment>
        <div className="mask" ></div>
        <div className="dialog can-scroll">{children}</div>
      </React.Fragment>,
      this.node
    );
  }
}
