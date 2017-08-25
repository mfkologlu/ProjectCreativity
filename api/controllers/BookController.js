var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var Book = require('../models/Book');

// Creates a new book
router.post('/', function (req, res) {
    Book.create({
            title : req.body.title,
            genre : req.body.genre,
			author: req.body.author
        }, 
        function (err, book) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(book);
        });
});


// Returns all books found in database
router.get('/', function (req, res) {
    Book.find({}, function (err, books) {
        if (err) return res.status(500).send("There was a problem finding the books.");
        res.status(200).send(books);
    });
});

module.exports = router;