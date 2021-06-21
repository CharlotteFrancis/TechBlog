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

// comment
router.get('/posts/:id', (req, res) => {
  // res.render with post
  res.render('comment', { cid: req.params.id })
})

router.get('/dashboard', (req, res) => {
  // params here should be an array of all blog posts
  // res.render('all', >>params<<)

  res.render('all')
})

router.get('/*', (req, res) => {
  // params here should be an array of all blog posts
  // res.render('all', >>params<<)

  res.render('home')
})

module.exports = router
