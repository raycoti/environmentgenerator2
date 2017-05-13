const db = require('../../db')
const router = require('express').Router();
const Sequelize = require('sequelize');
const Scene = require('../../db/models').Scene;
const Block = require('../../db/models').Block;
const Promise = require('bluebird');
//const Block = require('../db/models').Block;
module.exports = router;
//include: [Block]
router.get('/scenes', (req, res, next) => {
  Scene.findAll({})
  .then((response) => {
    res.send(response)
  })
})

router.get('/scene/:id', (req, res, next) => {
  Scene.findOne({
    where: { id: req.params.id},
    include: [Block]
  })
  .then((level) => {
    res.send(level)
  })
})

router.post('/scene', (req, res, next)=>{
  const name = req.body.name;
  Scene.findOrCreate({
    where: req.body,
    defaults: req.body
  }
  )
  .then((scene)=> {
    res.send(scene)}
    );
  //const blocks = req.body.blocks;
  //Promise.map((blocks)=>{
    //return block.create
  //})
  //res.send('gnarly');
//   Scene.create({
//     where: {
//       name: req.body.name
//     }
//   })
//   .then((ress) => {
//     console.log(ress);
//     res.send(ress)//do associations)
// })
})
//BELOW WOULD BE HOW TO MAKE IT SO THAT THINGS BELONG TO STUFF

// /wiki
// router.post('/', function (req, res, next) {

//     User.findOrCreate({
//             where: {
//                 name: req.body.name,
//                 email: req.body.email
//             }
//         })
//         .spread(function (user, createdPageBool) {
//             return Page.create(req.body)
//                 .then(function (page) {
//                     return page.setAuthor(user);
//                 });
//         })
//         .then(function (page) {
//             res.redirect(page.route);
//         })
//         .catch(next);

// });