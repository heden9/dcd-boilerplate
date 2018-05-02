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
http://127.0.0.1:9090/motor/m/home.html
```

## 步骤四：发布测试机
```shell
$ npm run stage
```

## 步骤五：打包构建
```shell
$ npm run build
```

## 项目目录结构及说明

> 文件名命名应保持简洁，且遵循‘功能前缀+功能描述’的格式，便于代码组织，一些示例：HomeFooter, CarSelector, Home, FeedDetail, CarBrandList

```
.
├── README.md
├── package.json
├── build // webpack构建相关
│   ├── dev.js
│   ├── prod.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.prod.conf.js
│   └── webpack.stage.conf.js
├── config // 编译及其他配置相关
│   ├── dev.env.js
│   ├── dev.proxy.js
│   ├── prod.env.js
│   ├── src.map.js // 多template及其container对应入口的关联配置，!important
│   └── stage.env.js
├── mock // mock数据
│   └── test.json
└── src // 项目源码
    ├── apis // 数据接口相关
    │   └── demo.js
    ├── assets // 公共静态资源及第三方库等
    │   ├── libs
    │   └── static
    │       └── banner.jpg
    ├── components // 跨页面使用的较公用业务组件，细粒度，可被template和widget调用，如回流到app的下载条，导航条等
    │   └── DemoComponent // 文件夹名描述组件特征，且使用大驼峰命名格式，如ImgUploader，可有多个js文件，但入口文件为index.jsx
    │       ├── index.jsx
    │       └── index.less
    ├── containers // template对应的入口js文件
    │   └── demo.jsx
    ├── pagelets // 用于拼装页面骨架及供服务端渲染所需的html片段，如meta，统计，监控等
    │   └── demoPagelet.html
    ├── templates // 业务页面
    │   └── demo.html
    └── widgets // 业务相关逻辑组件组件，粗粒度（相对于component），原则上不可被多个页面调用，只可被template调用
        └── DemoWidget // 文件夹名描述组件特征，且使用大驼峰命名格式，如ReletedNews，可有多个js文件，但入口文件为index.jsx
            ├── index.jsx
            └── index.less
```

## CSS namespace命名规范
隶属于component粒度的组件根元素的className命名为 cpt-驼峰转中划线组件名，如 compoents/NavBar 的CSS namespace命名为：cpt-nav-bar
隶属于widget粒度的组件跟元素的className命名为 wgt-驼峰转中划线组件名，如 widgets/HomeContent 的CSS namespace命名为：wgt-home-content

> 为尽可能避免样式污染，理论上组件的css都应置于该组件的namespace下，如有特殊情况，如弹窗样式覆盖一类，可不置于namespace下
