'use strict';
const _ = require('lodash');
const {marioPlayers} = require('./sprite_sheets');
const {dHeight, dWidth} = require('../view');

const defaults = {
  x: 0,
  y: 0,
  height: 0,
  width: 0,
  img: null,
  speedX: 0,
  speedY: 0,
  accX: 0,
  accY: 0,
  spriteX: 0,
  spriteY: 0,
  tick: null
};

const gridPosY = (pixel) => (parseInt(pixel / dHeight));
const gridPosX = (pixel) => (parseInt(pixel / dWidth));

exports.player = (params) => {
  var player = {
    spriteX: 80,
    spriteY: 32,
    height: 16,
    width: 16,
    speedY: 0,
    speedX: 10,
    img: marioPlayers,
    tick: (entity, entities, tiles, delta) => {
      var index;
      var nextX = entity.x + entity.speedX * delta;
      var nextY = entity.y + entity.speedY * delta;

      var right = nextX + entity.width - 1;
      var gridRight = gridPosX(right);
      var bottom = nextY + entity.height - 1;

      var topTiles = tiles[gridPosY(entity.y)];
      var bottomTiles = tiles[gridPosY(bottom)];

      var allXTiles;
      if(topTiles != bottomTiles){
        allXTiles = [topTiles, bottomTiles];
      } else {
        allXTiles = [topTiles];
      }
      if(entity.speedX > 0){
        var nextXTiles = _.map(allXTiles, (row)=>{
          index = _.findIndex(row, (tile, i)=>(tile !== null && i > gridRight));
          return index * dWidth;
        });
        entity.x = _.min(_.concat([nextX], nextXTiles));
      }
      // entity.speedX += entity.accX * delta;
      // entity.speedY += entity.accY * delta;
      // entity.x += entity.speedX * delta;
      entity.y += entity.speedY * delta;
      return entity;
    }
  };
  return Object.assign({}, defaults, player, params);
};
