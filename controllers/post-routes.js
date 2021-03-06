const router = require('express').Router()
const { Post, Comment } = require('../models')
const passport = require('passport')

// get all the users posts
router.get('/posts', passport.authenticate('jwt'), (req, res) => {
  res.json(req.user.posts) // gets all posts of the user
  // res.sendStatus(200)
})

// get all the posts
router.get('/posts/all', passport.authenticate('jwt'), (req, res) => {
  Post.findAll()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json(err))
})

// get post by id
router.get('/posts/:id', passport.authenticate('jwt'), (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    include: [
      { model: Comment }
    ]
  })
    .then(post => res.json(post))
    .catch(err => res.status(400).json(err))
})

// create a new post
router.post('/posts', passport.authenticate('jwt'), (req, res) => Post.create({
  title: req.body.title,
  text: req.body.text,
  uid: req.user.id
})
  .then(post => res.json(post))
  .catch(err => console.log(err))
)

// update a post
router.put('/posts/:id', passport.authenticate('jwt'), (req, res) => {
  Post.update(
    req.body,
    { where: { id: req.params.id } }
  )
    .then(() => res.sendStatus(200))
    .catch(err => res.status(400).json(err))
})

// delet a post
router.delete('/posts/:id', passport.authenticate('jwt'), (req, res) => {
  Post.destroy(
    { where: { id: req.params.id } }
  )
    .then(() => res.sendStatus(200))
    .catch(err => res.status(400).json(err))
})

module.exports = router
