var AlexaAppServer = require('alexa-app-server');

var instance = AlexaAppServer.start({
  server_root: __dirname,
  app_dir: 'apps',
  port: process.env.PORT || 8080
});
