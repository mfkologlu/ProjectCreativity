var mongoose = require('mongoose');
var BookSchema = new mongoose.Schema({
  title: {
    type: String
  },
  genre: {
    type: String
  },

  author: {
    type: String
  }
});
mongoose.model('Book', BookSchema);
module.exports = mongoose.model('Book');