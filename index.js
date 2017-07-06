const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const session = require('express-session');
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.Promise = require('bluebird');
// Replace "test" with your database name.
mongoose.connect('mongodb://localhost:27017/gabble');

var User = require('./models/Users'); 

const app = express();


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.render('index', {title: 'Home'});    
});

app.get('/login', function(req,res){
    res.render('login', {title: 'login'});    
});

app.post('/login', function(req, res){
    res.send(request.body);
});


app.get('/register', function(req,res){
    res.render('register', {title: 'register'});    
});

app.post('/register', function(req, res){
    if (req.body.username && req.body.password) { 
        res.send(req.body.username)
     } else {
        res.render('error', {error: 'username and password required'});
     }
    
});

app.listen(9021);
