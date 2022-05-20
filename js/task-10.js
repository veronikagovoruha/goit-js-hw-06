function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");
let count = 0;

function createBoxes(amount) {
  console.log(count, amount);
}

function create() {
  const inputVal = parseInt(inputEl.value);
  createBoxes(inputVal);
  count += inputVal;
}

createBtnEl.addEventListener("click", create);
