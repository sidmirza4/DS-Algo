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
		return null;
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
}

const graph = new Graph();

graph.addVertex('TOKYO');
graph.addVertex('DALLAS');
graph.addVertex('ASPEN');
graph.addVertex('LA');
graph.addVertex('HONGKONG');
graph.addEdge('TOKYO', 'DALLAS');
graph.addEdge('TOKYO', 'ASPEN');
graph.addEdge('LA', 'ASPEN');
graph.addEdge('LA', 'DALLAS');
graph.addEdge('LA', 'HONGKONG');
graph.addEdge('TOKYO', 'HONGKONG');
// graph.removeEdge('TOKYO', 'DALLAS');
graph.removeVertex('HONGKONG');
console.log(graph);
