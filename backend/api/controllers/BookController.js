var router = require('../controllers/Router');
var Book = require('../models/Book');

// Creates a new book
router.post('/', function (req, res) {
    var sequelObject =parseSequelObject(req.body.sequel);

        Book.create({
            authorId: req.body.authorId,
            title: req.body.title,
            sequel:sequelObject,
            storyType: req.body.storyType,
            genre: req.body.genre,
            text: req.body.text,
            isDraft: req.body.isDraft
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
        console.log(err);
        res.status(200).send(books);
    });
});


function isValueFieldEmpty(value) {
    return value == null;
}


function parseSequelObject(sequelJsonString) {
    
    if (isValueFieldEmpty(sequelJsonString))
        return null;
    else 
        return JSON.parse(sequelJsonString);
      
}

module.exports = router;