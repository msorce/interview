// this will be an undirected Graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) {
      this.adjacencyList[v] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
  removeVertex(v) {
    let edges = this.adjacencyList[v];
    for (let e of edges) {
      this.removeEdge(e, v);
    }
    delete this.adjacencyList[v];
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    function dfs(v) {
      if (!v) return null;
      visited[v] = true;
      result.push(v);
      adjacencyList[v].forEach((e) => {
        if (!visited[e]) {
          dfs(e);
        }
      });
    }
    dfs(start);
    return result;
  }

  depthFirstIterative(start) {
    const stack = [];
    const result = [];
    const visited = {};

    stack.push(start);
    visited[start] = true;

    while (stack.length) {
      let current = stack.pop();
      result.push(current);
      this.adjacencyList[current].forEach((n) => {
        if (!visited[n]) {
          visited[n] = true;
          stack.push(n);
        }
      });
    }
    return result;
  }

  breadthFirst(start) {
    const queue = [];
    const result = [];
    const visited = {};

    queue.push(start);
    visited[start] = true;

    while (queue.length) {
      let current = queue.shift();
      result.push(current);
      this.adjacencyList[current].forEach((n) => {
        if (!visited[n]) {
          visited[n] = true;
          queue.push(n);
        }
      });
    }
    return result;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.breadthFirst("A"));
// console.log(g.depthFirstRecursive("A"));
