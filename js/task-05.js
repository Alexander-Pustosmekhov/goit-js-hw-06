const inputRef = document.querySelector("#name-input");
const titleRef = document.querySelector("#name-output");

inputRef.addEventListener("input", changeName);

function changeName(event) {
  titleRef.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    titleRef.textContent = "Anonymous";
  }
}
