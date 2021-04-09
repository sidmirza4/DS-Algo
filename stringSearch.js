// how many times short string happens in long string.

const stringSearch = (long, short) => {
	let counter = 0;
	for (let i = 0; i < long.length; i++) {
		for (let j = 0; j < short.length; j++) {
			if (short[j] !== long[i + j]) break;
			if (j === short.length - 1) counter++;
		}
	}
	return counter;
};

// time complexity = O(n)
console.log(stringSearch('ha hah ha ha ha ha ha ha ha', 'ha'));
