// Q1: Interactive Text Changer

// Select the paragraph and button using DOM selection methods
const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

// Replace the paragraph text
function changeMessage() {
  message.textContent = "Hello there!";
}

// Run changeMessage() when the button is clicked
changeBtn.addEventListener("click", changeMessage);
