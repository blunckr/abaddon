'use strict';
exports.tick = (delta)=>({
  type: 'TICK',
  delta
});

exports.buttonDown = (button)=>({
  type: 'BUTTON_DOWN',
  button
});

exports.buttonUp = (button)=>({
  type: 'BUTTON_UP',
  button
});

exports.setScene = (scene)=>({
  type: 'SET_SCENE',
  scene
});

exports.sceneLoading = (sceneName)=>({
  type: 'SCENE_LOADING',
  sceneName
});

exports.sceneLoaded = (sceneName)=>({
  type: 'SCENE_LOADED',
  sceneName
});
