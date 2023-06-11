window.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position) || counter == 9) {
    let playerWin = symbols[playerTime];

    if (counter == 9) {
      playerWin = "velha";
    }

    restartGame(playerWin.toUpperCase());
  }

  updateSquare(square);
}

function updateSquare(square) {
  let position = square.id;
  let symbol = gameBoard[position];

  if (symbol) {
    square.innerHTML = `<div class="${symbol}"></div>`;
  }
}

function restartGame(player) {
  let gameOver = document.querySelector(".game-over");
  let win = document.querySelector(".winner");
  win.innerHTML = `<h2>Vencedor: ${player}</h2>`;
  gameOver.style.display = "flex";
}

function restart() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  gameOver = false;
  counter = 0;

  let game = document.querySelector(".game-over");
  game.style.display = "none";

  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.innerHTML = "";
  });
}
