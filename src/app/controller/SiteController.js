const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Course = require('../models/course');
const ConvertToOpenObject = require('../../util/mongoose');

class SiteController {
    // GET /news
    index(req, res, next) {
        Course.find({}).lean().then(course => {
            console.log('render ra ne');
            // Nếu bỏ .lean() ở trên thì ta có thể tham khảm dòng code dưới, hôm trước chạy được hôm nay lỗi nên mình phải gg để thêm lean
            //course: ConvertToOpenObject.multipleMongooseToObject(course);
            //console.log(course);
            res.render('home', {course})})
        .catch(next);
    }


    

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
