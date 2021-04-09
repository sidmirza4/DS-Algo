const binarySearch = (arr, val) => {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let middle = Math.round((left + right) / 2);
		if (arr[middle] === val) return middle;
		if (arr[middle] > val) right = middle;
		if (arr[middle] < val) left = middle;
	}
	return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
