var webpack = require('webpack')
var InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var MiniCssExtractPlugin = require("mini-css-extract-plugin")
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var config = require('./webpack.base.conf.js')
config = Object.assign({}, config)
var analyze = process.env.analyze || 'reject';
config.mode = 'production'
config.optimization = {
    splitChunks: {
        cacheGroups: {
            vendors: {
                test: 'vendors',
                /**
                 * initial: 正常的方式引入的模块 import a from 'a'
                 * async: import('a')
                 * all: 所有方式引入的模块
                 */
                chunks: 'initial',
                name: 'vendors',
                enforce: true,
            },
            /**
             * 提取除了vendors之外的重复模块
             */
            commons: {
                chunks: 'initial',
                minChunks: 2,
                name: 'commons',
                enforce: true,
            },
            'async-vendors': {
                test: /[\\/]node_modules[\\/]/,
                minChunks: 2,
                chunks: 'async',
                name: 'async-vendors'
            }
        }
    },
    minimizer: [
        new UglifyJsPlugin({
            cache: true,
            parallel: true
        }),
        new OptimizeCSSAssetsPlugin({})
    ],
    runtimeChunk: { name: 'runtime' }
},
config.plugins = config.plugins.concat([
    new webpack.optimize.ModuleConcatenationPlugin(), // Scope Hoisting https://zhuanlan.zhihu.com/p/27980441
    new webpack.HashedModuleIdsPlugin(),
    new webpack.NamedChunksPlugin(chunk => chunk.name || 'faceless-chunk'), // a chunk has no name!!!
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        },
    }),
    new InlineManifestWebpackPlugin('runtime'),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: 'css/[name].[contenthash].css'
    })
])

if (analyze === 'resolve') {

    config.plugins.push(
        new BundleAnalyzerPlugin()
    );
}
module.exports = config
