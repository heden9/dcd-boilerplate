var webpack = require('webpack')
var config = require('../build/webpack.prod.conf.js')

console.log(
    '  Tip:\n' +
    '  Built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
)

webpack(config, function(err, stats) {
    // show build info to console
    console.log( stats.toString({ chunks: false, color: true }) );
});
