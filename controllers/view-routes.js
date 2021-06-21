const router = require('express').Router()

router.get('/login', (req, res) => {
  // at login
  res.render('login')
})

router.get('/register', (req, res) => {
  // at register
  res.render('register')
})

router.get('/loading', (req, res) => {
  // at login
  // res.render load screen
})

router.get('/*', (req, res) => {
  // params here should be an array of all blog posts
  // res.render('all', >>params<<)

  res.render('all')
})

module.exports = router
