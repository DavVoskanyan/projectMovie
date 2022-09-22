function regExpCheck(regExp) {
    return (input) => regExp.test(input.value)
}


////////////////////////////   E M P T Y   I N P U T   V A L I D A T I O N   //////////////////////////
const allInputs = document.querySelectorAll("input");
const allErrorFields = document.querySelectorAll("form span");

function inputIsNotEmpty(input) {
    return input.value.trim();
}

allInputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        if(inputIsNotEmpty(input)) { allErrorFields.item(index).innerText = "";  }
        else { allErrorFields.item(index).innerText = "Field must not be empty..."; }
    })
} )


//////////////////////////////   M A I L   I N P U T   V A L I D A T I O N   ////////////////////////////
const mailInput = document.querySelector("#signUpForm #mailSignUp");
const mailErrorField = document.querySelector("#signUpForm .mailValid");
const mailRegEx = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
const mailInputCheck = regExpCheck(mailRegEx);


mailInput.addEventListener("change", () => {
    if(mailInputCheck(mailInput)) { mailErrorField.innerText = ""; }
    else if (!mailErrorField.innerText) { mailErrorField.innerText = "Not valid mail..."; }
})


///////////////////////////////   P A S S W O R D   I N P U T   V A L I D A T I O N   /////////////////////////////
const passwordInput = document.querySelector("#signUpForm #passwordSignUp");
const passwordErrorField = document.querySelector("#signUpForm .passwordValid");
const passwordRegEx = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
const passwordInputCheck = regExpCheck(passwordRegEx);

passwordInput.addEventListener("change", () => {
    if( passwordInputCheck(passwordInput) ) { passwordErrorField.innerText = ""; }
    else if (!passwordErrorField.innerText) { passwordErrorField.innerText = "At least 8 symbols: 1 letter, 1 number"; }
})


/////////////////////////////   R E P E A T   I N P U T   V A L I D A T I O N   /////////////////////////////
const repeatInput = document.querySelector("#signUpForm #repeatSignUp");
const repeatErrorField = document.querySelector("#signUpForm .repeatValid");

function isRepeatValid(passwordInput, repeatInput) {
    return passwordInput.value === repeatInput.value;
}


repeatInput.addEventListener("change", () => {
    if( isRepeatValid(passwordInput, repeatInput)) { repeatErrorField.innerText = ""; }
    else if (!repeatErrorField.innerText) { repeatErrorField.innerText = "Passwords doesn't mach"; }
})


///////////////////////////////   A L L   F O R M   V A L I D N E S S   C H E C K   F U N C T I O N   /////////////////////////
function isFormValid() {
    const inFormInputs = document.querySelectorAll(`#signUpForm input`);

    for (const input of inFormInputs) {
        if(!inputIsNotEmpty(input)) { return false; }
    }

    const mailInput = document.querySelector(`#signUpForm input[name='mail']`);
    const passwordInput = document.querySelector(`#signUpForm input[name='password']`);
    const repeatInput = document.querySelector(`#signUpForm input[name='repeatPassword']`);

    if(mailInput && !mailInputCheck(mailInput)) { return false; }
    if(passwordInput && !passwordInputCheck(passwordInput)) { return false; }
    if(repeatInput && passwordInput && !isRepeatValid(passwordInput, repeatInput)) { return false; }

    return true;
}





export default [isFormValid, inputIsNotEmpty];