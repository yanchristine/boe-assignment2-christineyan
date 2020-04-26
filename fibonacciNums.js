const fibonacciNums = (n) => {
  if (n <= 0) {
	  return [];
  }
  let fibonacciNumbers = new Array();
  fibonacciNumbers[0] = 0;
  fibonacciNumbers[1] = 1;
  for (let i = 2; i < n; i++) {
	  fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
  }
  return fibonacciNumbers;
};

module.exports = fibonacciNums;

console.log(fibonacciNums(4)); // [ 0, 1, 1, 2 ]
console.log(fibonacciNums(-2)); // []