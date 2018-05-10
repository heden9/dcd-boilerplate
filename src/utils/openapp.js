
/* eslint-disable */
import {os, browser} from 'Util/ua.js'

function loadSchema (schema) {
  var appIframe = document.getElementById('#app_iframe')
  if (appIframe) {
    appIframe.parentNode.removeChild(appIframe)
  }
  var iframe = document.createElement('iframe')
  iframe.src = schema
  iframe.id = 'app_iframe'
  iframe.style.display = 'none'
  document.body.appendChild(iframe)
}

const openApp = function (schema, dLink) {
  var userAgent = navigator.userAgent.toLowerCase()
  var loadTimer = null, waitTime = 1000, currentUrl = window.location.href
  schema = schema || 'snssdk36://'
  dLink = dLink || '//d.toutiao.com/ypsv/'

  if (os.android) {
    if (browser.weixin) { // Android 微信不支持schema唤醒，必须提前加入腾讯的白名单
      window.location.href = dLink
    } else {
      loadSchema(schema)
    }
  }
  if (os.ios) {
    if (os.version >= 9) {
      window.location.href = schema
    } else {
      loadSchema(schema)
    }
  }

  var start = Date.now()
  loadTimer = setTimeout(function () {
    if (document.hidden || document.webkitHidden) {
      return
    }
    // 如果app启动，浏览器最小化进入后台，则计时器存在推迟或者变慢的问题
    // 那么代码执行到此处时，时间间隔必然大于设置的定时时间
    if (Date.now() - start > waitTime + 200) {
      // come back from app
      window.location.href = currentUrl
      // 如果浏览器未因为app启动进入后台，则定时器会准时执行，故应该跳转到下载页
    } else {
      if (os.toutiao && os.android) {
        window.location.href = '//s6.pstatp.com/package/apk/automobile/autolite_activity_cjhd_v3.1.1_9136cdc.apk'
      } else {
        window.location.href = dLink
      }
    }
  }, waitTime)

  // 当本地app被唤起，则页面会隐藏掉，就会触发pagehide与visibilitychange事件
  // 在部分浏览器中可行，网上提供方案，作hack处理
  var visibilitychange = function () {
    var tag = document.hidden || document.webkitHidden
    tag && clearTimeout(loadTimer)
  }
  document.addEventListener('visibilitychange', visibilitychange, false)
  document.addEventListener('webkitvisibilitychange', visibilitychange, false)
  // pagehide 必须绑定到window
  window.addEventListener('pagehide', function () {
    clearTimeout(loadTimer)
  }, false)
}

export default openApp
