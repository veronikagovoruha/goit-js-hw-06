const formInputEl = document.querySelector("#validation-input");
formInputEl.addEventListener("blur", () => {
  if (formInputEl.value.length != formInputEl.getAttribute("data-length")) {
    formInputEl.classList.remove("valid");
    formInputEl.classList.add("invalid");
  } else {
    formInputEl.classList.remove("invalid");
    formInputEl.classList.add("valid");
  }
});
