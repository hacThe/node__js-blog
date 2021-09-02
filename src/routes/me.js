var express = require('express');
const MeController = require('../app/controller/MeController');
var router = express.Router();

// newsController.index
router.get('/stored/courses', MeController.storedCourse);
module.exports = router;
