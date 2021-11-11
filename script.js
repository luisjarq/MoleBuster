const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const scoreBoard = document.querySelector(".score");
let score = 0;
let lastHole;
let timeUp = false;
function randomHole() {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole();
  }
  lastHole = hole;
  return hole;
}
function randomTime() {
  return Math.random();
}
function wack(event) {
  score++;
  scoreBoard.textContent = score;
  event.target.classList.remove("up");
}
function setEvents(data) {
  data.forEach((element) => {
    element.addEventListener("click", wack);
  });
}
function peep() {
  const time = randomTime();
  const hole = randomHole();
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time * 2000);
}
function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  setEvents(moles);
  peep();
  setTimeout(() => (timeUp = true), 15000);
}
