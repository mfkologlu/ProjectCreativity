//An array of default skill objects used for creation of every Author
var skillTypeWriting = ['Creativity', 'Grammar', 'Vocabulary', 'Depiction', 'Dialogue'];
var skillTypeGenre = ['Drama', 'Horror', 'Fantasy', 'Sci-fi', 'Mystery', 'Poetry', 'Romance', 'A&A', 'Satire'];

var defaultSkills = [];

var skillId = 0;
for (var writingSkill of skillTypeWriting) {

    ++skillId;
    var newSkill = {
        skillNumber: skillId,
        skillType: 'writting',
        skillName: writingSkill,
        skillLevel: 'Newb',
        skillValue: 0,
        skillTitle: 'None'
    };

    defaultSkills.push(newSkill);
}

for (var genreSkill of skillTypeGenre) {

    ++skillId;
    var newSkill = {
        skillNumber: skillId,
        skillType: 'genre',
        skillName: genreSkill,
        skillLevel: 'Newb',
        skillValue: 0,
        skillTitle: 'None'
    };

    defaultSkills.push(newSkill);
}

module.exports = defaultSkills;