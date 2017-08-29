var assert = require('assert');
var Author = require('../api/models/Author');

describe('Author Model test suite', function () {


    it('Create a new author', function (done) {

        var newAuthor = new Author({
            name: 'Arnold',
            lastname: 'Asllani',
            username: 'lordchaos',
            password: 'akjsdhfjudasf'

        });

        newAuthor.save().then(function () {
            assert(!newAuthor.isNew);
            assert(newAuthor.skills.length == 14);
            done();
        });

    });


    it('Find one author by Name', function (done) {
        var newAuthor = new Author({
            name: 'Arnold',
            lastname: 'Asllani',
            username: 'lordchaos',
            password: 'akjsdhfjudasf'

        });

        newAuthor.save().then(function () {
            Author.findOne({ name: 'Arnold' }).then(function (result) {
                assert(result.name === 'Arnold');
                assert(result.skills.length === 14);
                done();
            });
        });
    });


    var newAuthorForIdTest;
    it('Find one author by ID', function (done) {
        newAuthorForIdTest = new Author({
            name: 'Arnold',
            lastname: 'Asllani',
            username: 'lordchaos',
            password: 'akjsdhfjudasf'

        });

        newAuthorForIdTest.save().then(function () {
            Author.findOne({ _id: newAuthorForIdTest._id }).then(function (result) {
                assert(result.name === 'Arnold');
                assert(result.skills.length === 14);
                done();
            });
        });
    });


    it('Delete an author', function (done) {
        var newAuthor = new Author({
            name: 'Arnold',
            lastname: 'Asllani',
            username: 'lordchaos',
            password: 'akjsdhfjudasf'

        });

        newAuthor.save().then(function () {
            Author.findOneAndRemove({ name: 'Arnold' }).then(function () {
                Author.findOne({ name: 'Arnold' }).then(function (result) {
                    assert(result === null);
                    done();
                });
            });
        });
    });


    it('Update author attributes', function (done) {
        var newAuthor = new Author({
            name: 'Arnold',
            lastname: 'Asllani',
            username: 'lordchaos',
            password: 'akjsdhfjudasf'

        });

        newAuthor.save().then(function () {

            Author.findOneAndUpdate({ name: 'Arnold' }, { lastname: 'Anonymous', username: 'lordkronos' }).then(function () {
                Author.findOne({ name: 'Arnold' }).then(function (result) {
                    assert(result.lastname === 'Anonymous');
                    assert(result.username === 'lordkronos');
                    done();
                });
            });
        });
    });


    it('Update author skills by skillNumber', function (done) {
        var newAuthor = new Author({
            name: 'Arnold',
            lastname: 'Asllani',
            username: 'lordchaos',
            password: 'akjsdhfjudasf'

        });
        //skill number 3 corresponds to Vocabulary skill
        var SKILL_NUMBER = 3;
        newAuthor.save().then(function () {
            Author.findOne({ name: 'Arnold' }).then(function (result) {

                result.skills[SKILL_NUMBER - 1].skillValue += 1;

                result.save().then(function () {
                    Author.findOne({ name: 'Arnold' }).then(function (result) {
                        assert(result.skills[SKILL_NUMBER - 1].skillValue === 3);
                        assert(result.skills[SKILL_NUMBER - 1].skillName === 'Vocabulary');
                        done();
                    });
                });


            });

        });
    });

});