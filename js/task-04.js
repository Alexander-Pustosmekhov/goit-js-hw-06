let counterValue = 0;

const btnDecrementRef = document.querySelector('[data-action="decrement"');
const btnIncrementRef = document.querySelector('[data-action="increment"]');
let counterRef = document.querySelector("#value").textContent;

function decreaseValue() {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
}

function increaseValue() {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
}

btnDecrementRef.addEventListener("click", () => increaseValue());
btnIncrementRef.addEventListener("click", () => decreaseValue());
