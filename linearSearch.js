const linearSearch = (arr, val) => {
	let index;
	arr.forEach((el, i) => {
		if (el === val) {
			index = i;
		}
	});
	if (index >= 0) return index;
	return -1;
};

console.log(linearSearch([1, 2, 3, 4, 5, 6, 8], 1));
