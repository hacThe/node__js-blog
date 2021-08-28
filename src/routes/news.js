var express = require('express');
const NewsController = require('../app/controller/NewsController');
var router = express.Router();

const newController = require('../app/controller/NewsController')
// newsController.index

router.use('/:slog', NewsController.show);
router.use('/', newController.index);
module.exports = router;