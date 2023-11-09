function getNeighbors(row, col, graph) {
  let neighbors = [];
  // Check top
  if (row > 0 && graph[row - 1][col] === 1) {
    neighbors.push([row - 1, col]);
  }
  // Check bottom
  if (row < graph.length - 1 && graph[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }
  // Check left
  if (col > 0 && graph[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }
  // Check right
  if (col < graph[row].length - 1 && graph[row][col + 1] === 1) {
    neighbors.push([row, col + 1]);
  }
  return neighbors;
}

function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  // Put the stringified starting node in visited
  const visited = new Set().add([row, col].toString());

  // Create a stack, put the starting node in the stack
  const stack = [[row, col]];

  // Initialize size to 0
  let size = 0;

  // While the stack is not empty,
  while (stack.length) {
    // Pop the first node
    const curr = stack.pop();
    let [row1, col1] = curr
    // DO THE THING (increment size by 1)
    size++;

    const neighbors = getNeighbors(row1, col1, graph);
    // // Then push all the UNVISITED neighbors on top of the stack
    // // and mark them as visited
    neighbors.forEach((neighbor) => {
      if (!visited.has(neighbor.toString())) {
        stack.push(neighbor);
        visited.add(neighbor.toString());
        // console.log(neighbors)
      }
    });
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
  }
  // console.log(visited)
  return size;
}

module.exports = [getNeighbors, islandSize];
