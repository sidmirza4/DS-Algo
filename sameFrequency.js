function sameFrequency(num1, num2) {
	const arr1 = num1
		.toString()
		.split('')
		.map((num) => +num);
	const arr2 = num2
		.toString()
		.split('')
		.map((num) => +num);

	const obj1 = {};
	const obj2 = {};
	for (let val of arr1) {
		obj1[val] = (obj1[val] || 0) + 1;
	}
	for (let val of arr2) {
		obj2[val] = (obj2[val] || 0) + 1;
	}

	for (let val in obj1) {
		if (!(val in obj2)) return false;
		if (obj1[val] !== obj2[val]) return false;
	}
	return true;
}

console.log(sameFrequency(14541, 44511));
