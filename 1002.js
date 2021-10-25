
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = require('fs').readFileSync('stdin', 'utf8');
var [x, y, z] = input.split('\n').map(i =>parseFloat(i))


var pi = 3.14159;
var raio = x
var area = pi * (raio*raio);
console.log("A="+area.toFixed(4));


