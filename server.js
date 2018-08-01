// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);
app.set('port', 5000);
app.use(express.static('static'));
// Routing
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
});
// Starts the server.
server.listen(3000, function() {
  console.log('Starting server on port 3000');
});