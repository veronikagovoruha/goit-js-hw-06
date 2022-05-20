function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const buttonEl = bodyEl.querySelector(".change-color");
const spanEl = bodyEl.querySelector(".color");

buttonEl.addEventListener("click", () => {
  changeColor(bodyEl, spanEl);
});

function changeColor(el, span) {
  const randomColor = getRandomHexColor();
  el.style.backgroundColor = randomColor;
  span.textContent = randomColor;
}
