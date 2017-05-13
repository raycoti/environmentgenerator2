const db = require('../../db')
const router = require('express').Router();
const Sequelize = require('sequelize');
const Message = require('../../db/models').Message;
router.get('/messages', (req, res, next) => {
  Message.findAll({})
  .then((response) => {
    res.send(response)});
})

module.exports = router;
