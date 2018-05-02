var path = require('path')
var fs = require('fs')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
var WebpackStableModuleIdAndHash = require('webpack-stable-module-id-and-hash')

var srcPath = path.resolve(__dirname, '../src');
var assetsPath = path.resolve(srcPath, 'assets');
var utilsPath = path.join(assetsPath, 'js/utils/utils.js');


var mapConfig = require('../config/src.map.js')
var devConfig = require('../config/dev.env.js')
var prodConfig = require('../config/prod.env.js')

var isDev = (process.env.NODE_ENV === 'development')

var __DEV__ = process.env.NODE_ENV === 'development'
var __TEST__ = process.env.NODE_ENV === 'test'
var __PROD__ = process.env.NODE_ENV === 'production'

function relative (name) {
    return path.resolve(__dirname, '..', name)
}

var rootPath = relative(''); // 项目根目录

var entries = {}, plugins = [];
resolve_script_entry('', mapConfig.scripts)
resolve_pages(mapConfig.directories.pages, mapConfig.pages)

function resolve_script_entry (path, names) {
    if (!names) { return }
    if (typeof names === 'object' && !Array.isArray(names)) {
        for (let key in names) {
            resolve_script_entry(path + '/' + key, names[key])
        }
        return
    }
    if (!Array.isArray(names)) {
        names = [names]
    }
    path = path.slice(1)
    entries[path] = names.map(name => /\.jsx?$/.test(name) ? relative(name.replace(/%name/g, path)) : name)
}

function resolve_pages (path, files) {
    for (let basename in files) {
        const filename = basename
        const file = files[basename], scripts = file.scripts || {}

        const chunks = []
        for (let key in scripts) {
            const val = scripts[key]
            if (Array.isArray(val)) {
                chunks.push.apply(chunks, val)
            } else {
                chunks.push(val)
                scripts[key] = [val]
            }
        }

        const options = {
            filename: filename,
            template: (path || '') + '/' + (file.source ? file.source.replace(/%name/g, filename) : filename),
            inject: false,
            chunks: chunks,
            head: scripts.head || [],
            body: scripts.body || []
        }

        file.options && Object.assign(options, file.options)

        plugins.push(new HtmlWebpackPlugin(options))
    }
}

var config = {
    entry: entries,
    output: {
        path: isDev ? relative('dist', devConfig.outputPath) : relative('dist'),
        filename: `js/[name]${isDev ? '' : '_[chunkhash]'}.js`,
        chunkFilename: `js/[name]${isDev ? '' : '_[chunkhash]'}.js`,
        publicPath: isDev ? devConfig.publicPath : prodConfig.publicPath,
    },

    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-0']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    publicPath: '../',
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [autoprefixer({browsers: ['> 5%', 'Firefox < 10', 'ie >= 8']})],
                            }
                        }
                    ]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    publicPath: '../',
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [autoprefixer({browsers: ['> 5%', 'Firefox < 10', 'ie >= 8']})],
                            }
                        },
                        'less-loader'
                    ]
                })
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    publicPath: '../',
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [autoprefixer({browsers: ['> 5%', 'Firefox < 10', 'ie >= 8']})],
                            }
                        },
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.(jpeg|jpg|png|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 2048,
                        name: `image/[name]${isDev ? '' : '_[hash]'}.[ext]`
                    }
                }]
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 102400,
                        name: `font/[name]${isDev ? '' : '_[hash]'}.[ext]`
                    }
                }]
            },
            {
                test: /\.(mp4|mp3)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: `media/[name]${isDev ? '' : '_[hash]'}.[ext]`
                    }
                }]
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
        ],
    },
    plugins: plugins.concat([

        new CleanWebpackPlugin(['dist'], {
            root: rootPath
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            },
            __DEV__,
            __TEST__,
            __PROD__,
        }),

        new InlineManifestWebpackPlugin({name: 'webpackManifest'}),

        new ExtractTextPlugin(`css/[name]${isDev ? '' : '_[contenthash]'}.css`, {allChunks: true}),

        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendors'].concat(['manifest']),
            filename: `js/[name]${isDev ? '' : '_[chunkhash]'}.js`,
            minChunks: Infinity,
        }),

        new webpack.HashedModuleIdsPlugin(),  // 优化hash值=>缓存优化
    ]),
    resolve: {
        extensions: ['.js', '.jsx', '.less'],
        alias: {
            // 路径别名
            SRC: relative('src'),
            Component: relative('src/components'),
            Widget: relative('src/widgets'),
            Plugin: relative('src/plugins'),
            Template: relative('src/templates'),
            Pagelet: relative('src/templates/include'),
            Assets: assetsPath,
        },
    },
}

module.exports = config
