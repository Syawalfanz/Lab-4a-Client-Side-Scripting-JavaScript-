// Q2: Smart Number Validator

const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

function checkInput() {
  // Read the input and remove spaces at the start/end
  const value = userInput.value.trim();

  // Convert the text to a number (returns NaN for text like "abc")
  const number = Number(value);

  if (value === "" || !Number.isFinite(number)) {
    // Empty, whitespace-only or non-numeric input
    result.textContent = "Please enter a valid number!";
  } else if (number < 10) {
    result.textContent = "The number is lower than 10";
  } else if (number > 10) {
    result.textContent = "The number is higher than 10";
  } else {
    result.textContent = "The number is equal to 10";
  }
}

checkBtn.addEventListener("click", checkInput);
