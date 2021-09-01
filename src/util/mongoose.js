
module.exports = {
    multipleMongooseToObject: function (mongooeseArray) {
        return mongooeseArray.map(mongoose => mongoose.toObject());
    },

    mongooseToObject: function (mongooseObject) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};