////////////////////////////   E M P T Y   I N P U T   V A L I D A T I O N   //////////////////////////
const allInputs = document.querySelectorAll("input");
const allErrorFields = document.querySelectorAll("form span");

allInputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        if(!input.value.trim()) { allErrorFields.item(index).innerHTML = "Field must not be empty...";  }
        else { allErrorFields.item(index).innerHTML = ""; }
    })
} )


//////////////////////////////   M A I L   I N P U T   V A L I D A T I O N   ////////////////////////////
const mailInput = document.querySelector("#signUpForm #mailSignUp");
const mailErrorField = document.querySelector("#signUpForm .mailValid");
const mailRegEx = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

mailInput.addEventListener("change", () => {
    if( mailRegEx.test(mailInput.value)) { mailErrorField.innerText = ""; }
    if (!mailErrorField.innerText) { mailErrorField.innerText = "Not valid mail..."; }
})


///////////////////////////////   P A S S W O R D   I N P U T   V A L I D A T I O N   /////////////////////////////
const passwordInput = document.querySelector("#signUpForm #passwordSignUp");
const passwordErrorField = document.querySelector("#signUpForm .passwordValid");
const passwordRegEx = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

passwordInput.addEventListener("change", () => {
    if( passwordRegEx.test(passwordInput.value)) { passwordErrorField.innerText = ""; }
    if (!passwordErrorField.innerText) { passwordErrorField.innerText = "Not valid mail..."; }
})


/////////////////////////////   R E P E A T   I N P U T   V A L I D A T I O N   /////////////////////////////
const repeatInput = document.querySelector("#signUpForm #repeatSignUp");
const repeatErrorField = document.querySelector("#signUpForm .repeatValid");

repeatInput.addEventListener("change", () => {
    if( passwordInput.value === repeatInput.value) { repeatErrorField.innerText = ""; }
    if (!repeatErrorField.innerText) { repeatErrorField.innerText = "Not valid mail..."; }
})