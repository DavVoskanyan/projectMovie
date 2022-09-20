import methods from '/front/scripts/inputsValidation.js';
let [isFormValid, inputIsNotEmpty] = methods;

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



//////////////////////////////   S I G N - U P / L O G - I N   B U T T O N S  /////////////////////////
/////////////////////////////////////   E N A B L E / D I S A B L E   /////////////////////////////////

const allSignUpInputs = document.querySelectorAll("#signUpForm input");
const signUpSubmit = document.querySelector("#signUpForm button")
const allLogInInputs = document.querySelectorAll("#logInForm input");
const logInSubmit = document.querySelector("#logInForm button")

function disableButton(button) { button.setAttribute("disabled", "true"); }
function ableButton(button) { button.removeAttribute("disabled"); }

allSignUpInputs.forEach(input => {
    input.addEventListener("change", () => {
        if(isFormValid("signUpForm")) { ableButton(signUpSubmit) }
        else { disableButton(signUpSubmit); }
    })
})

allLogInInputs.forEach(input => {
    input.addEventListener("input", () => {
        if(inputIsNotEmpty(allLogInInputs.item(0)) && inputIsNotEmpty(allLogInInputs.item(1))) { ableButton(logInSubmit) }
        else { disableButton(logInSubmit); }
    })
})

