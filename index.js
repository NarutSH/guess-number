const btnCheck = document.querySelector(".btn-check");
const inputNumber = document.querySelector(".input-number");
const hintText = document.querySelector(".hint-text");
const scoreNumber = document.querySelector(".score-number");
const highScoreNumber = document.querySelector(".highscore-number");
const btnAgain = document.querySelector(".btn-again");

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

const onSubmit = () => {
  if (Number(inputNumber.value) === secretNumber) {
    hintText.innerHTML = "CORRECT";
    hintText.classList.add("green-text");

    highScoreNumber.innerHTML = score;
  } else if (Number(inputNumber.value) > secretNumber) {
    hintText.innerHTML = "TOO  HIGH";

    score--;
    scoreNumber.innerHTML = score;
  } else if (Number(inputNumber.value) < secretNumber) {
    hintText.innerHTML = "TOO LOW";

    score--;
    scoreNumber.innerHTML = score;
  }
};

const onAgainClick = () => {
  scoreNumber.innerHTML = "20";
  inputNumber.value = "";
  hintText.innerHTML = "Start guessing";
  hintText.classList.remove("green-text");
};

btnCheck.addEventListener("click", onSubmit);
btnAgain.addEventListener("click", onAgainClick);
