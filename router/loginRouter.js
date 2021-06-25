// external imports
const express = require('express')

// internal imports
const {getLogin, login, logout} = require('../controller/loginController')
const { redirectLoggedIn } = require('../middlewares/common/checkLogin')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')
const { doLoginValidators, doLoginValidationHandler } = require('../middlewares/login/loginValidators')

const router = express.Router()

const page_title = 'Login'

// Login Page
router.get('/', decorateHtmlResponse(page_title), redirectLoggedIn, getLogin)

// Process login
router.post('/', decorateHtmlResponse(page_title), doLoginValidators, doLoginValidationHandler, login)

// Process logout
router.delete('/', logout)

module.exports = router