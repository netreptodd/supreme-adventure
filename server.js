var AlexaAppServer = require('alexa-app-server');

var instance = AlexaAppServer.start({
  server_root: __dirname,
  app_dir: "apps",
  app_root: "/alexa/",
  port: process.env.port || 8080
});
