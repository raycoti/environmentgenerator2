'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');

const Block = db.define('block', {
  terrainType: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  xCoor:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  yCoor: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Block;