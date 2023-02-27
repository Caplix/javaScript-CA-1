
const alNumNoSpace = /^[a-zA-Z ]{3,}$/;
const validAddress = /^.{25,}$/;
const commonEmail =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6})*$/;
const regexTester = (input, rule) => {
  if (input === '') {
    console.log('RegTest:', 'false, empty string');
    return false;
  }
  console.log('RegTest:', rule.test(input));
  return rule.test(input);
};

document.title = "Contact form page"

const form = document.getElementById("form");

const firstNameEl = document.getElementById("firstName");

const addressEl = document.getElementById("address");
const thank = document.querySelector(".thank-you")
const emailEl = document.getElementById("email");
const btn = document.querySelector("button")

//error
const nameError = document.querySelector(".name-error")
const addressError = document.querySelector(".address-error")
const emailError = document.querySelector(".email-error");


//error


const validateInputs = () => {


if(!regexTester(firstNameEl.value, alNumNoSpace)) {
   nameError.classList.remove("hidden")
} else {
  nameError.classList.add("hidden")
}

if(!regexTester(addressEl.value, validAddress)) {
    addressError.classList.remove("hidden")
} else {
    addressError.classList.add("hidden")
}

if(!regexTester(emailEl.value, commonEmail)) {
    emailError.classList.remove("hidden")
} else {
    emailError.classList.add("hidden")
   
    
}
if (
    
    regexTester(firstNameEl.value, alNumNoSpace)
    && regexTester(addressEl.value, validAddress)
    && regexTester(emailEl.value, commonEmail)
    ) {
        thank.classList.remove("hide")        
    } else {
        form.classList.add("hidden")
    }


}

form.addEventListener("submit", e => {
    e.preventDefault()
    validateInputs()
});


