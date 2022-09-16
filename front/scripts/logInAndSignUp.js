//////////////////////////////   F O R M S   C H A N G E   B Y   C L I C K I N G   //////////////////////////
const signUpButton = document.querySelectorAll(".formTitle").item(0);
const logInButton = document.querySelectorAll(".formTitle").item(1);
const signUpForm = document.querySelector("#signUpForm");
const logInForm = document.querySelector("#logInForm");

signUpButton.addEventListener("click", () => {
    signUpButton.classList.add("active");
    logInButton.classList.remove("active");
    signUpForm.classList.remove("hidden");
    logInForm.classList.add("hidden");
})
logInButton.addEventListener("click", () => {
    logInButton.classList.add("active");
    signUpButton.classList.remove("active");
    logInForm.classList.remove("hidden");
    signUpForm.classList.add("hidden");
})