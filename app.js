const $ = require('jquery');
const firstExercise = require('./firstExercise.js');
const welcomeUser = require('./welcomeUser.coffee');
const ReactApp = require('./react/ReactApp');

firstExercise('USD', fxRates => 
  console.log(fxRates)
);

welcomeUser('Isabella');