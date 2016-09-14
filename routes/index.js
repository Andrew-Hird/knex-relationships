var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  get: get,
  getProfiles: getProfiles,
  newUser: newUser
}

function get(req, res) {
  knex('users')
    .select()
    .then(function (users) {
      res.render('index', {
        users: users
      })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function getProfiles(req, res) {
  knex('users')
    .join('profiles', 'users.id', '=', 'profiles.user_id')
    .select('users.id', 'users.name', 'profiles.profilePic as pic', 'users.email', 'profiles.URL')
    .where('users.id', '=', req.params.id)
    .then(function (users) {
      res.render('profile', {
        user: users[0]
      })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function newUser(req, res) {
  var userDetails = {
    name: req.body.name,
    email: req.body.email,
    url: req.body.url,
    profilePic: req.body.profilePic
  }

  knex('users')
    .insert({
      name: userDetails.name,
      email: userDetails.email
    })
    .then(function (ids) {
      return knex('profiles')
      .insert({
        user_id: ids[0],
        URL: userDetails.url,
        profilePic: userDetails.profilePic
      })
    })

    .then(function (data) {
      res.redirect('/')
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}
