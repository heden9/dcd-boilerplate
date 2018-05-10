# Quick Start

## 开始之前
- 确保 node 版本是 8.x 或以上
- 用 [cnpm](https://github.com/cnpm/cnpm) 或 [yarn](https://github.com/yarnpkg/yarn) 能节约你安装依赖的时间

## 步骤一：安装依赖必备资源
```shell
  npm i
  # or
  yarn
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

-   server热重启、hmr。mockjs、postcss支持。stage-0、装饰器支持
-   全局的less/sass文件自动import
-   高清方案，自动转换rem
-   多template、react-router 灵活切换
-   动态路由方案，按需model，page

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
隶属于component粒度的组件根元素的className命名为 cpt-驼峰转中划线组件名，如 compoents/NavBar 的CSS namespace命名为：cpt-nav-bar

> 为尽可能避免样式污染，理论上组件的css都应置于该组件的namespace下，如有特殊情况，如弹窗样式覆盖一类，可不置于namespace下
