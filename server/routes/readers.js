const db = require('../../db')
const router = require('express').Router();
const Sequelize = require('sequelize');
const Reader = require('../../db/models').Reader;
const Message = require('../../db/models').Message;

router.get('/readers', (req, res, next) => {
  Reader.findAll({
    include: []
  })
  .then((response) => {
    res.send(response)
  })
})

router.post('/readers', (req, res, next) => {
  Reader.create(req.body) //reformated later to have proper posts
  .then((response) => {
    res.send(response);
  })
})

module.exports = router;

