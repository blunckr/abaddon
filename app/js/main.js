'use strict';

const {createStore} = require('redux');

const {reducer} = require('./store');
const actions = require('./actions');
const {updateView} = require('./view');

const store = createStore(reducer);

store.subscribe(()=>{
  const state = store.getState();
  updateView(state.background, state.tiles, state.entities);
});

var then = new Date();
const gameLoop = () => {
  const now = new Date();
  // time lapsed, converted to seconds
  const delta = (now - then) / 1000;
  store.dispatch(actions.tick(delta));
  then = now;
  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);
