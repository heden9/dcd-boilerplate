var WebpackOnBuildPlugin = require('on-build-webpack')
var NyanProgressPlugin = require('nyan-progress-webpack-plugin')

var stageEnv = require('../config/stage.env.js')

var rootPath = process.cwd()

var config = require('./webpack.base.conf.js')
config = Object.assign({}, config)
config.output.publicPath = stageEnv.publicPath;

config.plugins = config.plugins.concat([

    new NyanProgressPlugin(),  // 进度条

    new WebpackOnBuildPlugin(function (stats) {
        const exec = require('child_process').exec
        let scpcommand = `rsync -rav -e ssh dist/* tiger@10.11.40.73:/opt/tiger/motor_site/webroot/` + stageEnv.stagePath;
        exec(scpcommand, (error, stdout, stderr) => {
            console.log('Finish!')
            if (error) {
                console.error(`exec error: ${error}`)
                return
            }
        })
    }),

])

module.exports = config
