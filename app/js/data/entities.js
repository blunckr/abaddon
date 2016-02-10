'use strict';
const {marioPlayers} = require('./sprite_sheets');

exports.player = () => ({
  x: 80,
  y: 32,
  height: 16,
  width: 16,
  img: marioPlayers
});
