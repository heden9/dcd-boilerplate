import 'Util/fastclick.js'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    window.FastClick.attach(document.body)
  }, false)
}
if (__DEV__) {
  const setCookie = function (c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + '=' + escape(value) +
    ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString()) + '; path=/'
  }
  setCookie('sessionid', '7bb9f4a9f4733867157063d00af450fa', 30)
}
