const express = require('express')
const route = express.Router()
const sitecontroller = require('../app/controllers/siteController');

route.get('/', sitecontroller.index);

module.exports = route

