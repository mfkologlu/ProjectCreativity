var mongoose = require('mongoose');
var AuthorSchema = new mongoose.Schema({
    name: {
        type: String
    },
    dateOfCreation: {
        type: Date
    },
    creativitySkill: {
        type: Number
    },
    creativityTitle: {
        type: String
    },
    grammarSkill: {
        type: Number
    },
    grammarTitle: {
        type: String
    },
    vocabularySkill: {
        type: Number
    },
    vocabularyTitle: {
        type: String
    },
    dialogueSkill: {
        type: Number
    },
    dialogueTitle: {
        type: String
    },
    depictionSkill: {
        type: Number
    },
    depictionTitle: {
        type: String
    }
    // TODO: Add genre skills.
});
mongoose.model('Author', AuthorSchema);
module.exports = mongoose.model('Author');