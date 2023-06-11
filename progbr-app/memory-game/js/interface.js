const cardClass = "card";
const front = "card-front";
const back = "card-back";

startGame();

function startGame() {
  let gameBoard = document.querySelector("#game-board");
  gameBoard.innerHTML = "";
  cards = createCardFromTechs();
  shuflleCards(cards);
  initializeCards(cards);
}

function initializeCards(cards) {
  let gameBoard = document.querySelector("#game-board");
  gameBoard.innerHTML = "";

  cards.forEach((card) => {
    let cardElement = document.createElement("div");
    cardElement.id = card.id;
    cardElement.classList = cardClass;
    cardElement.dataset.icon = card.icon;
    cardElement.addEventListener("click", cardFlip);

    createFace(card, cardElement);

    gameBoard.appendChild(cardElement);
  });
}

function cardFlip() {
  if (setCard(this.id)) {
    this.classList.add("flip");

    if (secondCard) {
      setTimeout(() => {
        if (checkMatch()) {
          clearCards();

          if (gameOverCond()) {
            let gameOver = document.querySelector("#game-over");
            gameOver.style.display = "flex";
          }
        } else {
          let firstCardPreview = document.getElementById(firstCard.id);
          let secondCardPreview = document.getElementById(secondCard.id);

          firstCardPreview.classList.remove("flip");
          secondCardPreview.classList.remove("flip");

          unflipedCards();
          clearCards();
        }
      }, 2000);
    }
  }
}

function createFace(card, cardElement) {
  createCardFace(front, card, cardElement);
  createCardFace(back, card, cardElement);
}

function createCardFace(face, card, cardElement) {
  let cardElementFace = document.createElement("div");
  cardElementFace.classList = face;

  if (face === "card-front") {
    let cardImg = document.createElement("img");
    cardImg.src = "./assets/images/" + card.icon + ".png";
    cardElementFace.appendChild(cardImg);
  } else {
    cardElementFace.innerHTML = "&lt/&gt";
  }

  cardElement.appendChild(cardElementFace);
}

function restart() {
  let gameOver = document.querySelector("#game-over");
  gameOver.style.display = "none";
  clearCards();
  startGame();
}
