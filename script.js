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

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (cardNumber.value === "") {
    cardNumberError.classList.remove("hidden");
  } else if (cardName.value === "") {
    cardNameError.classList.remove("hidden");
  } else if (expireMonth.value === "") {
    expireMonthError.classList.remove("hidden");
  } else if (expireYear.value === "") {
    expireYearError.classList.remove("hidden");
  } else if (cvc.value === "") {
    cvcError.classList.remove("hidden");
  } else {
    cardForm.classList.add("hidden");
    thankYou.classList.remove("hidden");
  }
});

continueBtn.addEventListener("click", (e) => {
  e.preventDefault();
  thankYou.classList.add("hidden");
  cardForm.classList.remove("hidden");
});
