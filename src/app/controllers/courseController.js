const { mongooseToObject } = require("../../util/mongoose");
const Course = require("../models/Course");


class Coursecontrollers {
    //[GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug }).lean()
            .then(course => res.render('courses/detail', {
                course
            }
                // { course: mongooseToObject(course) }
            ))
            .catch(next)
    }
    //[GET] /course/Addnew
    Add(req, res, next) {
        res.render('courses/NewCourse')
    }
    // [POST] /course/store
    async store(req, res, next) {
        const formdata = req.body;
        formdata.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`
        await Course(formdata)
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
    //[GET] /course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)

            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next)
    }
    //[Put] /course/:id
    update(req, res, next) {
        const course = req.body;
        // const id = req.params.id
        Course.findByIdAndUpdate({ _id: req.params.id }, course)
            .then(() => res.redirect('/'))
            .catch(next)
    }
    //[DELETE] /course/:id
    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

};
module.exports = new Coursecontrollers;