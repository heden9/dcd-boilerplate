import { os } from './ua'

export default function login (success, error) {
  if (os.automobile === true) {
    try {
      window.ToutiaoJSBridge.call('login', {}, ({ code }) => {
        // code: 0 登录失败 1 登录成功
        if (code === 0) {
          error && error(code)
          return
        }
        success && success(code)
      })
    } catch (e) {
      error(e)
    }
  } else {
    let url = window.location.href
    url = url.replace(/#\/.+/g, '')
    url = url.indexOf('?') > -1 ? (url + '&login_type=1') : (url + '?login_type=1')
    window.location.href = 'https://sso.toutiao.com/login/?service=' + encodeURIComponent(url) + '&template_type=1'
  }
}
