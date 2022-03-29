const { multipleMongoosetoOject } = require("../../util/mongoose");
const course = require("../models/Course");

class Sitecontroller {
    //[get] 
    index(req, res, next) {
        course.find({})
            .then(course => res.render('home',
                {
                    course: multipleMongoosetoOject(course)
                }
            ))
            .catch(next)


    }

}
module.exports = new Sitecontroller