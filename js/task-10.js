function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector("#boxes");
const createBtnRef = document.querySelector(`button[data-create]`);
const destroyBtnRef = document.querySelector(`button[data-destroy]`);
const inputValueRef = document.querySelector("input");
let userInput = 0;

inputValueRef.addEventListener("input", () => {
  userInput = inputValueRef.value;
});
createBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const newArr = [];
  for (let i = 1; i <= userInput; i += 1) {
    const newEl = document.createElement("div");
    const elementSize = 30 + i * 10;

    newEl.style.width = `${elementSize}px`;
    newEl.style.height = `${elementSize}px`;
    newEl.style.backgroundColor = getRandomHexColor();
    newArr.push(newEl);
  }
  boxesRef.append(...newArr);
  inputValueRef.value = "";
  userInput = 0;
}

function destroyBoxes(event) {
  boxesRef.innerHTML = "";
}
