// const newRouter = require('./news')
const siteRouter = require("./site")
const courseRouter = require('./course')
const meRouter = require('./Me')
function route(app) {
    // app.use('/news', newRouter)
    app.use('/courses', courseRouter)
    app.use('/me', meRouter)
    app.use('/', siteRouter)
}
module.exports = route