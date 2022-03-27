const { multipleMongoosetoOject } = require("../../util/mongoose");
const course = require("../models/Course");

class Mecontroller {
    //[get] /me/stored/course
    storedCourse(req, res, next) {
        Promise.all([course.find({}).sortable(req), course.countDocumentsDeleted()]) //gộp 2 promise với nhau, để truyền đối số deletecount view
            .then(([course, deleteCount]) =>
                res.render('me/stored-course', {
                    deleteCount,
                    course: multipleMongoosetoOject(course)
                }))
            .catch(next)
        // course.countDocumentsDeleted()
        //     .then((deleteCount) => console.log(deleteCount))
        //     .catch(next);
        // course.find({})
        //     .then(course => res.render('me/stored-course', {
        //         course: multipleMongoosetoOject(course)
        //     }))
        //     .catch(next)


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