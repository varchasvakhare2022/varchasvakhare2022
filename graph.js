/**
 * Graph data structure implementation
 * Created: October 17, 2025
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  /**
   * Add a vertex
   * @param {string} vertex - Vertex name
   */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  /**
   * Add an edge between two vertices
   * @param {string} vertex1 - First vertex
   * @param {string} vertex2 - Second vertex
   */
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
    
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  /**
   * Remove an edge
   * @param {string} vertex1 - First vertex
   * @param {string} vertex2 - Second vertex
   */
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Graph;
}

