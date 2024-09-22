const cardForm = document.getElementById("card-form");
const submitBtn = document.getElementById("submit");
const thankYou = document.getElementById("thank-you");
const cardNumber = document.getElementById("number");
const cardName = document.getElementById("card-name");
const cardExp = document.getElementById("card-exp");
const continueBtn = document.getElementById("continue");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cardForm.classList.add("hidden");
  thankYou.classList.remove("hidden");
});

continueBtn.addEventListener("click", (e) => {
  e.preventDefault();
  thankYou.classList.add("hidden");
  cardForm.classList.remove("hidden");
});
