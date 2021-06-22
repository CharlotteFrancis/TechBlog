const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const db = require('../db')

// code from 07-day-04
// create a new user
router.post('/users/register', (req, res) => {
  const { username } = req.body
  User.register(new User({ username }), req.body.password, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

// login a user
router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.log(err) }
    res.json(user ? jwt.sign({ id: user.id }, process.env.SECRET) : null)
  })
})

// get user
router.get('/users/:id', passport.authenticate('jwt'), (req, res) => {
  User.findOne({ where: { id: req.params.id } })
    .then(user => res.json(user))
    .catch(err => console.log(err))
})

module.exports = router
