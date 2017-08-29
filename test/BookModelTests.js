var assert = require('assert');
var Book = require('../api/models/Book');

var textExample='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a';

describe('Book Model test suite', function () {
    it('Create a new book', function (done) {

        var newBook = new Book({
            authorId:'4582415587415',
            title:'Adventures of a mushroom',
            storyType:'short-story',
            genre:'Fantasy',
            text:textExample
        });

        newBook.save().then(function () {
            assert(!newBook.isNew);
            assert(newBook.genre==='Fantasy');
            done();
        });

    });

});