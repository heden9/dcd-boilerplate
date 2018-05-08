// 代理配置文件

var proxys = {
    '/motor/account/': {
        target: 'http://10.11.40.73:4625',
        secure: false,
        changeOrigin: true
    },
    '/motor/pleasure/': {
        target: 'http://10.11.40.72:9876',
        // target: 'http://is.snssdk.com',
        secure: false,
        changeOrigin: true
    },
}

module.exports = proxys
