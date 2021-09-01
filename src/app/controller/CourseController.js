const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Course = require('../models/course');
const ConvertToOpenObject = require('../../util/mongoose');
const course = require('../models/course');

class CourseController {
    // GET /news
    show(req, res, next){
        Course.findOne({
            slug: req.params.slug }).lean().then(course =>{
                res.render('course/show', {course});
            }).catch(next);
        

    }

    create(req,res,next){
            res.render('course/create');
    }


    store(req,res,next){
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoid}/sddefault.jpg`;
        const newCourse = new Course(formData);
        newCourse.save().then(()=> res.redirect('/'))
        .catch(error => {
            
        })
    }
}

module.exports = new CourseController();
