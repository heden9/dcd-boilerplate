/* eslint-disable */
var $jsonp = (function () {
  var that = {};
  that.send = function (src, options) {
    var callback_name = options.callbackName || 'callback',
    on_success = options.onSuccess || function(){},
    on_timeout = options.onTimeout || function(){},
    timeout = options.timeout || 10; // sec

    var timeout_trigger = window.setTimeout(function(){
      window[callback_name] = function(){};
      on_timeout();
    }, timeout * 1000);

    window[callback_name] = function(data){
      window.clearTimeout(timeout_trigger);
      on_success(data);
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = src;

    document.getElementsByTagName('head')[0].appendChild(script);
  }
  return that;
})();

function initWechatShare(data) {
  var nonceStr = "Wm3WZYTPz0wzccnW";
  var timestamp = Date.now();
  var appid = "wx53fcf3395bc0fe5e";
  var debug = false;

  var success = function(response) {
    if(response.code == 1){
      wx.config({
        debug: debug,
        appId: appid,
        timestamp: timestamp,
        nonceStr: nonceStr,
        signature: response.signature,
        jsApiList: ["onMenuShareTimeline","onMenuShareAppMessage"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
    } else {

    }
    wx.ready(function() {
      setWechatShare(data)
    });
    wx.error(function(res) {
      console.debug(res)
    });
  }
  var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//s2.pstatp.com/js/weixin_jssdk.js?ver=0203';
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(script);

  script.onload = function() {
    var url = '//open.snssdk.com/jssdk_signature/?appid='+appid+'&noncestr='+nonceStr+'&timestamp='+timestamp+'&url='+encodeURIComponent(window.location.href)+'&callback=handleStuff';
    $jsonp.send(url, {
      callbackName: 'handleStuff',
      onSuccess: function(json) {
        success(json);
      },
      onTimeout: function() {
        console.log('timeout');
      },
      timeout: 10
    });
  }
}

function setWechatShare(data) {
  wx.onMenuShareTimeline({
    title: data.title, // 分享标题
    link: data.url, // 分享链接
    imgUrl: data.image, // 分享图标
    success: function() {
      // 用户确认分享后执行的回调函数
    },
    cancel: function() {
      // 用户取消分享后执行的回调函数
    }
  });
  wx.onMenuShareAppMessage({
    title: data.title, // 分享标题
    desc: data.desc, // 分享描述
    link: data.url, // 分享链接
    imgUrl: data.image, // 分享图标
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function() {
      // 用户确认分享后执行的回调函数
    },
    cancel: function() {
      // 用户取消分享后执行的回调函数
    }
  });
}

export {
  initWechatShare,
  setWechatShare
}

