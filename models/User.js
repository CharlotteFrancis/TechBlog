// passport local sequelize
const pls = require('passport-local-sequelize')
// sequelize conenction
const { DataTypes } = require('sequelize')
const sequelize = require('../db')

// declare user with pls defineUser, pass it the sequelize connection and
// an object that defines the structure.
const User = pls.defineUser(sequelize, {
  // structure empty because pls gives the username and id
})

// export User
module.exports = User
