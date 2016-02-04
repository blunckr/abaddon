'use strict';

const _ = require('lodash');

const initialState = {
  sceneName: null,
  background: '#000',
  tiles: [],
  entities: [],
  buttons: [],
  images: [],
  loadingScenes: [],
  loadedScenes: []
};

function newState(state, updates){
  return _.assign({}, state, updates);
}

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
      return newState(state, {entities});

    case 'SET_SCENE':
      var {background, tiles, entities} = action.scene;
      return newState(state, {background, tiles, entities});

    case 'SCENE_LOADING':
      var loadingScenes = _.concat(state.loadingScenes, action.sceneName);
      return newState(state, {loadingScenes});

    case 'SCENE_LOADED':
      var loadingScenes = _.without(state.loadingScenes, action.sceneName);
      var loadedScenes = _.concat(state.loadedScenes, action.sceneName);
      return newState(state, {loadingScenes, loadedScenes});

    case 'BUTTON_DOWN':
      var buttons = _.concat(state.buttons, action.button);
      return newState(state, {buttons});

    case 'BUTTON_UP':
      var buttons = _.without(state.buttons, action.button);
      return newState(state, {buttons});

    default:
      return state;
  }
}
