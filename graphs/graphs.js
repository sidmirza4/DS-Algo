class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(v1, v2) {
		if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
			this.adjacencyList[v1].push(v2);
			this.adjacencyList[v2].push(v1);
		}
	}

	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			(v) => v !== vertex2
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			(v) => v !== vertex1
		);
	}

	removeVertex(vertex) {
		if (this.adjacencyList[vertex]) {
			while (this.adjacencyList[vertex].length) {
				const adjacentVertex = this.adjacencyList[vertex].pop();
				this.removeEdge(vertex, adjacentVertex);
			}
		}
	}

	// DEPTH FIRST TRAVERSAL RECURSIVELY
	DFSrecursive(start) {
		if (!this.adjacencyList[start]) return null;
		const result = [];
		const visited = {};

		const dfs = (vertex) => {
			result.push(vertex);
			visited[vertex] = true;
			// for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
			// 	if (!visited[this.adjacencyList[vertex][i]]) {
			// 		dfs(this.adjacencyList[vertex][i]);
			// 	}
			// }

			this.adjacencyList[vertex].forEach((neighbor) => {
				if (!visited[neighbor]) dfs(neighbor);
			});
		};

		dfs(start);

		return result;
	}

	// DEPTH FIRST TRAVERSAL ITERATIVELY
	DFSIterative(start) {
		const stack = [start];
		const result = [];
		const visited = {};
		let currentVertex;

		visited[start] = true;

		while (stack.length) {
			currentVertex = stack.pop();
			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			});
		}

		return result;
	}

	BFSIterative(start) {
		const queue = [start];
		const result = [];
		const visited = {};
		let currentVertex;

		visited[start] = true;

		while (queue.length) {
			currentVertex = queue.shift();
			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}

		return result;
	}
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addVertex('G');
graph.addVertex('H');
graph.addVertex('I');
graph.addVertex('J');
graph.addVertex('K');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'J');
graph.addEdge('J', 'A');
graph.addEdge('I', 'K');
graph.addEdge('H', 'J');
graph.addEdge('H', 'A');
graph.addEdge('G', 'A');
graph.addEdge('G', 'J');
graph.addEdge('I', 'D');
graph.addEdge('F', 'J');
graph.addEdge('F', 'E');
graph.addEdge('K', 'A');
graph.addEdge('K', 'F');

// graph.addVertex('TOKYO');
// graph.addVertex('DALLAS');
// graph.addVertex('ASPEN');
// graph.addVertex('LA');
// graph.addVertex('HONGKONG');
// graph.addEdge('TOKYO', 'DALLAS');
// graph.addEdge('TOKYO', 'ASPEN');
// graph.addEdge('LA', 'ASPEN');
// graph.addEdge('LA', 'DALLAS');
// graph.addEdge('LA', 'HONGKONG');
// graph.addEdge('TOKYO', 'HONGKONG');
// graph.removeEdge('TOKYO', 'DALLAS');
// graph.removeVertex('HONGKONG');
console.log(graph);
