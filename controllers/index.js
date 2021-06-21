const router = require('express').Router()

// api/database routes
router.use('/api', require('./user-routes.js'))
router.use('/api', require('./post-routes.js'))
router.use('/api', require('./comment-routes.js'))

// front end routes
router.use('/', require('./view-routes.js'))

module.exports = router
