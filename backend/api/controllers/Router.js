var router = require('express').Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
module.exports = router;