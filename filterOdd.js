const filterOdd = (arr) => {
  return arr.filter(num => num % 2 === 1);
};

module.exports = filterOdd;

console.log(filterOdd([1,2,4,27,5,6,10])); // [ 1, 27, 5 ]