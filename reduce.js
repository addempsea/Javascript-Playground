var myArray = [10, 20, 30];

sumCallbackFunction = function(accumulator, currentElement) {
  var newSum = currentElement + accumulator;

  return newSum;
};
var sum = myArray.reduce(sumCallbackFunction, 0);
console.log(sum);