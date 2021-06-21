// external imports
const express = require('express')

// internal imports
const {getLogin} = require('../controller/loginController')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')

const router = express.Router()


// Login Page
router.get('/', decorateHtmlResponse('Login'), getLogin)

module.exports = router