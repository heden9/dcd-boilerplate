const debug = require('debug')('dcd-cli:send');

const COMPILING = 'COMPILING';
const DONE = 'DONE';
const STARTING = 'STARTING';
const RESTART = 'RESTART';
const OPEN_FILE = 'OPEN_FILE';

function send(message) {
  if (process.send) {
    debug(`send ${JSON.stringify(message)}`);
    process.send(message);
  }
}
module.exports = {
  COMPILING,
  DONE,
  STARTING,
  RESTART,
  OPEN_FILE,
  send
}
