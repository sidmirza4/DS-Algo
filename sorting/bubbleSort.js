const swap = (arr, idx1, idx2) => {
	let temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
};

// const bubbleSort = (arr) => {
// 	for (let i = arr.length; i > 0; i--) {
// 		for (let j = 0; j < i - 1; j++) {
// 			if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
// 		}
// 	}

// 	return arr;
// };

// OPTIMISED VERSION
const bubbleSort = (arr) => {
	let noSwap;
	for (let i = arr.length; i > 0; i--) {
		noSwap = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				noSwap = false;
			}
		}
		if (noSwap) break;
	}
	return arr;
};

console.log(bubbleSort([1, 2, 4, 9, 75, 4, 6, 8]));
