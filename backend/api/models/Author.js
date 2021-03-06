var mongoose = require('mongoose');
var defaultSkills = require('../utils/DefaultSkills');

//Embedded skill schema for Author
var SkillSchema = new mongoose.Schema({
    skillNumber: Number,
    skillType: String,
    skillName: String,
    skillLevel: String,
    skillValue: Number,
    skillTitle: String
});

var AuthorSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    username: String,
    password: String,
    skills: {
        type: [SkillSchema],
        default: defaultSkills
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    isCritic: {
        type: Boolean,
        default: false
    }
});

mongoose.model('Author', AuthorSchema);

module.exports = mongoose.model('Author');