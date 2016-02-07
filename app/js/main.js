'use strict';

const {createStore, bindActionCreators} = require('redux');

const {reducer} = require('./store');
const rawActions = require('./actions');
const {updateView} = require('./view');

const {loadImages} = require('./lib/images.js');

const {testScene} = require('./scenes/test');

const store = createStore(reducer);
const actions = bindActionCreators(rawActions, store.dispatch);

var prevState = store.getState();
store.subscribe(()=>{
  const state = store.getState();
  updateView(state.background, state.tiles, state.entities);
  prevState = state;
});

var then = new Date();
const gameLoop = () => {
  const now = new Date();
  // time lapsed, converted to seconds
  const delta = (now - then) / 1000;
  actions.tick(delta)
  then = now;
  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);

// this will go somewhere else eventually
loadImages().then(()=>{
  var firstScene = testScene();
  actions.setScene(testScene());
});
