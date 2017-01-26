﻿var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
  res.send('No GETs here...');
});

app.post('/', function (req, res) {
  res.json({
    "version": "1.0",
    "response": {
      "outputSpeech": {
        "type": "PlainText",
        "text": "Hello, World!"
      },
      "reprompt": {
        "outputSpeech": {
          "type": "PlainText",
          "text": ""
        }
      }
      "shouldEndSession": true
    }
    "sessionAttributes": {}
  });
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port') + '!');
});
