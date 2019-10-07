'use strict';

const EE = require('./hub');

EE.on('save', handleSave);
EE.on('err', handleError);

function handleSave(payload){
  console.log(`File ${payload.id} is saved brotha!`)

};

function handleError(payload){
  console.log(`File ${payload.id} could not be saved`);
}
