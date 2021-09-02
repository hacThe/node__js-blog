const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Course = require('../models/course');
const ConvertToOpenObject = require('../../util/mongoose');
const course = require('../models/course');
const { render } = require('node-sass');

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
        req.body.thumbnail = `https://img.youtube.com/vi/${req.body.videoid}/sddefault.jpg`;
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }

    edit(req, res, next){
        Course.findById(req.params.id).lean()
        .then(course => {
            res.render('course/edit', {course});
        }).catch(next);

    }

    update(req, res, next){
        Course.findById(req.params.id).lean()
        .then(course => {
            res.render('course/edit', {course});
        }).catch(next);

    }

    
}

module.exports = new CourseController();
