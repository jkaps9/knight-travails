// https://www.theodinproject.com/lessons/javascript-knights-travails

function knightMoves(start, end) {
  // shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.
  // You can think of the board as having 2-dimensional coordinates. Calling your function would therefore look like:
  //knightMoves([0,0],[1,2]) // returns [[0,0],[1,2]]

  const arr = getLegalMoves(start);
  console.log(arr);
}

function getLegalMoves(start) {
  //return all legal moves from the starting position represented as [x,y]
  //Its basic move is two steps forward and one step to the side or one step forward and two steps to the side. It can face any direction.
  const moves = [];

  const x = start[0];
  const y = start[1];

  if (x < 6 && y < 5) moves.push([x + 1, y + 2]);
  if (x > 0 && y < 5) moves.push([x - 1, y + 2]);

  if (x < 6 && y > 1) moves.push([x + 1, y - 2]);
  if (x > 0 && y > 1) moves.push([x - 1, y - 2]);

  if (x < 5 && y < 6) moves.push([x + 2, y + 1]);
  if (x > 1 && y < 6) moves.push([x - 2, y + 1]);

  if (x < 5 && y > 0) moves.push([x + 2, y - 1]);
  if (x > 1 && y > 0) moves.push([x - 2, y - 1]);

  return moves;
}

knightMoves([3, 3], [0, 0]);
