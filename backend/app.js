// app.js
var express = require('express');
var app = express();
var db = require('./db');

var BookController = require('./api/controllers/BookController');
app.use('/books', BookController);

module.exports = app;