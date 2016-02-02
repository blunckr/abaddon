'use strict';
const _ = require('lodash');

const {loadImage} = require('./image');
const sprites = require('../data/sprite_sheets');

exports.loadScene = (scene) => {
  const promises = _.chain(scene.tiles)
    .flatten()
    .compact()
    .map((tile)=>tile.img)
    .uniq()
    .map((img)=>loadImage(sprites[img]))
    .value();
  return Promise.all(promises);
};
