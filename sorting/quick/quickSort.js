const swap = (array, i, j) => {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
	let pivot = arr[start];
	let swapIdx = start;

	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, i, swapIdx);
		}
	}
	swap(arr, start, swapIdx);
	return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);
		// left
		quickSort(arr, left, pivotIndex - 1);
		// right
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
};
