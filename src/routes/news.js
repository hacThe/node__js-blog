var express = require('express');
const NewsController = require('../app/controller/NewsController');
var router = express.Router();

const newController = require('../app/controller/NewsController');
// newsController.index

router.get('/:slog', NewsController.show);
router.get('/', newController.index);
module.exports = router;
