const swap = (arr, idx1, idx2) => {
	let temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
};

// [3,4,9,1]
const selectionSort = (arr) => {
	for (var i = 0; i < arr.length; i++) {
		var lowest = i;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[lowest] > arr[j]) {
				lowest = j;
			}
		}
		if (i !== lowest) {
			swap(arr, i, lowest);
		}
	}
	return arr;
};

console.log(selectionSort([94, 5, 41, 3, 64]));
