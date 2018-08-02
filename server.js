// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

let sqlite3 = require('sqlite3');
let db = new sqlite3.Database('./db.sqlite');

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 

app.use(express.static('static'));
app.use(express.static('views'));
// Routing
app.get("/", (request, response) => {
    response.sendFile(__dirname + '/views/index.html');
});

app.get("/create-account", (request, response) => {
    response.sendFile(__dirname + '/views/createAccount.html');
});
app.post("/create-account", (request, response) => {
    console.log(request.body);
});

// Starts the server.
server.listen(3000, function() {
    console.log('Starting server on port 3000');
});