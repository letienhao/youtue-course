const { multipleMongoosetoOject } = require("../../util/mongoose");
const course = require("../models/Course");

class Mecontroller {
    //[get] /me/stored/course
    storedCourse(req, res, next) {
        course.find({})
            .then(course => res.render('me/stored-course', {
                course: multipleMongoosetoOject(course)
            }))
            .catch(next)

    }
    trashCourse(req, res, next) {
        course.findDeleted({})
            .then(course => res.render('me/trash-course', {
                course: multipleMongoosetoOject(course)
            }))
            .catch(next)
    }



}
module.exports = new Mecontroller