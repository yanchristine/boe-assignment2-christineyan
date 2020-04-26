const getFrequencies = (arr) => {
  let counter = {};
  for (let i = 0; i< arr.length; i++) {
	  value = arr[i];
	  
	  if (value in counter){
		  counter[value] = counter[value] + 1;
	  }
	  else {
		  counter[value] = 1;
	  }
  }
  return counter;
};

module.exports = getFrequencies;

console.log(getFrequencies([1,3,2,3,1,1,5])); 
// { '1': 3, '2': 1, '3': 2, '5': 1 }