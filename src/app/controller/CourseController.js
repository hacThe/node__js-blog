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
            .then(() => res.redirect('/me/stored/courses'))
            .catch((error) => {});
    }

    edit(req, res, next){
        Course.findById(req.params.id).lean()
        .then(course => {
            res.render('course/edit', {course});
        }).catch(next);

    }

    update(req, res, next){
        Course.updateOne({ _id: req.params.id}, req.body)
        .then(()=> res.redirect('/me/stored/courses'))
        .catch(next);

    }

    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    remove(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // Get gửi yêu cầu lên server yêu cầu trả về dl
    // Post gửi yêu cầu lên server kèm dl
    // put patch chỉnh sửa dữ liệu
    

    
}

module.exports = new CourseController();
