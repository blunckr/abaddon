'use strict';

const _ = require('lodash');

const initialState = {
  sceneName: null,
  background: '#000',
  tiles: [],
  entities: [],
  buttons: [],
  images: []
};

function newState(state, updates){
  return _.assign({}, state, updates);
}

exports.reducer = (state = initialState, action) => {
  var entities, background, tiles, buttons;
  switch(action.type){
    case 'TICK':
      if(state.entities.length){
        entities = _.map(state.entities, (entity)=>{
          if(entity.tick){
            entity = entity.tick(entity, _.without(state.entities, entity), state.tiles, state.buttons, action.delta);
          }
          return entity;
        });
        return newState(state, {entities});
      } else {
        return state;
      }
      break;
    case 'SET_SCENE':
      ({background, tiles, entities} = action.scene);
      return newState(state, {background, tiles, entities, sceneName: action.scene.name});

    case 'BUTTON_DOWN':
      if(!_.includes(state.buttons, action.button)){
        buttons = _.concat(state.buttons, action.button);
        return newState(state, {buttons});
      }
      return state;
    case 'BUTTON_UP':
      buttons = _.without(state.buttons, action.button);
      return newState(state, {buttons});

    default:
      return state;
  }
};
