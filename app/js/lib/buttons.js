'use strict';

const translate = (keyCode)=>{
  switch(keyCode){
    case 32:
      return 'SPACE';
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
