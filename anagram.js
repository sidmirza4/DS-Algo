function validAnagram(str1, str2) {
	// add whatever parameters you deem necessary - good luck!
	if (str1.length !== str2.length) return false;
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	for (let char of str1) {
		frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
	}
	for (let char of str2) {
		frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
	}
	for (let key in frequencyCounter1) {
		if (!(key in frequencyCounter2)) return false;
		if (frequencyCounter1[key] !== frequencyCounter1[key]) {
			return false;
		}
	}
	return true;
}

function validAnagramColt(first, second) {
	if (first.length !== second.length) return false;
	const lookup = {};
	for (let letter of first) {
		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
	}
	for (let letter of second) {
		if (!lookup[letter]) return false;
		lookup[letter] -= 1;
		// zero is falsy
	}
	return true;
}
