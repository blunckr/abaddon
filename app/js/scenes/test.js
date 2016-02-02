'use strict';

const rb = require('../data/tiles').rockBrown;
const nu = null;
exports.testScene = () =>({
  tiles: [
    [rb, rb, rb],
    [rb, nu, rb],
    [rb, rb, rb]
  ],
  entities: [

  ],
});
