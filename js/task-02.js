const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayIngredients = [];
ingredients.forEach((element) => {
  const elementRef = document.createElement("li");
  elementRef.textContent = element;
  elementRef.classList.add("item");
  arrayIngredients.push(elementRef);
});

const ingredientsListRef = document.querySelector("#ingredients");
ingredientsListRef.append(...arrayIngredients);
