const db = require('../../db')
const router = require('express').Router();
const Sequelize = require('sequelize');
const User = require('../../db/models').User;

router.get('/users', (req, res, next) => {
  User.findAll({})
  .then((response) => {
    res.send(response);
  })
})

module.exports = router;

