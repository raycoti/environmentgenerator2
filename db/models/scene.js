'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


const Scene = db.define('scene', {
  name: {
    type: Sequelize.STRING
  }
})


module.exports = Scene;
