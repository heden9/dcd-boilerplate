var webpack = require('webpack')
var path = require('path')
var proxy = require('http-proxy-middleware')
var apiMocker = require('webpack-api-mocker')
// var favicon = require('express-favicon')

var config = require('./webpack.dev.conf.js')
var devenv = require('../config/dev.env.js')
var devproxy = require('../config/dev.proxy.js')
var mocker = path.resolve('mock/app.js')

config.devServer = {
  disableHostCheck: true,
  host: '0.0.0.0',
  port: devenv.browserPort,
  compress: true, // 启动gzip压缩
  contentBase: path.join(__dirname, '../dist'),
  hot: true, // 开启 Hot module replacement
  overlay: {
    errors: true // 在webpack编译出错的时候，在页面上显示弹窗
  },
  headers: {
    'access-control-allow-origin': '*',
  },
  open: true,
  openPage: devenv.autoOpen, // 自动打开浏览器
  watchOptions: {
    ignored: /node_modules/
  },
  publicPath: devenv.publicPath,
  stats: { colors: true }, // 彩色输出
  // historyApiFallback: { // 让我们所有404的请求都返回这个
  //     index: '/app/index.html'
  // },
  setup(app) {
    // apiMocker(app, mocker);
  },
  proxy: {

  }
}

Object.keys(devproxy).forEach(function(context) {
  var options = devproxy[context];
  config.devServer.proxy[context] = options
});


module.exports = config


