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
    speedY: 50,
    speedX: 0,
    img: marioPlayers,
    tick: (entity, entities, tiles, buttons, delta) => {
      var index, nextXTiles, nextYTiles;

      entity.speedX += entity.accX * delta;
      entity.speedY += entity.accY * delta;
      if(_.includes(buttons, 'LEFT')){
        entity.speedX = -50;
      } else if (_.includes(buttons, 'RIGHT')){
        entity.speedX = 50;
      } else {
        entity.speedX = 0;
      }

      if(_.includes(buttons, 'SPACE')){
        entity.speedY = -100;
        entity.accY = 300;
      }

      var nextX = entity.x + entity.speedX * delta;
      var nextY = entity.y + entity.speedY * delta;

      var right = entity.x + entity.width - 1;
      var bottom = entity.y + entity.height - 1;

      var gridLeft = gridPosX(entity.x);
      var gridRight = gridPosX(right);

      var gridTop = gridPosY(entity.y);
      var gridBottom = gridPosY(bottom);

      if(entity.speedX != 0){
        var topTiles = tiles[gridTop];
        var bottomTiles = tiles[gridBottom];

        var allXTiles;
        if(topTiles != bottomTiles){
          allXTiles = [topTiles, bottomTiles];
        } else {
          allXTiles = [topTiles];
        }
        if(entity.speedX > 0){
          nextXTiles = _.map(allXTiles, (row)=>{
            index = _.findIndex(row, (tile, i)=>(tile !== null && i > gridRight));
            return (index - 1) * dWidth; // subtract one width to get the top of the tile
          });
          entity.x = _.min(_.concat([nextX], nextXTiles));
        } else {
          nextXTiles = _.map(allXTiles, (row)=>{
            index = _.findIndex(row, (tile, i)=>(tile !== null && i < gridLeft));
            return (index + 1) * dWidth;
          });
          entity.x = _.max(_.concat([nextX], nextXTiles));
        }
      }

      if(entity.speedY != 0){
        var leftTiles = _.map(tiles, gridLeft);
        var rightTiles = _.map(tiles, gridRight);

        var allYTiles;
        if(leftTiles != rightTiles){
          allYTiles = [leftTiles, rightTiles];
        } else {
          allYTiles = [leftTiles];
        }
        if(entity.speedY > 0) {
          nextYTiles = _.map(allYTiles, (row)=>{
            index = _.findIndex(row, (tile, i)=>(tile !== null && i > gridBottom));
            return (index - 1) * dHeight;
          });
          entity.y = _.min(_.concat([nextY], nextYTiles));
        } else {
          nextYTiles = _.map(allYTiles, (row)=>{
            index = _.findIndex(row, (tile, i)=>(tile !== null && i < gridTop));
            return (index + 1) * dHeight;
          });
          entity.y = _.max(_.concat([nextY], nextYTiles));
        }
      }
      return entity;
    }
  };
  return Object.assign({}, defaults, player, params);
};
