
const express = require('express');
const router = express.Router()
const newcontrollers = require('../app/controllers/newscontrolller')

router.get('/:slug', newcontrollers.show)
router.get('/', newcontrollers.index);


module.exports = router
