var express = require('express');
var router = express.Router();

const siteController = require('../app/controller/SiteController')
// newsController.index

router.use('/search', siteController.search);
router.use('/', siteController.index);
module.exports = router;