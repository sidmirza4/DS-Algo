class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		const newNode = new Node(val);
		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			const temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}
		this.size++;
		return this.size;
	}

	pop() {
		if (this.size === 0) return undefined;
		const temp = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;

		return temp;
	}
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack);
