const mario = document.querySelector(".game-board--mario");
const pipe = document.querySelector(".game-board--pipe");
const clouds = document.querySelector(".game-board--clouds");
const gameOver = document.querySelector(".game-board--game-over");

const jump = () => {
  mario.classList.add("jump");
  setTimeout(() => mario.classList.remove("jump"), 600);
};

document.addEventListener("keydown", jump);
addEventListener("touchstart", jump);

const game = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  const cloudsPosition = clouds.offsetLeft;

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    mario.src = "./assets/images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    clouds.style.animation = "none";
    clouds.style.left = `${cloudsPosition}px`;

    gameOver.classList.add("active");

    clearInterval(game);
  }
}, 10);
