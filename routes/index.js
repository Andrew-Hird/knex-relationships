var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  get: get,
  getProfiles: getProfiles
}

function get (req, res) {
  knex('users')
    .select()
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function getProfiles (req, res) {
  knex('users')
  .join('profiles', 'users.id', '=', 'profiles.user_id')
  .select('users.id', 'users.name', 'profiles.profilePic as pic', 'users.email', 'profiles.URL')
  .where('users.id', '=', req.params.id)
  .then(function (users) {
    res.render('profile', {user: users[0]})
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}
