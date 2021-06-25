// external imports
const express = require('express')

// internal imports
const {getUsers, addUser, removeUser} = require('../controller/usersController')
const { checkLogin } = require('../middlewares/common/checkLogin')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')
const avatarUpload = require('../middlewares/users/avatarUpload')
const { addUserValidators, addUserValidationHandler } = require('../middlewares/users/userValidators')

const router = express.Router()

// Users page
router.get('/', decorateHtmlResponse('Users'), checkLogin, getUsers)

// Add user 
router.post('/', avatarUpload, addUserValidators, addUserValidationHandler, addUser)

// Remove user
router.delete('/:id', removeUser)



module.exports = router