var sum = require("./operations/sum.js");
var multiplication = require("./operations/multiplication.js");
var division = require("./operations/division.js");
var substraction = require("./operations/substraction.js");
var moment = require('moment');
console.log(sum(10,5))
console.log(multiplication(10,5))
console.log(division(10,5))
console.log(substraction(10,5))
console.log('Today is : '+moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));