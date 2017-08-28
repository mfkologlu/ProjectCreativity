var mongoose = require('mongoose');


mongoose.Promise = global.Promise;

before(function (done) {

    var databaseConnectionUrl = 'mongodb://demo-user:123456789@ds159953.mlab.com:59953/creativity-db';
    mongoose.connect(databaseConnectionUrl, {
        useMongoClient: true
    });

    mongoose.connection.once('open', function () {
        console.log('Connected sucessfully to database');
        done();
    }).on('error', function (error) {
        console.warn('Error', error);
    });
});


