var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(function (done) {
    //Connect to database before running tests
    var databaseConnectionUrl = 'mongodb://demo-user:123456789@ds159953.mlab.com:59953/creativity-db';
    mongoose.connect(databaseConnectionUrl, {
        useMongoClient: true
    });

    mongoose.connection.once('open', function () {
        console.log('Connected sucessfully to test database');
        done();
    }).on('error', function (error) {
        console.warn('Error', error);
    });
});


beforeEach(function(done){
    //drop database collections before each test
    mongoose.connection.collections.authors.drop(function(err){
        
    });
    mongoose.connection.collections.books.drop(function(err){
        done();
    });
});