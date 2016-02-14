'use strict';

const tiles = require('../data/tiles');
const {player} = require('../data/entities');

const rb = tiles.rockBrown();
const bl = tiles.rockBlue();
const nu = null;
exports.testScene = () =>({
  name: 'TEST_SCENE',
  tiles: [
    [rb, nu, nu, nu, nu, nu, bl, bl],
    [rb, nu, nu, nu, nu, nu, rb, rb],
    [rb, rb, rb, rb, rb, rb, rb, rb],
    [rb, rb, rb, rb, rb, rb, rb, rb]
  ],
  entities: [
    player({x: 16, y: 1})
  ],
  background: '#9290FF'
});
