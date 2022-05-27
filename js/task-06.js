const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (event) => {
  if (
    event.currentTarget.value.length ===
    Number(inputRef.getAttribute("data-length"))
  ) {
    // inputRef.classList.remove("invalid");
    // inputRef.classList.add("valid");
    changeClass("valid", "invalid");
  } else {
    // inputRef.classList.remove("valid");
    // inputRef.classList.add("invalid");
    changeClass("invalid", "valid");
  }
});

function changeClass(addClass, removeClass) {
  inputRef.classList.remove(removeClass);
  inputRef.classList.add(addClass);
}
