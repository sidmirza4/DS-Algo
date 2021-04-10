class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		const newNode = new Node(val);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while (true) {
			if (val === current.value) return undefined;
			if (val < current.value) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else if (val > current.value) {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}

	find(value) {
		if (!this.root) return null;
		if (this.root === value) return true;
		let current = this.root;
		while (true) {
			if (current.value === value) return true;
			if (value < current.value) {
				if (current.left === null) return false;
				if (current.left === value) return true;
				current = current.left;
			} else if (value > current.value) {
				if (current.right === null) return false;
				if (current.value === value) return true;
				current = current.right;
			}
		}
	}

	// BREADTH FIRST SEARCH
	BFS() {
		let data = [],
			queue = [],
			node = this.root;
		queue.push(node);

		while (queue.length) {
			node = queue.shift();
			data.push(node.value);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return data;
	}

	// DEPTH FIRST-PRE ORDER -> ONLY FOR BST
	DFSpreOrder() {
		if (!this.root) return [];
		const visited = [];
		const current = this.root;
		function traverse(node) {
			visited.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}
		traverse(current);
		return visited;
	}

	DFSpostOrder() {
		if (!this.root) return [];
		const visited = [];
		const current = this.root;
		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			visited.push(node.value);
		}
		traverse(current);
		return visited;
	}

	DFSInOrder() {
		if (!this.root) return [];
		const visited = [];
		const current = this.root;
		function traverse(node) {
			if (node.left) traverse(node.left);
			visited.push(node.value);
			if (node.right) traverse(node.right);
		}
		traverse(current);
		return visited;
	}
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(8);
tree.insert(15);
tree.insert(3);
tree.insert(100);
// console.log(tree.find(8));
// console.log(tree.BFS());
// console.log(tree.DFSpreOrder());
// console.log(tree.DFSpostOrder());
// console.log(tree.DFSInOrder());
// console.log(tree);
