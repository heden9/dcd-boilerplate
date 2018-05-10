# Quick Start

## 开始之前
- 确保 node 版本是 8.x 或以上
- 用 [cnpm](https://github.com/cnpm/cnpm) 或 [yarn](https://github.com/yarnpkg/yarn) 能节约你安装依赖的时间


## 步骤一：安装依赖必备资源

```shell
  npm i -g dcd-cli
```

```shell
  dcd init dcd-project
```


## 步骤二：启动dev server
```shell
$ npm run dev
```

## 步骤三：访问开发页面,代码改变页面会热更新 hmr
```shell
http://0.0.0.0:9090/bar
```

## 步骤四：发布测试机
```shell
$ npm run stage
```

## 步骤五：打包构建
```shell
$ npm run build
```

## 步骤六：提交review
```shell
$ npm run review gengweibiao.fe
```

# Features

-   基于dva，绝对是最好用的redux方案。适用于各种场景
-   server热重启、hmr。mockjs、postcss支持。stage-0、装饰器支持
-   全局的less/sass文件自动import
-   高清方案，自动转换rem
-   多template、react-router 灵活切换
-   动态路由方案，按需model，page
-   eslint、precommit、review脚本保证代码质量

# 目录结构

```bash
├── README.md
├── bin
│   └── review                # 提交review的脚本
├── build                     # webpack配置目录，修改后server会自动重启
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.prod.conf.js
│   └── webpack.stage.conf.js
├── config                    # 项目配置目录
│   ├── dev.env.js            # 开发环境下配置
│   ├── dev.proxy.js          # 开发环境下代理配置
│   ├── less.vars.js          # less全局变量配置
│   ├── prod.env.js           # 生产环境下配置
│   ├── src.map.js            # 重要 ⚠️  指定项目入口，以及所需的script配置
│   └── stage.env.js          # 测试环境下配置
├── mock
│   ├── app.js                # mock入口配置，修改后会热更到项目中
│   └── awards_mock.js
├── package-lock.json
├── package.json
├── scm_build.sh              # scm编译脚本  scm平台自动读取该文件执行
├── scm_build_resource.sh     # scm资源指定脚本
├── scripts                   # cli执行目录
│   ├── compiler.js           # compiler创建
│   ├── dev.js                # dev下 webpack-dev-server及hmr配置
│   ├── fork.js               # fork进程来跑server，便于进行restart
│   ├── loader.js             # TODO 自动扫目录脚本
│   ├── prod.js               # build启动入口
│   ├── send.js               # 消息传递脚本
│   └── server.js             # server启动入口
├── src
│   ├── assets                # 资源目录
│   │   ├── fonts
│   │   ├── images
│   │   └── styles
│   │       ├── normalize.less
│   │       └── vars.less     # 重要 ⚠️ 会被自动import到src下引入的全部less/scss文件上
│   ├── components
│   │   ├── Mask
│   │   │   ├── index.js
│   │   │   └── style.less
│   │   ├── Navbar
│   │   │   ├── index.js
│   │   │   └── style.less
│   │   └── ScrollView
│   │       ├── index.js
│   │       └── style.less
│   ├── entries               # 重要 ⚠️ 项目入口，每个文件夹对应每一个入口
│   │   ├── antm.html
│   │   ├── bar
│   │   │   ├── index.html
│   │   │   ├── index.js
│   │   │   ├── main.js
│   │   │   └── style.less
│   │   ├── common.html
│   │   ├── common.js
│   │   └── foo
│   │       ├── index.html
│   │       ├── index.js
│   │       ├── main.js
│   │       └── style.less
│   ├── layouts               # 包裹在router之上的cover组件目录
│   │   └── Cover.js
│   ├── models                # 对应dva的model
│   │   ├── app.js
│   │   ├── book.js
│   │   └── home.js
│   ├── pages                 # 路由页面目录
│   │   ├── Book
│   │   │   └── index.js
│   │   ├── Home
│   │   │   ├── index.js
│   │   │   └── style.less
│   │   └── News
│   │       ├── index.js
│   │       └── style.less
│   ├── services              # 接口请求的目录
│   │   └── api.js
│   └── utils                 # 小工具目录
│       ├── event.js
│       ├── fastclick.js
│       ├── future.js
│       ├── login.js
│       ├── normalize.js
│       ├── openapp.js
│       ├── tools.js
│       ├── ua.js
│       └── wechat.js
└── yarn.lock
```


## CSS namespace命名规范
---
隶属于component粒度的组件根元素的className命名为 cpt-驼峰转中划线组件名，如 compoents/NavBar 的CSS namespace命名为：cpt-nav-bar

> 为尽可能避免样式污染，理论上组件的css都应置于该组件的namespace下，如有特殊情况，如弹窗样式覆盖一类，可不置于namespace下

#  开始写代码
---
## dva入门

* 理解 dva 的 [8 个概念](https://github.com/dvajs/dva/blob/master/docs/Concepts_zh-CN.md) ，以及他们是如何串起来的
* 掌握 dva 的[所有 API](https://github.com/dvajs/dva/blob/master/docs/API_zh-CN.md)
* 查看 [dva 知识地图](https://github.com/dvajs/dva-knowledgemap) ，包含 ES6, React, dva 等所有基础知识
* 查看 [更多 FAQ](https://github.com/dvajs/dva/issues?q=is%3Aissue+is%3Aclosed+label%3Afaq)，看看别人通常会遇到什么问题

## 快速上手

[12 步 30 分钟，完成用户管理的 CRUD 应用 (react+dva+antd)](https://github.com/sorrycc/blog/issues/18)


### 1、redux-saga中的Effects的使用
注意看dva中的[effects](https://github.com/dvajs/dva/blob/master/packages/dva-core/test/effects.test.js)用法，就是redux-saga中的effects用法

### 2、无路由方案的切换

#### `app.router(({ history, app }) => RouterConfig)`

注册路由表。

通常是这样的：

```js
import { Router, Route } from 'dva/router';
app.router(({ history }) => {
  return (
    <Router history={history}>
      <Route path="/" component={App} />
    <Router>
  );
});
```

推荐把路由信息抽成一个单独的文件，这样结合 [babel-plugin-dva-hmr](https://github.com/dvajs/babel-plugin-dva-hmr) 可实现路由和组件的热加载，比如：

```js
app.router(require('./router'));
```
而有些场景可能不使用路由，比如多页应用，所以也可以传入返回 JSX 元素的函数。比如：

```js
app.router(() => <App />);
```
### `app.start(selector?)`

启动应用。`selector` 可选，如果没有 `selector` 参数，会返回一个返回 JSX 元素的函数。

```js
app.start('#root');
```

那么什么时候不加 `selector`？常见场景有测试、node 端、react-native 和 i18n 国际化支持。

比如通过 react-intl 支持国际化的例子：

```js
import { IntlProvider } from 'react-intl';
...
const App = app.start();
ReactDOM.render(<IntlProvider><App /></IntlProvider>, htmlElement);
```

或者添加一些provider，如material的主题

## 注意事项⚠️

> `babel-plugin-dva-hmr` 会找到 `app.router()` 这种方式的函数调用，将之替换成目标代码

```js
(function() {
  // Generated by babel-plugin-dva-hmr
  console.log('[HMR] inited with babel-plugin-dva-hmr');
  const router = require('${routerPath}');
  ${appName}.router(router.default || router);
  ${appName}.use({
    onHmr(render) {
      if (module.hot) {
        const renderNormally = render;
        const renderException = (error) => {
          const RedBox = require('redbox-react');
          ReactDOM.render(React.createElement(RedBox, { error: error }), document.querySelector('${container}'));
        };
        const newRender = (router) => {
          try {
            renderNormally(router);
          } catch (error) {
            console.error('error', error);
            renderException(error);
          }
        };
        module.hot.accept('${routerPath}', () => {
          const router = require('${routerPath}');
          newRender(router.default || router);
        });
      }
    },
  });
  ${modelHot}
})()
```

所以使用起来非常灵活。️只要保证`路由信息`是与入口不同的独立文件即可

另外`webpack`中也需要配置相应的 `hotModuleReplacement` 插件，如果使用的不是`webpack-dev-server`的cli启动方式。同时需要使用`webpack-hot-middleware`中间件进行配置。

详细可以参考```scripts/dev.js```和```build/webpack.dev.conf.js```下的配置信息，以下是关键代码
```js
  Object.keys(config.entry).forEach(function (name) {
    if (name !== 'vendors'){
        config.entry[name] = [
            'webpack/hot/dev-server',
            'webpack-hot-middleware/client?reload=true',
            path.join(__dirname, '../', srcMap.scripts[name])
        ]
    }
  })
```
## 2、src下的目录结构
```bash
├── assets
│   ├── fonts
│   ├── images
│   └── styles
│       ├── normalize.less
│       └── vars.less
├── components
├── entries
│   ├── antm.html
│   ├── bar
│   │   ├── index.html
│   │   ├── index.js
│   │   ├── main.js
│   │   └── style.less
│   ├── common.html
│   ├── common.js
│   └── foo
│       ├── index.html
│       ├── index.js
│       ├── main.js
│       └── style.less
├── layouts
│   └── Cover.js
├── models
│   ├── app.js
│   ├── book.js
│   └── home.js
├── pages
│   ├── Book
│   │   └── index.js
│   ├── Home
│   │   ├── index.js
│   │   └── style.less
│   └── News
│       ├── index.js
│       └── style.less
├── services
│   └── api.js
└── utils
```

我们约定:
* 组件中的文件夹名采用大驼峰，文件采用下划线分割的方式
* 引入组件的时候使用`Component/Mask`的方式

使得目录结构更加清晰，同时使用webpack alias的方式，也能使得构建更快

另外建议全部使用**es6的模块系统**，有利于UglifyJsPlugin产出更小的目标代码

#### entries
```bash
.
├── antm.html
├── bar
│   ├── index.html
│   ├── index.js
│   ├── main.js
│   └── style.less
├── common.html
├── common.js
└── foo
    ├── index.html
    ├── index.js
    ├── main.js
    └── style.less
```
针对多个template的场景，可在`config/src.map.js` 中进行配置

#### `common.js`

所有页面都引入的js文件，可在其中进行：`polyfill`的配置，`fastclick.js`的引入。

同时也可以在这里写cookie，解决某些场景的登录问题
```js
if (__DEV__) {
  const setCookie = function (c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + '=' + escape(value) +
    ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString()) + '; path=/'
  }
  setCookie('sessionid', '...', 30)
}

```

#### `bar/main.js`

路由配置页面，在此可按需引入`model`和`page`。

按需引入是code-split的一种典型实现方式

[react-router 4 文档](https://reacttraining.com/react-router/web/example/basic)

[路由鉴权](https://reacttraining.com/react-router/web/example/auth-workflow)
```js
/**
 * 动态路由方式
 */
import React from 'react'
import {
  Route,
  Switch,
  Redirect,
  routerRedux
} from 'dva/router'
import PropTypes from 'prop-types'
import dynamic from 'dva/dynamic' // 按需加载的hoc组件
import Cover from '../../layouts/Cover'

import './style.less'

const { ConnectedRouter } = routerRedux

const routes = [
  {
    path: '/home',
    exact: true, // 此处为router4语法，表示精准匹配该route
    // import处注释是为了让webpack使用指定的名字 如 chunk-name 来为异步模块命名，若指定相同的chunk-name。两个chunk会被打包到一起
    models: () => [import(/* webpackChunkName: "chunk-home" */ '../../models/home')],
    component: () => import(/* webpackChunkName: "chunk-home" */ '../../pages/Home')
  },
  {
    path: '/news',
    exact: true,
    component: () => import(/* webpackChunkName: "chunk-news" */ '../../pages/News')
  }
]
function Main ({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <Cover>
        <Switch>
          {
            routes.map(({ path, exact = true, ...dynamics }) => (
              <Route
                exact={exact}
                key={path}
                path={path}
                component={dynamic({
                  app,
                  ...dynamics
                })}
              />
            ))
          }
          <Redirect to="/home" />
        </Switch>
      </Cover>
    </ConnectedRouter>
  )
}

Main.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
}

export default Main

```
注意 ⚠️  `dva`中直接内置了`react-router-dom`和`react-router-redux`，所以可以直接引入，不需要多次安装

#### `bar/index.html`

```ejs
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>dcd-cli-bar</title>
    <meta name="x5-fullscreen" content="true">
    <meta name="full-screen" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <meta name="viewport" content="viewport-fit=cover,user-scalable=no">
    <%= require('raw-loader!../antm.html') %>
    <%= htmlWebpackPlugin.files.webpackManifest %>

    <% for (var css in htmlWebpackPlugin.files.css) { %>
    <link href="<%= htmlWebpackPlugin.files.css[css] %>" rel="stylesheet">
    <% } %>

    <%= require('raw-loader!../common.html') %>

    <% for (var head of htmlWebpackPlugin.options.head) { %>
    <script src="<%= htmlWebpackPlugin.files.chunks[head].entry %>"></script>
    <% } %>
</head>
<body>
    <div id="root"></div>
    <script src="//s3.pstatp.com/inapp/toutiao.js"></script>
    <% for (var body of htmlWebpackPlugin.options.body) { %>
    <script src="<%= htmlWebpackPlugin.files.chunks[body].entry %>"></script>
    <% } %>
</body>
</html>

```
可在其中通过`<%= require('raw-loader!../antm.html') %>`这种语法引入html代码片段。

可以直接接入前端监控的相关工具

#### `antm.html`

[antm的高清方案](https://github.com/ant-design/ant-design-mobile/wiki/HD)

注意不用自己设置viewport
```js
// webpack.base.conf.js
var postcssPlugins = [
    pxtorem({
        rootValue: 50,
        propWhiteList: [],
    })
]
```
用户业务样式代码以 px 为单位，并且以 iPhone6 屏幕 “物理像素” 宽度 750 为基准 (即普通 “逻辑像素” 值的 2 倍大小)， 使用 postcss-pxtorem 把 px 转成 rem 单位，转换基准为1rem=100px (使用 rem 实现不同设备等比缩放效果)。

可设置`rootValue`来进行调节，懂车帝项目一般是50

配置完成后，我们可以直接使用设计稿上提供的尺寸进行代码的书写
#### components

```bash
├── Mask
│   ├── index.js
│   └── style.less
├── Navbar
│   ├── index.js
│   └── style.less
└── ScrollView
    ├── index.js
    └── style.less
```

组件书写遵循这样的格式：
* 组件逻辑代码 ```index.js/index.jsx```
* 样式代码 ```style.less/style.scss```

#### pages
```bash
.
├── Book
│   ├── BookWgt
│   │   ├── index.js
│   │   └── style.less
│   ├── images
│   └── index.js
├── Home
│   ├── index.js
│   └── style.less
└── News
    ├── index.js
    └── style.less
```
如果有自用的图片资源，直接放在身边即可。公用的图片资源，放在`assets/images`下

自用的`widget`组件，同样放在身边，内部遵循components的书写格式


#### models

及dva配置中的model，支持model的按需加载，见上文。

> 建议将业务数据相关的逻辑流程都放在models的effects中，便于组件的抽象和逻辑的复用。
  如：同一套登录逻辑，可以放在models中，这样不同的page可以直接connect接入复用

相应的pages中，可在`mapStateToProps`中处理数据的格式，保证models中的数据纯粹，如：
```js
  function mapStateToProps({ user }, props) {
    return {
      name: format(user.name)
    }
  }
```

同时使用频率较高的函数，如：
```js
  function mapDispatchToProps(dispatch, props) {
    return {
      clickHandle() {
        dispatch({ type: 'user/fetch', payload: { ... } })
      }
    }
  }
```
也可提取到`mapDispatchToProps`中进行封装

保证下层组件的提供的props干净透明

建议使用es7装饰器进行HOC的装载，简洁优雅
```js
  @connect(mapStateToProps, mapDispatchToProps)
  class Page extends Component {
    render() { .... }
  }
```

#### `services`

```js
// services/api.js

import axios from 'axios'
import { Toast } from 'antd-mobile'

/**
 * 推荐设置axios拦截器，拦截所有的响应，便于做状态码的统一判断
 */
axios.interceptors.response.use(function ({ data }) {
  if (data.status === 0) {
    return data
  }
  console.log(data)
  if (+data.status === 10014) {
    return Promise.reject(new Error('need login!'))
  }
  return Promise.reject(new Error('bad response'))
}, function (error) {
  Toast.fail('服务繁忙，请稍后再试')
  return Promise.reject(error)
})

export const fetchTest = () => {
  return axios.get('/motor/pleasure/worldcup/awards/list')
}

// entries/bar/index.js
import dva from 'dva'
const app = dva({
  onError (error, dispatch) {
    error.preventDefault() // 防止控制台依旧飘红
    console.log(error.message)
    /**
     * 根据error.message可判断错误类型，进行集中的错误处理
     */
  }
})

app.router(require('./main'))

app.start('#root')

```

适用场景：如登录失败，后端错误码10014捕捉后，自动跳转`/login`页面

#### `utils/createFetcher.js`

为一个组件加上初始化时异步获取数据的能力

如果某些数据我们并不需要存入redux。我们就可以在组件内部进行消化

他可以在数据加载完成后在渲染组件，并留下一个展位的loading
```js
  import React, { Component } from 'react'
  import createFetcher from 'Util/createFetcher'
  import './style'
  const fetchSometingApi = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('加载完毕，这是你要的一段数据')
      }, 3000)
    })
  }

  @createFetcher({
    a: fetchSometingApi,
    b: fetchSometingApi
  }, {
    fallback: function loading () {
      return <div>loading...</div>
    },
    onError(e) {
      console.log(e)
    }
  })
  export default class Home extends Component {
    componentDidMount () {
    }
    render () {
      const { a, b } = this.props
      return (
        <React.Fragment>
          <div className="home">page: Home</div>
          <div>{a}</div>
          <div>{b}</div>
        </React.Fragment>
      )
    }
  }

```
