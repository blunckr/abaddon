'use strict';

const _ = require('lodash');

const initialState = {background: '#000', tiles: [], entities: [], buttons: [], images: []};

exports.reducer = (state = initialState, action) => {
  switch(action.type){
    case 'TICK':
      var entities = _.map(entities, (entity)=>{
        entity.speedX += entity.accX * action.delta;
        entity.speedY += entity.accY * action.delta;
        entity.x += entity.speedX * action.delta;
        entity.y += entity.speedY * action.delta;
        return entity
      });
      return Object.assign({}, state, {entities});

    case 'SET_SCENE':
      var {background, tiles, entities} = action.scene;
      return Object.assign({}, state, {background, tiles, entities});

    case 'BUTTON_DOWN':
      var buttons = _.concat(state.buttons, action.button);
      return Object.assign({}, state, {buttons});

    case 'BUTTON_UP':
      var buttons = _.without(state.buttons, action.button);
      return Object.assign({}, state, {buttons});

    default:
      return state;
  }
}
