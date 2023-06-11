let gameBoard = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let gameOver = false;
let counter = 0;
const symbols = ["o", "x"];
const winBoard = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function isWin() {
  for (let seq of winBoard) {
    let pos0 = seq[0];
    let pos1 = seq[1];
    let pos2 = seq[2];

    if (
      gameBoard[pos0] == gameBoard[pos1] &&
      gameBoard[pos0] == gameBoard[pos2] &&
      gameBoard[pos0] != ""
    ) {
      return true;
    }
  }

  return false;
}

function handleMove(position) {
  if (gameBoard[position] == "") {
    gameBoard[position] = symbols[playerTime];

    gameOver = isWin();

    if (!gameOver) {
      playerTime = playerTime == 0 ? 1 : 0;
      counter++;
    }
  }

  return gameOver;
}
