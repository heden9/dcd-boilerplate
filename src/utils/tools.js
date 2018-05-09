/* eslint-disable */
const request = (paras) => {
  let url = location.search
  let paraString = url.substring(1).split('&')
  let paraObj = {}
  for (let i = 0, len = paraString.length; i < len; i++) {
    let j = paraString[i]
    if (j) {
      paraObj[j.substring(0, j.indexOf('=')).toLowerCase()] = j.substring(j.indexOf('=') + 1, j.length)
    }
  }

  if (!paras) { return paraObj }
  let returnValue = paraObj[paras.toLowerCase()]
  return returnValue ? returnValue.trim() : ''
}

const getRequestParams = () => {
  let url = location.search
  let paraString = url.substring(url.indexOf('?') + 1, url.length).split('&')
  let paraObj = {}
  let i, j
  for (i = 0; j = paraString[i]; i++) {
    paraObj[j.substring(0, j.indexOf('=')).toLowerCase()] = j.substring(j.indexOf('=') + 1, j.length)
  };
  return paraObj
}

const formatDate = (dt, fmt) => {
  if (!/^\d+$/.test(dt)) return ''
  if (dt.toString().length === 10) {
    dt = dt * 1000
  }
  let date = new Date(dt)
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (let k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  return fmt
}

function localStorageEnabled () {
  var mod = 'test'
  try {
    localStorage.setItem(mod, mod)
    localStorage.removeItem(mod)
    return true
  } catch (e) {
    return false
  }
}

const localStorageProxy = (function () {
  function setItem (key, value) {
    if (!localStorageEnabled()) { return null }
    try {
      localStorage.setItem(key, value)
    } catch (e) {
      // silent
    }
  }

  function getItem (key) {
    if (!localStorageEnabled()) { return null }
    return localStorage.getItem(key)
  }

  function delItem (key) {
    if (!localStorageEnabled()) { return null }
    return localStorage.removeItem(key)
  }

  return {
    setItem,
    getItem,
    delItem
  }
}())

function sessionStorageEnabled () {
  var mod = 'test'
  try {
    sessionStorage.setItem(mod, mod)
    sessionStorage.removeItem(mod)
    return true
  } catch (e) {
    return false
  }
}

const sessionStorageProxy = (function () {
  function setItem (key, value) {
    if (!sessionStorageEnabled()) { return null }
    try {
      sessionStorage.setItem(key, value)
    } catch (e) {
      // silent
    }
  }

  function getItem (key) {
    if (!sessionStorageEnabled()) { return null }
    return sessionStorage.getItem(key)
  }

  function delItem (key) {
    if (!sessionStorageEnabled()) { return null }
    return sessionStorage.removeItem(key)
  }

  return {
    setItem,
    getItem,
    delItem
  }
}())

export {
  request,
  formatDate,
  getRequestParams,
  localStorageProxy,
  sessionStorageProxy
}
