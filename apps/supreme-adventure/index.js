module.change_code = 1;
var alexa = require('alexa-app');
var app = new alexa.app('supreme-adventure');

app.intent('number',
  {
    'slots': { 'number': 'NUMBER' },
    'utterances': ['say the number {1-100|number}']
  },
  function(request, response) {
    var number = request.slot('number');
    response.say('You asked for the number ' + number);
  }
);

module.exports = app;
