// external imports
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const path = require('path')
const cookieParser = require('cookie-parser')


// internal import
const loginRouter = require('./router/loginRouter')
const usersRouter = require('./router/usersRouter')
const inboxRouter = require('./router/inboxRouter')
const {notFoundHandler, defaultErrorHandler} = require('./middlewares/common/errorHandler')


const app = express()

dotenv.config()

// database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Database connection successfull')
})
.catch(err => console.log(err))

// Request parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Set view engine
app.set('view engine', 'ejs')

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Parse cookies 
app.use(cookieParser(process.env.COOKIE_SECRET))

// Routing setup
app.use('/', loginRouter)
app.use('/users', usersRouter)
app.use('/inbox', inboxRouter)

// testing purpose
// app.post('/', avatarUpload, addUserValidators, addUserValidationHandler, addUser)


// 404 not found handler
app.use(notFoundHandler)

// common error handler
app.use(defaultErrorHandler)


app.listen(process.env.PORT, () => {
    console.log(`App listening to port to ${process.env.PORT}`)
})




