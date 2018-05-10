var webpack = require('webpack')
var InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var config = require('./webpack.base.conf.js')
config = Object.assign({}, config)
var analyze = process.env.analyze || 'reject';
config.plugins = config.plugins.concat([

    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        },
    }),
    // new BundleAnalyzerPlugin(),
    new InlineManifestWebpackPlugin({name: 'webpackManifest'}),
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendors'].concat(['manifest']),
        filename: `js/[name]_[chunkhash].js`,
        minChunks: 2,
    }),
    new UglifyJsPlugin({
        cache: true,
        parallel: true
    }),
])

if (analyze === 'resolve') {

    config.plugins.push(
        new BundleAnalyzerPlugin()
    );
}
module.exports = config
