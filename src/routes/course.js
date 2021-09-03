var express = require('express');
const CourseController = require('../app/controller/CourseController');
var router = express.Router();

const courseController = require('../app/controller/CourseController');
// newsController.index
router.get('/create', CourseController.create);
router.post('/store', CourseController.store);
router.get('/:id/edit', CourseController.edit);
router.put('/:id', CourseController.update);
router.patch('/:id/restore', CourseController.restore);
router.delete('/:id/remove', CourseController.remove);
router.delete('/:id', CourseController.destroy);
router.get('/:slug', CourseController.show);
router.get('/', CourseController.show);
module.exports = router;
