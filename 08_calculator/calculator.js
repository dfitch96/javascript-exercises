const add = function(a=0, b=0) {
    return a + b;
};

const subtract = function(a=0, b=0) {
  return a - b;
};

const sum = function(nums) {
    return nums.reduce((sum, curr) => sum + curr, 0);
};

const multiply = function(nums) {
  return nums.reduce((product, curr) => product * curr, 1);
};

const power = function(base, power) {
	return Math.pow(base, power);
};

const factorial = function(n) {
  let product = 1;
  for(let i = n; i > 1; i--){
    product *= i;
  }

  return product;


};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
