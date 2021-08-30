const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Course = require('../models/course');

class SiteController {
    // GET /news
    index(req, res) {
        Course.find({}, function (err, course){
            if (!err) res.json(course);
            else res.status(400).json({error : 'Errorrrrr!!'});
        });
       // res.render('home');
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
