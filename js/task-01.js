const categoriesRef = document.querySelector("#categories");
console.log("Number of categories:", categoriesRef.children.length);

const arrayItem = categoriesRef.querySelectorAll(".item");
arrayItem.forEach((element) => {
  console.log("Category:", element.querySelector("h2").textContent);
  console.log("Elements:", element.querySelectorAll("li").length);
});
