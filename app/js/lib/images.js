'use strict';

const _ = require('lodash');
const images = require('../data/sprite_sheets.js');
var cache = {};

exports.loadImages = ()=>{
  const promises = _.map(images, (url)=>{
    return new Promise((resolve, reject)=>{
      const img = new Image();
      cache[url] = img;
      img.onload = ()=>{
        resolve();
      };
      img.src=url;
    });
  });
  return Promise.all(promises);
};

exports.getImage = (url)=>{
  return cache[url];
};
