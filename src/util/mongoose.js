module.exports = {
    multipleMongoosetoOject: function (mongoose) {
        return mongoose.map(mongoose => mongoose.toObject())
    },
    mongooseToObject: function (mongoose) {   //có 1 document 
        return mongoose ? mongoose.toObject() : mongoose
    }

}