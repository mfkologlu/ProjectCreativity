var mongoose = require('mongoose');

var myUri='mongodb://demo-user:123456789@ds159953.mlab.com:59953/creativity-db';

// Using `mongoose.connect`...
var promise = mongoose.connect(myUri, {
  useMongoClient: true
});
