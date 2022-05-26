const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const email = formRef.elements.email.value;
  const password = formRef.elements.password.value;
  let result = {};

  if (email === "" || password === "") {
    alert("Необходимо заполнить все поля.");
  } else {
    result = {
      [formRef.elements.email.name]: email,
      [formRef.elements.password.name]: password,
    };
  }

  console.log(result);
  formRef.reset();
}
