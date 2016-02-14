'use strict';

const _ = require('lodash');
const {getImage} = require('./lib/images');

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

const sHeight = 16;
const sWidth = 16;
const dHeight = 16;
const dWidth = 16;

exports.updateView = (background, tiles, entities)=>{
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = background;
  ctx.fill();

  _.each(tiles, (row, y)=>{
    _.each(row, (tile, x)=>{
      if(tile){
        const img = getImage(tile.img);
        // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        ctx.drawImage(
          img,
          tile.x * sWidth, tile.y * sHeight,
          sWidth, sHeight,
          x * dWidth, y * dHeight,
          dWidth, dHeight
        );
      }
    });
  });

  _.each(entities, (entity)=>{
    ctx.drawImage(
      getImage(entity.img),
      entity.spriteX, entity.spriteY,
      entity.width, entity.height,
      entity.x, entity.y,
      dWidth, dHeight
    );
  });
};

exports.dHeight = dHeight;
exports.dWidth = dWidth;
