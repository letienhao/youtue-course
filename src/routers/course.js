
const express = require('express');
const courseController = require('../app/controllers/courseController');
const router = express.Router()

router.get('/Addnew', courseController.Add)
router.post('/store', courseController.store)
router.post('/handle-form-action', courseController.handleformaction)
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.get('/:id/edit', courseController.edit);
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.Forcedestroy);
router.get('/:slug', courseController.show)


module.exports = router
