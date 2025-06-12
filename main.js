// https://www.theodinproject.com/lessons/javascript-knights-travails

function knightMoves(start, end) {
  // Shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.
  // You can think of the board as having 2-dimensional coordinates. Calling your function would therefore look like:
  // knightMoves([0,0],[1,2]) // returns [[0,0],[1,2]]

  const startX = start[0];
  const startY = start[1];
  if (startX > 7 || startX < 0 || startY > 7 || startY < 0)
    throw new Error("Invalid start");

  const endX = end[0];
  const endY = end[1];
  if (endX > 7 || endX < 0 || endY > 7 || endY < 0)
    throw new Error("Invalid end");

  if (startX === endX && startY === endY) {
    console.log("The start is the end...");
    return;
  }
  // Breadth first search
  let queue = [];
  queue.push([start]);
  let visited = [];

  while (queue.length > 0) {
    let current = queue.shift();
    let position = current[current.length - 1];

    if (
      !visited.some(
        (node) => node[0] === position[0] && node[1] === position[1]
      )
    ) {
      visited.push(position);
      if (position[0] === endX && position[1] === endY) {
        console.log(
          `You made it in ${current.length} moves! Here's your path:`
        );
        current.forEach((x) => {
          console.log(x);
        });
        return;
      }
      const moves = getLegalMoves(position);
      for (const move of moves) {
        queue.push([...current, move]);
      }
    }
  }

  console.log(`Sorry, we couldn't find a path from ${start} to ${end} =[`);
  return;
}

function getLegalMoves(start) {
  // Return all legal moves from the starting position represented as [x,y]
  // Its basic move is two steps forward and one step to the side or one step forward and two steps to the side. It can face any direction.
  const moves = [];

  const x = start[0];
  const y = start[1];

  if (x < 7 && y < 6) moves.push([x + 1, y + 2]);
  if (x > 0 && y < 6) moves.push([x - 1, y + 2]);

  if (x < 7 && y > 1) moves.push([x + 1, y - 2]);
  if (x > 0 && y > 1) moves.push([x - 1, y - 2]);

  if (x < 6 && y < 7) moves.push([x + 2, y + 1]);
  if (x > 1 && y < 7) moves.push([x - 2, y + 1]);

  if (x < 6 && y > 0) moves.push([x + 2, y - 1]);
  if (x > 1 && y > 0) moves.push([x - 2, y - 1]);

  return moves;
}

// knightMoves([12, 3], [0, -1]); // Invalid start
// knightMoves([3, 3], [0, -1]); // Invalid end
// knightMoves([3, 3], [3, 3]); // start equals end
knightMoves([3, 3], [4, 3]); // [3,3] [4,5] [2,4] [4,3]
knightMoves([0, 0], [1, 2]); // [0,0] [1,2]
knightMoves([0, 0], [3, 3]); // [[0,0],[2,1],[3,3]] or [[0,0],[1,2],[3,3]]
knightMoves([3, 3], [0, 0]); // [[3,3],[2,1],[0,0]] or [[3,3],[1,2],[0,0]]
knightMoves([0, 0], [7, 7]); // [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]] or [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]
