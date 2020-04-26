const isRightTriangle = (a, b, c) => {
	if (a <= 0 || b <= 0 || c <= 0 ) {
		return false;
	}
	else {
		return (a ** 2 + b ** 2 === c ** 2) || 
		(a ** 2 + c ** 2 === b ** 2) || 
		(c ** 2 + b ** 2 === a ** 2);
	}
};

module.exports = isRightTriangle;

console.log(isRightTriangle(5, 4, 3)); // true
console.log(isRightTriangle(0, 0, 0)); // false
console.log(isRightTriangle(-5, -4, -3)); // false
