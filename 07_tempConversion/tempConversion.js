const convertToCelsius = function(num) {

  num = (num - 32) / (9 / 5);
 
  return Math.round(num * 10) / 10;


};

const convertToFahrenheit = function(num) {

  num = ((9 / 5) * num) + 32;
  return Math.round(num * 10) / 10;


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
