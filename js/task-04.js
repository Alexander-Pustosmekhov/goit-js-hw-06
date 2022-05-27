let counterValue = 0;

const btnDecrementRef = document.querySelector('[data-action="decrement"');
const btnIncrementRef = document.querySelector('[data-action="increment"]');
let counterRef = document.querySelector("#value");

function decreaseValue() {
  counterValue += 1;
  counterRef.textContent = counterValue;
}

function increaseValue() {
  counterValue -= 1;
  counterRef.textContent = counterValue;
}

btnDecrementRef.addEventListener("click", () => increaseValue());
btnIncrementRef.addEventListener("click", () => decreaseValue());
