
const express = require('express');
const courseController = require('../app/controllers/courseController');
const router = express.Router()

router.get('/Addnew', courseController.Add)
router.post('/store', courseController.store)
router.put('/:id', courseController.update);
router.get('/:id/edit', courseController.edit);
router.delete('/:id', courseController.destroy);
router.get('/:slug', courseController.show)


module.exports = router
