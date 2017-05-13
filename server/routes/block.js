const db = require('../../db')
const router = require('express').Router();
const Sequelize = require('sequelize');
const Block = require('../../db/models').Block;
module.exports = router;
router.post('/block', (req, res, next) => {
  const coor = req.body.id.split(',');

  Block.findOrCreate({
    where:{
      terrainType: req.body.type,
      xCoor: +coor[0],
      yCoor: +coor[1],
      sceneId: req.body.level
    }, 
  defaults: {terrainType: req.body.type,
      xCoor: +coor[0],
      yCoor: +coor[1]},
      sceneId: req.body.level,
    })
  .then((block) => {
    res.send(block);
  })
})
