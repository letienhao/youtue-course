
const express = require('express');
const router = express.Router()
const mecontroller = require('../app/controllers/Mecontroller')

router.get('/stored/courses', mecontroller.storedCourse)
router.get('/trash/courses', mecontroller.trashCourse)



module.exports = router
