var path = require('path')
var fs = require('fs')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
var WebpackStableModuleIdAndHash = require('webpack-stable-module-id-and-hash')
var srcPath = path.resolve(__dirname, '../src')
var assetsPath = path.resolve(srcPath, 'assets')
var utilsPath = path.join(assetsPath, 'js/utils/utils.js')
var pxtorem = require('postcss-pxtorem')

var mapConfig = require('../config/src.map.js')
var devConfig = require('../config/dev.env.js')
var prodConfig = require('../config/prod.env.js')

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
        path: __DEV__ ? relative('dist', devConfig.outputPath) : relative('dist'),
        filename: `js/[name]${__DEV__ ? '' : '_[chunkhash]'}.js`,
        chunkFilename: `js/[name]${__DEV__ ? '' : '_[chunkhash]'}.js`,
        publicPath: __DEV__ ? devConfig.publicPath : prodConfig.publicPath,
    },

    module: {
        rules: [
            { // 在编译之前执行这个loader，如果报错了就不继续
                enforce: 'pre',
                test: /.(js|jsx)$/,
                loader: 'eslint-loader',
                exclude: [
                    path.join(__dirname, '../node_modules')
                ]
            },
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["env", {
                                "targets": {
                                "browsers": ["last 2 versions", "safari >= 7"]
                                },
                                "loose": true
                            }]
                            , 'react', 'stage-0'],
                        plugins: ['transform-decorators-legacy', 'react-hot-loader/babel']
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
                                plugins: [
                                    pxtorem({
                                        rootValue: 50,
                                        propWhiteList: [],
                                    }),
                                    autoprefixer({browsers: ['> 5%', 'Firefox < 10', 'ie >= 8']}),
                                ],
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
                                plugins: [
                                    pxtorem({
                                        rootValue: 50,
                                        propWhiteList: [],
                                    }),
                                    autoprefixer({browsers: ['> 5%', 'Firefox < 10', 'ie >= 8']})
                                ],
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                modifyVars: require('../config/less.vars'),
                            }
                        }
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
                                plugins: [
                                    pxtorem({
                                        rootValue: 50,
                                        propWhiteList: [],
                                    }),
                                    autoprefixer({browsers: ['> 5%', 'Firefox < 10', 'ie >= 8']})
                                ],
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
                        name: `image/[name]${__DEV__ ? '' : '_[hash]'}.[ext]`
                    }
                }]
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 102400,
                        name: `font/[name]${__DEV__ ? '' : '_[hash]'}.[ext]`
                    }
                }]
            },
            {
                test: /\.(mp4|mp3)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: `media/[name]${__DEV__ ? '' : '_[hash]'}.[ext]`
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

        new ExtractTextPlugin({
            filename: `css/[name]${__DEV__ ? '' : '_[contenthash]'}.css`,
            allChunks: true,
            disable: __DEV__
        }),

        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendors'].concat(['manifest']),
            filename: `js/[name]${__DEV__ ? '' : '_[chunkhash]'}.js`,
            minChunks: Infinity,
        }),

        new webpack.HashedModuleIdsPlugin(),  // 优化hash值=>缓存优化
    ]),
    resolve: {
        extensions: ['.js', '.jsx', '.less'],
        alias: {
            // 路径别名
            SRC: relative('src'),
            Assets: relative('src/assets'),
            Component: relative('src/components'),
            Widget: relative('src/widgets'),
            Plugin: relative('src/plugins'),
            Template: relative('src/templates'),
            Pagelet: relative('src/templates/include'),
        },
    },
}

module.exports = config
