const createError = require('http-errors')

// 404 not found handler
function notFoundHandler(req, res, next) {
    next(createError(404, 'Your requested content was not found'))
}

// Default error handler
function defaultErrorHandler(err, req, res, next) {
    // res.locals.err = process.env.NODE_ENV === 'development' ? err : {message: err.message}

    res.locals.error = err

    res.status(err.status || 500)

    if(res.locals.html) {
        res.render('error', {
            title: 'Error Page'
        })
    } else {
        res.json(res.locals.error)
    }
}

module.exports = {
    notFoundHandler,
    defaultErrorHandler
}