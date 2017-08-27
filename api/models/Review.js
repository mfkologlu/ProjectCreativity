var mongoose = require('mongoose');
var ReviewSchema = new mongoose.Schema({
    reviewer: {
        type: String
    },
    dateOfCreation: {
        type: Date
    },
    creativitySkill: {
        type: Number
    },
    grammarSkill: {
        type: Number
    },
    vocabularySkill: {
        type: Number
    },
    dialogueSkill: {
        type: Number
    },
    depictionSkill: {
        type: Number
    },
    review: {
        type: String,
        maxlength: 200
    }
});
mongoose.model('Review', ReviewSchema);
module.exports = mongoose.model('Review');