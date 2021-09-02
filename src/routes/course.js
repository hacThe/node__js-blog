var express = require('express');
const CourseController = require('../app/controller/CourseController');
var router = express.Router();

const courseController = require('../app/controller/CourseController');
// newsController.index
router.get('/create', CourseController.create);
router.post('/store', CourseController.store);
router.get('/:id/edit', CourseController.edit);
router.get('/:id/update', CourseController.update);
router.get('/:slug', CourseController.show);
router.get('/', CourseController.show);
module.exports = router;
