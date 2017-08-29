var mongoose = require('mongoose');


//Embedded score schema for Review
var ScoreSchema = new mongoose.Schema({
  scoreSkillNumber: {
    type: Number,
    enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    required: true
  },
  scoreSkillValue: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  }
});

var ReviewSchema = new mongoose.Schema({
  reviewerAuthorId: {
    type: String,
    required: true,
    default: null
  },
  scores: {
    type: [ScoreSchema],
    required: true
  },
  comment: {
    type: String,
    required: false
  },
  isAnonymous: {
    type: Boolean,
    default: true
  }
});

var SequelSchema = new mongoose.Schema({
  isSequel: {
    type: Boolean,
    default: false
  },
  sequelBookId: {
    type: String,
    default: null
  }
});

var BookSchema = new mongoose.Schema({
  authorId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  sequel: {
    type: SequelSchema,
    required: false,
    default: null
  },
  storyType: {
    type: String,
    enum: ['short-story', 'story', 'novel'],
    required: true,
    default: 'short-story'
  },
  genre: {
    type: String,
    enum: ['Drama', 'Horror', 'Fantasy', 'Sci-Fi', 'Mystery', 'Poetry', 'Romance'],
    required: true
  },
  text: {
    type: String,
    required: true,
    min: function () {
      if (this.storyType === 'short-story')
        return 400;
      else if (this.storyType == 'story')
        return 800;
      else if (this.storyType === 'novel')
        return 1400;
      else
        return 400;
    },
    max: function () {
      if (this.storyType === 'short-story')
        return 400;
      else if (this.storyType == 'story')
        return 1000;
      else if (this.storyType === 'novel')
        return 1800;
      else
        return 400;
    }
  },
  reviews: {
    type: [ReviewSchema],
    required: false
  },
  readCounter: {
    type: Number,
    default: 0
  },
  isDraft: {
    type: Boolean,
    default: true
  }

});
mongoose.model('Book', BookSchema);
module.exports = mongoose.model('Book');