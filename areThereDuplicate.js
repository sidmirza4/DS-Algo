function areThereDuplicates(...args) {
	let obj = {};
	console.log(args);
	if (args.length === 0) return false;
	for (let val of args) {
		obj[val] = (obj[val] || 0) + 1;
	}
	for (let key in obj) {
		if (obj[key] > 1) return true;
	}
	return false;
}

// function areThereDuplicates() {
// 	return new Set(arguments).size !== arguments.length;
// }

console.log(areThereDuplicates('a', 'b', 'c', 'd'));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
