'use strict';


const alterFile = require('./alterFile');

let file = process.argv.slice(2).shift();
alterFile(file);
