var path = require('path')
var fs = require('fs')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var WebpackStableModuleIdAndHash = require('webpack-stable-module-id-and-hash')
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin")
var srcPath = relative('src')
var assetsPath = path.resolve(srcPath, 'assets')
var utilsPath = path.join(assetsPath, 'js/utils/utils.js')
var pxtorem = require('postcss-pxtorem')
var ImageminPlugin = require('imagemin-webpack-plugin').default
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
            // multihtmlCache: true,
            filename: filename,
            template: (path || '') + '/' + (file.source ? file.source.replace(/%name/g, filename) : filename),
            inject: false,
            chunks: chunks,
            head: scripts.head || [],
            body: scripts.body || [],
            minify: {
                minifyCSS: true,
                minifyJS: true
            }
        }

        file.options && Object.assign(options, file.options)

        plugins.push(new HtmlWebpackPlugin(options))
    }
}
var postcssPlugins = [
    pxtorem({
        rootValue: 50,
        propWhiteList: [],
    })
]
var babelOpts = {
    // cacheDirectory: true,
    presets: [
        ["env", {
            "targets": {
            "browsers": ["last 2 versions", "safari >= 7"]
            },
            "modules": false, // 关闭解析模块，利于tree-shaking
            "loose": true
        }]
        , 'react', 'stage-0'],
    plugins: ['transform-runtime', 'transform-decorators-legacy', 'lodash'] // 删除add-module-exports，有bug
}
if (__DEV__) {
    babelOpts.plugins.push('dva-hmr')
}else {
    postcssPlugins.push(
        autoprefixer({browsers: ['> 5%', 'Firefox < 10', 'ie >= 8']})
    )
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
                test: /.(js|jsx|ts)$/,
                loader: 'eslint-loader',
                include: relative('src')
            },
            {
                test: /\.ts$/,
                include: relative('src'),
                use: "awesome-typescript-loader"
            },
            {
                test: /\.(jsx|js)?$/,
                include: relative('src'),
                use: {
                    loader: 'babel-loader',
                    options: babelOpts,
                }
            },
            {
                test: /\.css$/,
                use: [
                    __DEV__ ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: postcssPlugins,
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                include: relative('src'),
                use: [
                    __DEV__ ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: postcssPlugins,
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            modifyVars: require('../config/less.vars'),
                        }
                    },
                    {
                        loader: 'sass-resources-loader', // 此处为less全局配置
                        options: {
                            // Provide path to the file with resources

                            // Or array of paths
                            resources: [relative('src/assets/styles/vars.less')]
                        },
                    },
                ]
            },
            {
                test: /\.(sass|scss)$/,
                include: relative('src'),
                use: [
                    __DEV__ ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: postcssPlugins,
                        }
                    },
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            // Provide path to the file with resources

                            // Or array of paths
                            resources: [relative('src/assets/styles/vars.scss')]
                        },
                    },
                ]
            },
            {
                test: /\.(jpeg|jpg|png|gif|svg)$/,
                include: relative('src'),
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 2048,
                            name: `image/[name]${__DEV__ ? '' : '_[hash]'}.[ext]`
                        }
                    },

                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: { // 压缩 jpeg 的配置
                                progressive: true,
                                quality: 65
                            },
                            optipng: { // 使用 imagemin-optipng 压缩 png，enable: false 为关闭
                                enabled: __PROD__,
                            },
                            pngquant: { // 使用 imagemin-pngquant 压缩 png
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: { // 压缩 gif 的配置
                                interlaced: false,
                            },
                            webp: { // 开启 webp，会把 jpg 和 png 图片压缩为 webp 格式
                                quality: 75
                            },
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf)$/,
                include: relative('src'),
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
                include: relative('src'),
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: `media/[name]${__DEV__ ? '' : '_[hash]'}.[ext]`
                    }
                }]
            },
            {
                test: /\.json$/,
                include: relative('src'),
                use: 'json-loader'
            },
        ],
    },
    plugins: plugins.concat([
        // new NyanProgressPlugin(),
        new LodashModuleReplacementPlugin(),
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
        })
    ]),
    resolve: {
        extensions: ['.js', '.jsx', '.less'],
        alias: {
            // 路径别名
            SRC: relative('src'),
            Assets: relative('src/assets'),
            Component: relative('src/components'),
            Util: relative('src/utils'),
            Service: relative('src/services'),
            Page: relative('src/pages')
        },
    },
}

module.exports = config
