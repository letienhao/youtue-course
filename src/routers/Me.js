
const express = require('express');
const router = express.Router()
const mecontroller = require('../app/controllers/Mecontroller')

router.get('/stored/courses', mecontroller.storedCourse)


module.exports = router
