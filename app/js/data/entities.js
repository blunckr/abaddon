'use strict';
const {marioPlayers} = require('./sprite_sheets');

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

exports.player = (params) => {
  var player = {
    spriteX: 80,
    spriteY: 32,
    height: 16,
    width: 16,
    img: marioPlayers,
    tick: (entity, entities, tiles, delta) => {
      entity.speedX += entity.accX * delta;
      entity.speedY += entity.accY * delta;
      entity.x += entity.speedX * delta;
      entity.y += entity.speedY * delta;
      return entity;
    }
  };
  return Object.assign({}, defaults, player, params);
};
