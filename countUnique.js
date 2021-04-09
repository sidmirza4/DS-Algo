function countUniqueValues(arr) {
	//  [1,1,1,1,2]
	let i = 0;
	let j = 1;
	while (j < arr.length) {
		if (arr[i] === arr[j]) {
			j++;
		} else {
			j++;
			i++;
		}
	}
	return i + 1;
}
