var express = require('express')
var webpack = require('webpack')
var path = require('path')
var proxy = require('http-proxy-middleware')
// var favicon = require('express-favicon')

var config = require('./webpack.dev.conf.js')
var devenv = require('../config/dev.env.js')
var devproxy = require('../config/dev.proxy.js')

var app = express();

var compiler = webpack(config);

// app.use(favicon(path.join(__dirname, '../favicon.ico')));

// static mock json
app.use(express.static( path.join(__dirname, '..') ));

// proxy api requests
Object.keys(devproxy).forEach(function(context) {
    var options = devproxy[context];
    if(typeof options === 'string') {
        options = {target: options}
    }
    app.use(proxy(context, options))
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  stats: {
    colors: true
  },
  publicPath: config.output.publicPath
}));

// enable hot-reload and state-preserving
// compilation error display
app.use(require('webpack-hot-middleware')(compiler));

app.listen(devenv.renderPort, '127.0.0.1', function(err) {
  err && console.log(err);
});
