'use strict';
const _ = require('lodash');

const {loadImage} = require('./images');

exports.loadScene = (scene, sceneLoading, sceneLoaded) => {
  sceneLoading(scene.name);
  const promises = _.chain(scene.tiles)
    .flatten()
    .compact()
    .map((tile)=>tile.img)
    .uniq()
    .map((img)=>loadImage(img))
    .value();
  Promise.all(promises).then(()=> sceneLoaded(scene.name));
};
