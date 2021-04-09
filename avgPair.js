function averagePair(arr, avg) {
	if (arr.length === 0) return false;
	let start = 0;
	let next = 1;

	while (start < arr.length) {
		let calcAvg = arr[start] + arr[next] / 2;
		if (calcAvg === avg) return true;
		if (calcAvg < avg) {
			next++;
		} else {
			start++;
		}
	}
	return false;
}

console.log(averagePair([1, 2, 3], 2));
