'use strict';

const tiles = require('../data/tiles');
const {player} = require('../data/entities');

const rb = tiles.rockBrown();
const bl = tiles.rockBlue();
const nu = null;
exports.testScene = () =>({
  name: 'TEST_SCENE',
  tiles: [
    [nu, bl, nu],
    [nu, nu, nu],
    [rb, rb, rb]
  ],
  entities: [
    player({x: 0, y: 0})
  ],
  background: '#9290FF'
});
