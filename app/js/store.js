'use strict';
const initialState = {background: '#000', tiles: [], entities: [], buttons: []};

exports.reducer = (state = initialState, action) => {
  switch(action.type){
    case 'TICK':

      // return Object.assign({}, state, newStuff)
    default:
      return state;
  }
}
