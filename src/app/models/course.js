const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({
    name: {type: String, required : true},
    description: {type: String},
    thumbnail: {type: String,},
    videoid: {type: String, required: true},
    level: {type: String, },
    slug: { type: String, slug: "name", unique: true }
}, {
    timestamps: true
})

mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: 'all', deleteAt: true});



module.exports = mongoose.model('Course', Course);