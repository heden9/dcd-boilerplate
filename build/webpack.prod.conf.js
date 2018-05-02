var webpack = require('webpack')

var config = require('./webpack.base.conf.js')
config = Object.assign({}, config)

config.plugins = config.plugins.concat([

    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        },
    }),

    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        except: ['$', 'exports', 'require']
    }),
])

module.exports = config
