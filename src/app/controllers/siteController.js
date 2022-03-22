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
    //[get] 
    search(req, res) {
        res.render('search')
    }
}
module.exports = new Sitecontroller