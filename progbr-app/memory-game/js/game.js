const techs = [
  "bootstrap",
  "css",
  "firebase",
  "html",
  "javascript",
  "jquery",
  "mongo",
  "node",
  "react",
  "typescript",
];

let firstCard = null;
let secondCard = null;
let lockMode = false;
let cards = null;

function createCardFromTechs() {
  cards = [];

  techs.forEach((tech) => {
    cards.push(createPairFromTech(tech));
  });

  return cards.flatMap((pair) => {
    return pair;
  });
}

function createPairFromTech(tech) {
  return [
    {
      id: createIdTech(tech),
      icon: tech,
      flipped: false,
    },
    {
      id: createIdTech(tech),
      icon: tech,
      flipped: false,
    },
  ];
}

function createIdTech(tech) {
  return parseInt(Math.random() * 1000) + tech;
}

function shuflleCards(cards) {
  let currentIndex = cards.length;
  let randomIndex = null;

  while (currentIndex !== 0) {
    currentIndex--;
    randomIndex = Math.floor(Math.random() * currentIndex);
    [[cards[currentIndex]], [cards[randomIndex]]] = [
      [cards[randomIndex]],
      [cards[currentIndex]],
    ];
  }
}

function setCard(id) {
  let cardFilter = cards.filter((card) => {
    return card.id === id;
  })[0];

  if (lockMode == true || cardFilter.flipped == true) {
    return false;
  }

  if (!firstCard) {
    firstCard = cardFilter;
    cardFilter.flipped = true;
    return true;
  } else if (!secondCard) {
    secondCard = cardFilter;
    cardFilter.flipped = true;
    lockMode = true;
    return true;
  }
}

function checkMatch() {
  if (!firstCard && !secondCard) {
    return false;
  }

  return firstCard.icon === secondCard.icon;
}

function clearCards() {
  firstCard = null;
  secondCard = null;
  lockMode = false;
}

function unflipedCards() {
  firstCard.flipped = false;
  secondCard.flipped = false;
}

function gameOverCond() {
  return (
    cards.filter((card) => {
      return card.flipped == false;
    }).length == 0
  );
}
