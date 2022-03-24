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
    store(req, res, next) {
        req.body.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`;
        Course(req.body)
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
    //[patch] /course/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[DELETE] /course/:id
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    Forcedestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }


};
module.exports = new Coursecontrollers;