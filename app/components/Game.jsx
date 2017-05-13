import React, {Component } from 'react';

const Game = (props) => {
  //this is our stateless React component
  const theBlocks = props.level;
  const theGrass = findObjects(theBlocks.blocks, "grass");
  const theRocks = findObjects(theBlocks.blocks, "rock");
  const theLava = findObjects(theBlocks.blocks, "lava");
  const theEnemys = findObjects(theBlocks.blocks, "enemy");
  const theWater = findObjects(theBlocks.blocks, "water");


  const startPoint = findObjects(theBlocks.blocks,'start')[0]

  return (
    <div > {startPoint ? (startGame(startPoint, theGrass, theRocks, theLava, theEnemys, theWater)): null }</div>
  )

}
export default Game;

//__________________________________________________________
var playGame = true;
//_________________________________________________________
var myGamePiece;
var ctx;
var grassArr;
var waterArr;
var lavaArr;
var rockArr;

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 600;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            e.preventDefault();
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
    },
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, player) {

    this.width = width;
    this.height = height;
    this.speed = 0;
    this.angle = 0;
    this.moveAngle = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        if (!playGame && !player){
            var base_image = new Image();
            base_image.src = '/terrain/grass1.png';
            base_image.onload = function(){
            ctx.drawImage(base_image, x, y, 30, 30);
          }
        }
        else{
          ctx.fillStyle = color;
          ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);}       
          ctx.restore();    
    }
    this.newPos = function() {
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
    }
}

function updateTerrain(arr){
  arr.forEach((terrain)=>{
    terrain.update();
  })
}

function updateGameArea() {
    myGameArea.clear(); //toggle this create still image 
    
    myGamePiece.moveAngle = 0;
    myGamePiece.speed = 0;
    if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.moveAngle = -2; }
    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.moveAngle = 2; }
    if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speed= 2; }
    if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speed= -2; }
    const terrain = [...grassArr,...waterArr, ...lavaArr,...rockArr ]
    
    updateTerrain(terrain);
    myGamePiece.newPos();
    myGamePiece.update();

    }
function renderType(arr, type){
  var typeArr = [];
  arr.forEach((block)=>{
    var newEl = new component (30,30,type, block.yCoor*30, block.xCoor*30)
    typeArr.push(newEl)
  })
  return typeArr
}
function startGame(block,...rest) {
    //const {grass, rocks, lava, enemy, water} = rest;

    myGamePiece = new component( 30, 30, 'grey', block.yCoor * 30, block.xCoor * 30, true);
    grassArr = renderType(rest[0], 'green');
    waterArr = renderType(rest[4], 'blue');
    rockArr = renderType(rest[1], 'brown');
    lavaArr = renderType(rest[2], 'red');

    myGameArea.start();
}

function findObjects(blocks, type){
  const objArr = blocks.filter((block) => {
    return block.terrainType === type
  })
  return objArr;
}


