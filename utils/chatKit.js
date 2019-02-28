const Chatkit = require('@pusher/chatkit-server');
const config = require('./config');

module.exports = new Chatkit.default({
  instanceLocator: config.instanceLocator,
  key: config.key,
})