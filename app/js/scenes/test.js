'use strict';

const rb = require('../data/tiles').rockBrown();
const nu = null;
exports.testScene = () =>({
  name: 'TEST_SCENE',
  tiles: [
    [rb, rb, rb],
    [rb, nu, rb],
    [rb, rb, rb]
  ],
  entities: [],
  background: '#9290FF'
});
