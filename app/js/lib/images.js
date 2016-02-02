'use strict';

const _ = require('lodash');

const cache = {};

exports.loadImage = (url, cb) => {
  return new Promise((resolve, reject)=>{
    if(cache[url]){
      if (cache[url].ready){
        resolve();
      } else {
        cache[url].resolvers.push(resolve);
      }
    } else {
      const img = new Image();
      cache[url] = {
        img: img,
        resolvers: [resolve],
        ready: false
      }
      img.onload = ()=>{
        cache[url].ready = true;
        _.each(cache[url].resolvers, (r) => r());
      };
      img.src=url;
    }
  });
}

exports.getImage = (url) => {
  return cache[url].img;
}
