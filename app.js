'use strict';

const fs = require('fs');
const EE = require('./hub');
const fileWrite = require('./writeFiles');
const upperCase = require('./upperCase');
const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    let newData = upperCase(data);
    fileWrite(file,newData);
    });
  };

let file = process.argv.slice(2).shift();
alterFile(file);
