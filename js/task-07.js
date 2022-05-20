const formInputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

formInputEl.addEventListener("input", (event) => {
  changeFontSize(event, spanEl);
});

function changeFontSize(event, el) {
  el.style.fontSize = event.target.value + "px";
}
