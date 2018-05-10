var { fork } = require('child_process')
var { send, RESTART } = require('./send')

function start(devScriptPath) {
  const devProcess = fork(devScriptPath, process.argv.slice(2));

  devProcess.on('message', type => {
    console.log(type)
    if (type === RESTART) {
      devProcess.kill('SIGINT');
      start(devScriptPath);
    }
    send(type);
  });
}
module.exports = start
