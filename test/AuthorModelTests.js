var assert=require('assert');
var Author = require('../api/models/Author');

describe('Author Model test suite', function () {
   
    it('Create a new author', function (done) {

        var arnold = new Author({
            name: 'Arnold',
            lastname: 'Asllani',
            username: 'lordchaos',
            password: 'akjsdhfjudasf'

        });

        arnold.save().then(function () {
            assert(!arnold.isNew);
            assert(arnold.skills.length==14);
            done();
        });

    });


});