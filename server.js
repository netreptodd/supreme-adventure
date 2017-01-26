var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.post('/', function (req, res) {
    //res.send('Hello World!');
      res.json({
      "version": "1.0",
      "response": {
        "shouldEndSession": true,
        "outputSpeech": {
          "type": "PlainText",
          "text": "<speak>Hello my gods!</speak>"
        }
      }
    });
});



app.listen(app.get('port'), function () {
    console.log('Example app listening on port ' + app.get('port') + '!');
});
