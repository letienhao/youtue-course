const { multipleMongoosetoOject } = require("../../util/mongoose");
const course = require("../models/Course");

class Mecontroller {
    //[get] /me/stored/course
    async storedCourse(req, res, next) {
        await course.find({})
            .then(course => res.render('me/stored-course', {
                course: multipleMongoosetoOject(course)
            }))
            .catch(next)
    }


}
module.exports = new Mecontroller