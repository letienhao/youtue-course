const { mongooseToObject } = require("../../util/mongoose");
const Course = require("../models/Course");


class Coursecontrollers {
    //[GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => res.render('courses/detail',
                { course: mongooseToObject(course) }
            ))
            .catch(next)
    }
    //[GET] /course/Addnew
    Add(req, res, next) {
        res.render('courses/NewCourse')
    }
    // [POST] /course/store
    store(req, res, next) {
        // const images = req.body.image
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
        course.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`;
        // const id = req.params.id
        Course.updateOne({ _id: req.params.id }, course)
            .then(() => res.redirect('/'))
            .catch(next)
    }
    //[DELETE] /course/:id    //xóa mềm dùng delete
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[patch] /course/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    Forcedestroy(req, res, next) { // xóa thật
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    // [post] //coutser/handle-form-action
    handleformaction(req, res, next) {  //xử lý form
        // console.log(req.body.action)
        // console.log({ $in: req.body.courseIds })

        switch (req.body.action) {
            case "delete":
                Course.delete({ _id: { $in: req.body.courseIds } })  //sử dụng cú pháp where in tron mongoose %in
                    .then(() => res.redirect('back'))
                    .catch(next)
                break;
            default:
                res.json({ message: "action is not select!!!" });
        }

    }

};
module.exports = new Coursecontrollers;