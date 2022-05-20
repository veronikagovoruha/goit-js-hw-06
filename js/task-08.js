const formEl = document.querySelector(".login-form");
const buttonEl = formEl.querySelector("button");
const inputEls = formEl.querySelectorAll("input");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  if (checkInputs(inputEls)) {
    return;
  }
  console.log(collectInputs(formEl));
  formEl.reset();
});

function checkInputs(inputs) {
  for (let input of inputs) {
    if (input.value === "") {
      alert("Все поля должны быть заполнены");
      return true;
    }
  }
  return false;
}

function collectInputs(form) {
  const inputObj = {};
  for (let input of form.elements) {
    if (input.getAttribute("name")) {
      inputObj[input.getAttribute("name")] = input.value;
    }
  }
  return inputObj;
}
