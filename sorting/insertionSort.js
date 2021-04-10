const swap = (arr, idx1, idx2) => {
	let temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
};

const insertionSort = (arr) => {
	for (i = 1; i < arr.length; i++) {
		let current = arr[i];
		for (j = i - 1; j >= 0 && arr[j] > current; j--) {
			// moving the value forward
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = current;
	}

	return arr;
};

console.log(insertionSort([5, 3, 1, 2, 4, 99, 0, -1, -35, 5]));
