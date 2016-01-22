'use strict';

const _ = require('lodash');

const canvas = document.createElement("canvas");
const ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

exports.updateView = (background, tiles, entities)=>{
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = background;
  ctx.fill();

  _.each(tiles, (row, y)=>{
    _.each(row, (tile, x)=>{
      if(tile){
        // const sprite =
      }
    });
  });
};
