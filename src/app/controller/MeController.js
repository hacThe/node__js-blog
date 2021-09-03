const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ConvertToOpenObject = require('../../util/mongoose');
const course = require('../models/course');
const Course = require('../models/course')

class MeController {
    storedCourse(req, res, next){
        Course.find({}).lean()
        .then(course => res.render('me/stored-courses', {course}))
        .catch(next);
    }

    deletedCourse(req, res, next){
        Course.findDeleted({}).lean()
        .then(course => res.render('me/deleted-courses', {course}))
        .catch(next);
    }

    
}

module.exports = new MeController();
