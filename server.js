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
var session = require('express-session');
var cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array());
app.use(cookieParser());
app.use(session({secret: "Your secret key"}));

app.set('view engine', 'ejs');

let sqlite3 = require('sqlite3');
let db = new sqlite3.Database('./db.sqlite');
let sessionUsername = [];
let sessionPassword = [];

//create users table if it doesn't already exist
db.run("CREATE TABLE IF NOT EXISTS users(username VARCHAR(20), password VARCHAR(20), date INTEGER)");

app.use(express.static('static'));

// Routing
app.get("/", (req, res) => {
    console.log(req.session.user);
    if(!req.session.user) return res.redirect("login");
    res.render(__dirname + '/views/index.ejs', {
        name: req.session.user.username
    });
});

app.get("/create-account", (req, res) => {
    res.render(__dirname + '/views/createAccount.ejs', {error:""});
});
app.post("/create-account", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
	let date = new Date().toDateString();
	
    let confirmPassword = req.body.confirmPassword;
    
    if(password !== confirmPassword) return res.render(__dirname + "/views/createAccount.ejs", {error:"Passwords do not match!"});
    if(username.length > 20) return res.render(__dirname + "/views/createAccount.ejs", {error:"Username is too long!"});
    if(password.length > 20) return res.render(__dirname + "/views/createAccount.ejs", {error:"Password is too long!"});
    if(!username) return res.render(__dirname + "/views/createAccount.ejs", {error:"Please enter a username!"});
    if(!password) return res.render(__dirname + "/views/createAccount.ejs", {error:"Please enter a password!"});
    
    db.get("SELECT username FROM users WHERE username = $username", {
        $username: username
    }, (err, row) => {
        if(err) return console.log(err);
        if(row) return res.render(__dirname + "/views/createAccount.ejs", {error:"Sorry, someone already has that username!"})
        
        db.run("INSERT INTO users (username, password, date) VALUES ($username, $password, $date)", {
            $username: username,
            $password: password,
			$date: date
			
        }, (err) => {
            if(err) return console.log(err);
            req.session.user = {username: username, password: password};
            res.redirect("/");
        });
    })
});

app.get("/login", (req, res) => {
    if(req.session.user) return res.redirect("/");
    res.render(__dirname + "/views/login.ejs", {error: ""});
});
app.post("/login", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    
    db.get("SELECT password FROM users WHERE username = $username", {
        $username: username
    }, (err, row) => {
        if(!row || row.password !== password) return res.render(__dirname + "/views/login.ejs", {error:"Incorrect username or password!"});
        req.session.user = {username: username, password: password};
        res.redirect("/");
    })
});

app.post("/logout", (req, res) => {
    req.session.user = undefined;
    res.redirect("/login");
});

app.get("/profile", (req, res) => {    
    res.redirect(`/profile/${req.session.user.username}`)
	console.log(req.session.user);
})

app.get("/profile/:username", (req, res) => {
	
    db.get("SELECT username, date FROM users WHERE username = $username COLLATE NOCASE", {
        $username: req.params.username
    }, (err, row) => {
        if(!row) return res.status(404).send("User not found!");
		
        res.render(__dirname + '/views/profile.ejs', {
            name: req.params.username,
			sessionUser: req.session.user.username,
			date: row["date"]
        });
    })
    
});

app.get("/change_username", (req, res) => {
	if(!req.session.user) return res.send("You are not logged in!");
	res.render(__dirname + '/views/editUsername.ejs', {
		error: ""
    });
});
app.post("/change_username", (req, res) => {
	let currentUsername = req.body.currentUsername;
	let newUsername = req.body.newUsername;
	let confirmUsername = req.body.confirmUsername;
});

// Starts the server.
server.listen(3000, function() {
    console.log('Starting server on port 3000');
});