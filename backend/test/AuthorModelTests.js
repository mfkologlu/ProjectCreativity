var assert = require('assert');
var Author = require('../api/models/Author');
var DefaultSkills = require('../api/utils/DefaultSkills');

describe('Author Model test suite', function () {
    function makeAuthor() {
        var newAuthor = new Author({
            name: 'name',
            lastname: 'lastname',
            username: 'user_name',
            password: 'password'

        });

        return newAuthor;
    }

    it('Create a new author', function (done) {
        var newAuthor = makeAuthor();
        newAuthor.save().then(function () {
            assert(!newAuthor.isNew);
            assert(newAuthor.skills.length == DefaultSkills.length);
            done();
        });
    });

    it('Find one author by Name', function (done) {
        var newAuthor = makeAuthor();
        newAuthor.save().then(function () {
            Author.findOne({ name: 'name' }).then(function (result) {
                assert(result.name === 'name');
                assert(result.skills.length === DefaultSkills.length);
                done();
            });
        });
    });

    it('Find one author by ID', function (done) {
        var newAuthor = makeAuthor();
        newAuthor.save().then(function () {
            Author.findOne({ _id: newAuthor._id }).then(function (result) {
                assert(result.name === newAuthor.name);
                assert(result.skills.length === DefaultSkills.length);
                done();
            });
        });
    });

    it('Delete an author', function (done) {
        var newAuthor = makeAuthor();
        newAuthor.save().then(function () {
            Author.findOneAndRemove({ name: newAuthor.name }).then(function () {
                Author.findOne({ name: newAuthor.name }).then(function (result) {
                    assert(result === null);
                    done();
                });
            });
        });
    });

    it('Update author attributes', function (done) {
        var newAuthor = makeAuthor();
        newAuthor.save().then(function () {
            Author.findOneAndUpdate({ name: newAuthor.name }, { lastname: 'Anonymous', username: 'lordkronos' }).then(function () {
                Author.findOne({ name: newAuthor.name }).then(function (result) {
                    assert(result.lastname === 'Anonymous');
                    assert(result.username === 'lordkronos');
                    done();
                });
            });
        });
    });

    it('Update author skills by skillNumber', function (done) {
        var newAuthor = makeAuthor();
        newAuthor.save().then(function () {
            Author.findOne({ name: newAuthor.name }).then(function (result) {
                result.skills[0].skillValue += 1;
                result.save().then(function () {
                    Author.findOne({ name: newAuthor.name }).then(function (result) {
                        assert(result.skills[0].skillValue === 1);
                        assert(result.skills[0].skillName === DefaultSkills[0].skillName);
                        done();
                    });
                });
            });
        });
    });
});