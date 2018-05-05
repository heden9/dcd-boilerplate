/*eslint-disable */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./style";
$.smartScroll = function(container, selectorScrollable) {
  // 如果没有滚动容器选择器，或者已经绑定了滚动时间，忽略
  if (!selectorScrollable || container.data('isBindScroll')) {
      return;
  }

  // 是否是搓浏览器
  // 自己在这里添加判断和筛选
  var isSBBrowser;

  var data = {
      posY: 0,
      maxscroll: 0
  };

  // 事件处理
  container.on({
      touchstart: function (event) {
          var events = event.touches[0] || event;

          // 先求得是不是滚动元素或者滚动元素的子元素
          var elTarget = $(event.target);

          if (!elTarget.length) {
              return;
          }

          var elScroll;

          // 获取标记的滚动元素，自身或子元素皆可
          if (elTarget.is(selectorScrollable)) {
              elScroll = elTarget;
          } else if ((elScroll = elTarget.parents(selectorScrollable)).length == 0) {
              elScroll = null;
          }

          if (!elScroll) {
              return;
          }

          // 当前滚动元素标记
          data.elScroll = elScroll;

          // 垂直位置标记
          data.posY = events.pageY;
          data.scrollY = elScroll.scrollTop();

          // 是否可以滚动

          data.maxscroll = elScroll[0].scrollHeight - $(elScroll[0]).height();
          console.log(elScroll[0]);
          console.log(elScroll[0].scrollHeight);
          console.log($(elScroll[0]).height());
          console.log('can move',data.maxscroll);
      },
      touchmove: function () {

          // 如果不足于滚动，则禁止触发整个窗体元素的滚动
          if (data.maxscroll <= 0 || isSBBrowser) {
              // 禁止滚动
              console.log('refuse');
              event.preventDefault();
          }
          // 滚动元素
          var elScroll = data.elScroll;
          // 当前的滚动高度
          var scrollTop = elScroll.scrollTop();
          console.log(scrollTop)
          // 现在移动的垂直位置，用来判断是往上移动还是往下
          var events = event.touches[0] || event;
          // 移动距离
          var distanceY = events.pageY - data.posY;

          if (isSBBrowser) {
             console.log('issb');
              elScroll.scrollTop(data.scrollY - distanceY);
              elScroll.trigger('scroll');
              return;
          }

          // 上下边缘检测
          if (distanceY > 0 && scrollTop == 0) {
              // 往上滑，并且到头
              // 禁止滚动的默认行为
              event.preventDefault();
              return;
          }

          // 下边缘检测
          if (distanceY < 0 && (scrollTop + 1 >= data.maxscroll)) {
              // 往下滑，并且到头
              // 禁止滚动的默认行为
              event.preventDefault();
              return;
          }
      },
      touchend: function () {
          data.maxscroll = 0;
      }
  });

  // 防止多次重复绑定
  container.data('isBindScroll', true);
};
var ModalHelper = (function(bodyCls) {
  var scrollTop;
  return {
    afterOpen: function() {
      scrollTop = document.scrollingElement.scrollTop;
      document.body.classList.add(bodyCls);
      document.body.style.top = -scrollTop + 'px';
    },
    beforeClose: function() {
      document.body.classList.remove(bodyCls);
      // scrollTop lost after set position:fixed, restore it back.
      document.scrollingElement.scrollTop = scrollTop;
    }
  };
})('modal-open')
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
    $.smartScroll($(this.node), '.can-scroll');
  }
  componentWillUnmount() {
    // ModalHelper.beforeClose()
    this.node.parentNode.removeChild(this.node)
  }
  render() {
    const { children, closeHandle } = this.props;
    return ReactDOM.createPortal(
      <React.Fragment>
        <div className="mask" />
        <div className="dialog can-scroll">{children}</div>
      </React.Fragment>,
      this.node
    );
  }
}
