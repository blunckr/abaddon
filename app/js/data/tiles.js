'use strict';
const {marioTiles} = require('./sprite_sheets');

exports.rockBrown = ()=>({
  x: 0,
  y: 0,
  img: marioTiles
});

exports.rockBlue = ()=>({
  x: 0,
  y: 2,
  img: marioTiles
});
