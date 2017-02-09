module.change_code = 1;
var alexa = require('alexa-app');
var app = new alexa.app('supreme-adventure');

app.launch((request, response) => {
  response.say('Welcome to Supreme Adventure! Would you like to play a game?');
  response.shouldEndSession(false);
});

app.intent('Help', {
  'utterances': [
    'help {|me}'
  ]
}, (request, response) => {
  reponse.say('Here is a brief list of action words you can use to interact with the game. Attack, get, look, go, open, ask, bamboozle');
});

app.sessionEnded((request, response) => {
});

module.exports = app;
