const cardForm = document.getElementById("card-form");
const submitBtn = document.getElementById("submit");
const thankYou = document.getElementById("thank-you");
const cardNumber = document.getElementById("input-number");
const cardNumberError = document.getElementById("number-error");
const cardName = document.getElementById("input-name");
const cardNameError = document.getElementById("name-error");
const expireMonth = document.getElementById("exp-month");
const expireMonthError = document.getElementById("date-error");
const expireYear = document.getElementById("exp-year");
const expireYearError = document.getElementById("date-error");
const cvc = document.getElementById("cvc");
const cvcError = document.getElementById("cvc-error");
const continueBtn = document.getElementById("continue");

// create an error message for each if statement and append it to the form
function cardNameValidation() {
  if (cardName.value === "") {
    cardNameError.classList.remove("hidden");
  } else {
    return true;
  }
}

function cardNumberValidation() {
  if (cardNumber.value === "") {
    cardNumberError.classList.remove("hidden");
  } else if (cardNumber.value.length < 16 || cardNumber.value.length > 16) {
    cardNumberError.classList.remove("hidden");
  } else {
    return;
  }
}

function expireMonthValidation() {
  if (expireMonth.value === "") {
    expireMonthError.classList.remove("hidden");
  } else {
    return true;
  }
}

function expireYearValidation() {
  if (expireYear.value === "") {
    expireYearError.classList.remove("hidden");
  } else {
    return true;
  }
}

function cvcValidation() {
  if (cvc.value === "") {
    cvcError.classList.remove("hidden");
  } else {
    return true;
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cardNameValidation();
  cardNumberValidation();
  expireMonthValidation();
  expireYearValidation();
  cvcValidation();
  cardForm.classList.add("hidden");
  thankYou.classList.remove("hidden");
});

continueBtn.addEventListener("click", (e) => {
  e.preventDefault();
  thankYou.classList.add("hidden");
  cardForm.classList.remove("hidden");
});
