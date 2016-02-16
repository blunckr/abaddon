'use strict';

const translate = (keyCode)=>{
  switch(keyCode){
    case 32:
      return 'SPACE';
    case 37:
      return 'LEFT';
    case 38:
      return 'UP';
    case 39:
      return 'RIGHT';
    case 40:
      return 'DOWN';
    default:
      return false;
  }
};

exports.bindButtons = (buttonDown, buttonUp)=>{
  document.onkeyup = (e)=>{
    var button = translate(e.keyCode);
    if(button !== false){
      e.preventDefault();
      buttonUp(button);
    }
  };
  document.onkeydown = (e)=>{
    var button = translate(e.keyCode);
    if(button){
      e.preventDefault();
      buttonDown(button);
    }
  };
};
