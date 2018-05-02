var webpack = require('webpack')
var NyanProgressPlugin = require('nyan-progress-webpack-plugin')
var path = require('path')
var config = require('./webpack.base.conf.js')
var devEnv = require('../config/dev.env.js')
var srcMap = require('../config/src.map')
config = Object.assign({}, config)

// add hot-reload related code to entry chunk
Object.keys(config.entry).forEach(function (name) {
    if (name !== 'vendors'){
        config.entry[name] = [
            'react-hot-loader/patch',
            path.join(__dirname, '../', srcMap.scripts[name])
        ]
        console.log(config.entry[name])
    }
})

config.devtool = 'source-map';
config.plugins = config.plugins.concat([

    new NyanProgressPlugin(),  // 进度条

    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),

])
module.exports = config
