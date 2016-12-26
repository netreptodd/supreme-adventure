var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

//var express = require('express')
//var app = express()

//app.get('/', function (req, res) {
//    res.send('Hello World!')
//})

//app.listen(3000, function () {
//    console.log('Example app listening on port 3000!')
//})