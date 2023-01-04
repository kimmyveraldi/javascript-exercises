const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
  return x-y;
};

const sum = function(array) {
  return array.reduce((total,num) => total+num, 0);
};

const multiply = function(array) {
  return array.reduce((total,num) => total*num, 1);
};

const power = function(x,y) {
	return Math.pow(x,y);
};

const factorial = function(n) {
  let total = 1;
  if (n === 0 || n===1) return 1;
  for (let i=n; i>0; i--) {
    total = total * i;
  }
 return total;
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
