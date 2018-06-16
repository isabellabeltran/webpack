const $ = require('jquery');
const firstExercise = require('./firstExercise.js');

firstExercise('USD', function(fxRates) {
  console.log(fxRates)
});