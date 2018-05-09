# Get Start

## 步骤一：安装依赖必备资源
```shell
$ npm install
```


## 步骤二：启动dev server
```shell
$ npm run dev
```

## 步骤三：访问开发页面,代码改变页面会热更新
```shell
http://127.0.0.1:9000/home.html
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

-   全局less变量配置
-   多template配置
-   高清方案
-   动态路由方案，按需model，page
-   hmr

# 目录结构

```bash
├── README.md
├── bin
│   └── review
├── build
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.prod.conf.js
│   └── webpack.stage.conf.js
├── config
│   ├── dev.env.js
│   ├── dev.proxy.js
│   ├── less.vars.js
│   ├── prod.env.js
│   ├── src.map.js
│   └── stage.env.js
├── mock
│   ├── app.js
│   └── awards_mock.js
├── package-lock.json
├── package.json
├── scm_build.sh
├── scm_build_resource.sh
├── scripts
│   ├── compiler.js
│   ├── dev.js
│   ├── fork.js
│   ├── loader.js
│   ├── prod.js
│   ├── send.js
│   └── server.js
├── src
│   ├── assets
│   │   ├── fonts
│   │   ├── images
│   │   └── styles
│   │       └── normalize.less
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
│   ├── entries
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
│   ├── layouts
│   │   └── Cover.js
│   ├── models
│   │   ├── app.js
│   │   ├── book.js
│   │   └── home.js
│   ├── pages
│   │   ├── Book
│   │   │   └── index.js
│   │   ├── Home
│   │   │   ├── index.js
│   │   │   └── style.less
│   │   └── News
│   │       └── index.js
│   ├── services
│   │   └── api.js
│   └── utils
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
隶属于widget粒度的组件跟元素的className命名为 wgt-驼峰转中划线组件名，如 widgets/HomeContent 的CSS namespace命名为：wgt-home-content

> 为尽可能避免样式污染，理论上组件的css都应置于该组件的namespace下，如有特殊情况，如弹窗样式覆盖一类，可不置于namespace下
