const $ = require('jquery'); 

/**
 * Sign up for the api key in order to get the latest currency right now it only returns 404
 */

module.exports = function(baseCurrency, callback) {
  $.getJSON('https://data.fixer.io/api/latest' , function(fxRates) {
    callback(fxRates); 
  });
}