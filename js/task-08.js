const form = document.querySelector("form.login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
    const formFields = {
        email: event.currentTarget.email.value,
        password: event.currentTarget.password.value,
    }

    if (formFields.email === "" || formFields.password === "") {
        alert("Please fill in all the fields!");
        event.currentTarget.reset();
        return;
    }

    console.log(formFields);
    event.currentTarget.reset();
}