class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (this.length === 0) return undefined;
		const removedTail = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = removedTail.prev;
			this.tail.next = null;
			removedTail.prev = null;
		}
		this.length--;
		return removedTail;
	}

	shift() {
		if (this.length === 0) return undefined;
		const oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
			return oldHead;
		}

		this.head = oldHead.next;
		this.head.prev = null;
		oldHead.next = null;
		this.length--;
		return oldHead;
	}

	unshift(val) {
		const newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return this;
		}

		const oldHead = this.head;
		oldHead.prev = newNode;
		this.head = newNode;
		this.head.next = oldHead;

		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		let counter, current;
		if (index <= this.length / 2) {
			counter = 0;
			current = this.head;
			while (counter !== index) {
				current = current.next;
				counter++;
			}
		}

		if (index > this.length / 2) {
			counter = this.length - 1;
			current = this.tail;
			while (counter !== index) {
				current = current.prev;
				counter--;
			}
		}

		return current;
	}

	set(index, val) {
		const node = this.get(index);
		if (node) {
			node.val = val;
			return true;
		}
		return false;
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) return !!this.unshift(val);
		if (index === this.length) return !!this.push(val);

		let newNode = new Node(val);
		let beforeNode = this.get(index - 1);
		let afterNode = beforeNode.next;

		(beforeNode.next = newNode), (newNode.prev = beforeNode);
		(newNode.next = afterNode), (afterNode.prev = newNode);

		this.length++;
		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		let foundNode = this.get(index);
		let beforeNode = foundNode.prev;
		let afterNode = foundNode.next;

		beforeNode.next = afterNode;
		afterNode.prev = beforeNode;
		(foundNode.prev = null), (foundNode.next = null);
		this.length--;
		return foundNode;
	}
}

const list = new DoublyLinkedList();
list.push('first');
list.push('second');
list.push('third');
list.push('fourth');
list.push('fifth');

console.log(list);
